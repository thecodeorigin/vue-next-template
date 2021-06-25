import { AuthService } from '@/services/auth'

const authService = new AuthService()

export const actions = {
  async signin({ commit }, form) {
    const { data } = await authService.signin(form)
    localStorage.setItem('auth', data)
    commit('SET_AUTH', data, { root: true }) // Mutating to store for client rendering
    return data
  },

  signout({ commit }) {
    localStorage.removeItem('auth')
    commit('SET_AUTH', null, { root: true })
  },
}
