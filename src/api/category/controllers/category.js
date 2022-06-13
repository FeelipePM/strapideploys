'use strict'

/**
 *  category controller
 */

const { createCoreController } = require('@strapi/strapi').factories

const _ = require('lodash')
const {
  transformParamsToQuery,
  pickSelectionParams
} = require('@strapi/strapi/lib/services/entity-service/params')

const ENTITY_UID = 'api::category.category'

module.exports = createCoreController('api::category.category', ({ strapi }) => ({
  async findOne (ctx) {
    const { id: slug } = ctx.params
    const queryParams = ctx.query || {}

    const query = transformParamsToQuery(
      ENTITY_UID,
      pickSelectionParams(queryParams))

    _.set(query, ['where', 'slug', '$eq'], slug)

    const categories = await strapi.db.query(ENTITY_UID).findOne({
      select: ['name', 'slug']
    })

    return {
      categories
    }
  }
}))
