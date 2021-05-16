/* eslint-disable prettier/prettier */
import { camelCase } from 'lodash'
import { createStore } from 'vuex'
import { rootActions, rootMutations } from './enums'
import { authMutations } from './auth/enums'

const modules = {}

// See docs: https://webpack.js.org/guides/dependency-management/#context-module-api
const requireModule = require.context('./', true, /^(?=.*index).*\.js$/ /* Every index.js file */)
requireModule.keys().forEach((fileName) => {
  // Ignore this root index.js file, this is not a module
  if (fileName === './index.js') return
  // If your module path is something/else, moduleName will be somethingElse
  const moduleName = camelCase(fileName.replace(/(\.\/|index.js)/g, ''))
  modules[moduleName] = {
    namespaced: true,
    ...requireModule(fileName).default,
  }
})

export const store = createStore({
  state: {
    vueServerReady: false,
    options: {
      sidebarCollapsed: false,
    }
  },
  mutations: {
    TOGGLE_SIDEBAR_COLLAPSE(state) {
      state.options.sidebarCollapsed = !state.options.sidebarCollapsed
    },
    SET_VUE_SERVER_READY(state, vueServerReady) {
      state.vueServerReady = vueServerReady
    },
  },
  actions: {
    vueServerInit({ rootState, commit }) {
      if (!rootState.vueServerReady) {
        const auth = localStorage.getItem('auth')
        commit(authMutations.SET.AUTH, auth ? JSON.parse(auth) : null, {root: true})
        commit(rootMutations.SET.VUE_SERVER_READY, true)
      }
    }
  },
  modules,
})

store.dispatch(rootActions.VUE_SERVER_INIT)

const initialStateCopy = JSON.parse(JSON.stringify(store.state))

export function resetVuexState () {
  store.replaceState(JSON.parse(JSON.stringify(initialStateCopy)))
}
