'use strict'

/**
 *  article controller
 */

const { createCoreController } = require('@strapi/strapi').factories
const _ = require('lodash')
const {
  transformParamsToQuery,
  pickSelectionParams
} = require('@strapi/strapi/lib/services/entity-service/params')

const ENTITY_UID = 'api::article.article'
const CATEGORY_UID = 'api::category.category'

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  async findOne (ctx) {
    const { id: slug } = ctx.params
    const queryParams = ctx.query || {}

    const query = transformParamsToQuery(
      ENTITY_UID,
      pickSelectionParams(queryParams))

    _.set(query, ['where', 'slug', '$eq'], slug)

    const currentArticle = await strapi.db.query(ENTITY_UID).findOne({
      populate: ['image', 'authors.picture', 'tags'],
      where: {
        slug
      }
    })

    const { id, publishedAt } = currentArticle

    const previousArticle = await strapi.db.query(ENTITY_UID).findOne({
      select: ['id', 'slug', 'publishedAt'],
      where: {
        publishedAt: {
          $gt: publishedAt
        }
      },
      orderBy: { publishedAt: 'asc' }
    })

    const nextArticle = await strapi.db.query(ENTITY_UID).findOne({
      select: ['id', 'slug', 'publishedAt'],
      where: {
        publishedAt: {
          $lt: publishedAt
        }
      },
      orderBy: { publishedAt: 'desc' }
    })

    const articles = await strapi.db.query(ENTITY_UID).findMany({
      select: ['title', 'description', 'slug', 'publishedAt'],
      populate: ['image', 'authors.picture'],
      limit: 4,
      where: {
        id: {
          $ne: id
        },
        publishedAt: {
          $ne: null,
        },
        authors: {
          $not: null,
        }
      },
      orderBy: { publishedAt: 'desc' }
    })

    const content = currentArticle.content.replaceAll('/uploads/', 'http://localhost:1337/uploads/')

    return {
      content,
      currentArticle,
      previousArticle,
      nextArticle,
      articles
    }
  },

  async find (ctx) {
    const categories = await strapi.db.query(CATEGORY_UID).findMany({
      select: ['slug']
    })

    const category = categories.map(category => (category.slug))

    const allArticles = await strapi.db.query(ENTITY_UID).findMany({
      populate: ['image', 'authors.picture'],
      orderBy: { publishedAt: 'desc' },
      where: {
        publishedAt: {
          $ne: null,
        },
        authors: {
          $not: null,
        }
      }
    })

    const highlightedArticle = allArticles[0]

    const total = await strapi.db.query(ENTITY_UID).count({
      where: {
        id: {
          $ne: highlightedArticle.id
        },
        title: {
          $containsi: ctx.query.search || ''
        },
        categories: {
          slug: {
            $in: ctx.query.category || category
          }
        },
        publishedAt: {
          $ne: null,
        },
        authors: {
          $not: null,
        }
      }
    })

    const pageLimit = 6

    const pages = Math.ceil(total / pageLimit)

    const calculateOffset = (page, limit) => {
      if (page === 1) {
        return 0
      } else {
        return (page - 1) * limit
      }
    }
    const searchLimit = ctx.query.search || ctx.query.category

    const articles = await strapi.db.query(ENTITY_UID).findMany({
      select: ['id', 'title', 'description', 'slug', 'publishedAt'],
      populate: ['image', 'authors.picture', 'categories'],
      orderBy: { publishedAt: 'desc' },
      limit: searchLimit ? total : pageLimit,
      offset: calculateOffset(ctx.query.page, pageLimit),
      where: {
        id: {
          $ne: highlightedArticle.id
        },
        title: {
          $containsi: ctx.query.search || ''
        },
        categories: {
          slug: {
            $in: ctx.query.category || category
          }
        },
        publishedAt: {
          $ne: null,
        },
        authors: {
          $not: null,
        }
      }
    })

    return {
      allArticles,
      articles,
      highlightedArticle,
      total,
      pages
    }
  }
}))
