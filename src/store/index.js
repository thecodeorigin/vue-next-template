/* eslint-disable prettier/prettier */
import { camelCase } from 'lodash'
import { createStore } from 'vuex'

const modules = {}

// See docs: https://webpack.js.org/guides/dependency-management/#context-module-api
const requireModule = require.context('./', true, /^(?=.*index).*\.js$/ /* Every index.js file */)
requireModule.keys().forEach((fileName) => {
  // Ignore this file, this is not a module
  if (fileName === './index.js') return
  // If your module path is something/else, moduleName will be somethingElse
  const moduleName = camelCase(fileName.replace(/(\.\/|index.js)/g, ''))
  modules[moduleName] = {
    namespaced: true,
    ...requireModule(fileName).default,
  }
})

export const store = createStore({
  state: () => {},
  getters: {},
  mutations: {},
  actions: {},
  modules,
})
