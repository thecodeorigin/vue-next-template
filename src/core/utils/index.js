// This will be required in runtime
// This can slow the app down due to recursive programing and stuff
// Solution: Like nuxt, i'm figuring a way to build these into files first,
// so they can be required in compile time instead runtime
export const utils = {
  install(app) {
    // Setup all utilities
    // Only filters, directives and global components are setup, helper functions must be imported manually

    // Setup filter with $f
    app.config.globalProperties.$f = {}
    const requireModule = require.context('./', true, /\.js$/)
    requireModule.keys().forEach(requireModule)
    requireModule.keys().forEach((fileName) => {
      if (!fileName.includes('index.js')) {
        const temp = fileName.replace(/(\.\/|\.js)/g, '').split('/')
        const moduleName = temp.length > 1 ? temp[temp.length - 1] : temp[0]
        if (fileName.includes('/filters')) {
          /**
           * Use filter as $f.filterName(value) in your template or this.$f.filterName(value) in your component instance
           */
          app.config.globalProperties.$f[moduleName] = requireModule(
            fileName
          ).default
        } else if (fileName.includes('/directives')) {
          app.directive(moduleName, requireModule(fileName).default)
        } else if (fileName.includes('/global-components')) {
          app.component(moduleName, requireModule(fileName).default)
        }
      }
    })
  },
}
