import rootModule from './root'
import _camelCase from 'lodash/camelCase'
import _cloneDeep from 'lodash/cloneDeep'
import { createStore } from 'vuex'

const modules = {}

// See docs: https://webpack.js.org/guides/dependency-management/#context-module-api
const requireModule = require.context('./', true, /^(?=.*index).*\.js$/)
requireModule.keys().forEach((fileName) => {
  // Ignore this root index.js file, this is not a module
  if (fileName === './index.js') return
  // If your module path is something/else, moduleName will be somethingElse
  const moduleName = _camelCase(fileName.replace(/(\.\/|index.js)/g, ''))
  modules[moduleName] = requireModule(fileName).default
})

export const store = createStore({
  ...rootModule,
  modules,
})

store.dispatch('vueServerInit')

const initialStateCopy = _cloneDeep(store.state)

export function resetVuexState() {
  store.replaceState(_cloneDeep(initialStateCopy))
}
