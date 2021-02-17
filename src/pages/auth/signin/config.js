import index from './index.vue'

export const routes = [
  {
    name: 'auth-signin',
    path: '/auth/signin',
    component: index,
    meta: {
      authNotRequired: true,
    },
  },
]

export default { routes }
