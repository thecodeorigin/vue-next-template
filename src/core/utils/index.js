/* eslint-disable prettier/prettier */

// Any modules in @utils will be registered
export const utils = {
  install(app) {
    // Setup all utilities
    // Filters, directives global components and helper functions are setup

    // Setup filter with $f
    app.config.globalProperties.$f = {}
    const requireModule = require.context('./', true, /\.js$/)
    requireModule.keys().forEach((fileName) => {

      if (!fileName.includes('index.js')) {

        const temp = fileName.replace(/(\.\/|\.js)/g, '').split('/')
        const moduleName = temp.length > 1 ? temp[temp.length - 1] : temp[0]

        // If file is in /filters, register it as a filter
        if (fileName.includes('/filters')) {

          // Use filter as $f.filterName(value) in your template or this.$f.filterName(value) in your component instance
          app.config.globalProperties.$f[moduleName] = requireModule(fileName).default

          // If file is in /directives, register it as a directive
        } else if (fileName.includes('/directives')) {
          app.directive(moduleName, requireModule(fileName).default)

          // If file is in /global-components, register it as a global component
        } else if (fileName.includes('/global-components')) {
          app.component(moduleName, requireModule(fileName).default)

          // If file is in /functions, register it as a global function
        } else if (fileName.includes('/functions')) {
          app.config.globalProperties[moduleName] = requireModule(fileName).default
        }
      }
    })
  },
}
