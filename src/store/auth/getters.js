export const getters = {
  currentUser(state) {
    return state.data?.user
  },

  permissions(state) {
    return state.data?.user?.permissions
  },

  accessToken(state) {
    return state.data?.token
  },
}
