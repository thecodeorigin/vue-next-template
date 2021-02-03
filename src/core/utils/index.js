/* eslint-disable prettier/prettier */
// Any modules in @utils will be registered
export const utils = {
  install(app) {
    // Setup all utilities
    // Filters, directives global components and helper functions are setup
    // Setup filter with $f
    app.config.globalProperties.$f = {}

    // See docs: https://webpack.js.org/guides/dependency-management/#context-module-api
    const requireModule = require.context('./', true, /^(?!.*index).*\.js$/ /* Every javascript file except index.js file */)
    requireModule.keys().forEach((fileName) => {

      const module = requireModule(fileName).default

      const temp = fileName.replace(/(\.\/|\.js)/g /* Remove "./" and ".js" */, '').split('/')
      const moduleName = temp.length > 1 ? temp[temp.length - 1] : temp[0]

      switch (temp[0]) {
        case 'filters':
          // Use filter as $f.filterName(value) in your template or this.$f.filterName(value) in your component instance
          app.config.globalProperties.$f[moduleName] = module
          break;
        case 'directives':
          app.directive(moduleName, module)
          break;
        case 'global-components':
          app.component(moduleName, module)
          break;
        case 'functions':
          app.config.globalProperties[moduleName] = module
          break;
        default:
          break;
      }

    })
  },
}
