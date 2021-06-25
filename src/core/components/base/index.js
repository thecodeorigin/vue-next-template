import _camelCase from 'lodash/camelCase'

// We don't scan .vue file directly because:
// A component can have sub-components that are not exported
// An index.js file can decide what to export and be named

export const baseComponents = {
  install(app) {
    // Every index.js file
    const requireModule = require.context('./', true, /index\.js$/)

    requireModule.keys().forEach((fileName) => {
      if (fileName !== './index.js') {
        const module = requireModule(fileName).default
        let moduleName = ''
        // If module has no name set, use fileName
        if (!module.name) {
          // Remove "./" and "index.js"
          moduleName = _camelCase(fileName.replace(/(\.\/|index.js)/g, ''))
          moduleName = moduleName.charAt(0).toUpperCase() + moduleName.slice(1)
          app.component(moduleName, module)
        } else {
          app.component(module.name, module)
        }
      }
    })
  },
}
