export default {
  state: {
    vueServerReady: false,
    options: {
      sidebarCollapsed: false,
    },
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
        if (auth) {
          commit('auth/SET_AUTH', JSON.parse(auth))
        }
        commit('SET_VUE_SERVER_READY', true)
      }
    },
  },
}
