import { createStore } from 'vuex'
import { home } from './home'
import { auth } from './auth'

export const store = createStore({
  state: () => {},
  getters: {},
  mutations: {},
  actions: {},
  // Import modules
  modules: {
    auth,
    home,
  },
})
