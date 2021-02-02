import { camelCase } from 'lodash'
import { createStore } from 'vuex'

const modules = {}

const requireModule = require.context('./', true, /index.js/)
requireModule.keys().forEach((fileName) => {
  if (fileName === './index.js') return
  const moduleName = camelCase(fileName.replace(/(\.\/|index.js)/g, ''))
  modules[moduleName] = {
    namespaced: true,
    ...requireModule(fileName).default,
  }
})

console.log(modules)

export const store = createStore({
  state: () => {},
  getters: {},
  mutations: {},
  actions: {},
  modules,
})
