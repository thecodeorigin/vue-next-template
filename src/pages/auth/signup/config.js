import index from './index.vue'

export const routes = [
  {
    name: 'auth-signup',
    path: '/auth/signup',
    component: index,
    meta: {
      authNotRequired: true,
    },
  },
]

export default { routes }
