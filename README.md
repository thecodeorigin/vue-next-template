# vue-next-template

Inspired by vue-enterprise-template
See the [vue-enterprise-template repo](https://github.com/chrisvfritz/vue-enterprise-boilerplate)

## Project setup

``` bash
# Setup alias
node _start.js

npm install
# OR
yarn
```

### Compiles and hot-reloads for development

``` bash
npm run dev
# OR
yarn dev
```

### Compiles and minifies for production

``` bash
npm run build
# OR
yarn build
```

### Lints and fixes files

``` bash
npm run lint
# OR
yarn lint
# lint and fix
yarn lint --fix
```

## Project structure

Project folders:
> These are the folders that you will frequently change while doing the project
- components
- locales
- pages
- router
- services
- store
- styles

Core folder:
> These are the common features, components, pages,... for the whole project
- api
- components
- constants
- layouts
- middleware
- mixins
- pages
- plugins
- styles
- utils

>Code will be put in the core folder if create a new feature, a new module doesn't make change to that code


### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
