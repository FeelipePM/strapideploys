# 🚀 Getting started

### `prerequisites`
You must have installed docker. [Learn more](https://docs.docker.com/engine/install/)

After you install docker, you have to config your database with CMS for work right.

inside the folder `config/database.js` has te information to configure.

### `develop`
```bash
npm run develop
# or
yarn develop
```

 - You can use the flag `--watch-admin`
 <br>Starts your application with the autoReload enabled and the front-end development server. It allows you to customize the administration panel.
 ```bash
npm run develop --watch-admin
# or
yarn develop --watch-admin
``` 

### `start`

Start your application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```bash
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```bash
npm run build
# or
yarn build
```

