import { authService } from '@/services/auth'
import { authMutations } from './enums'

export const actions = {
  /**
   * Login action
   * @param {Object} context Vuex default action's first parameter
   * @param {Object} form Get from login form
   * @param {String} form.email
   * @param {String} form.password
   * @returns {void} Return nothing
   */
  async signin({ commit }, form) {
    const { data } = await authService.signin(form)
    localStorage.setItem('auth', data)
    commit(authMutations.SET.AUTH, data, { root: true }) // Mutating to store for client rendering
    return data
  },
  /**
   * Logout action
   * @param {Object} context Vuex default action's first parameter
   * @returns {void} Return nothing
   */
  signout({ commit }) {
    localStorage.removeItem('auth')
    commit(authMutations.SET.AUTH, null, { root: true })
  },
}
