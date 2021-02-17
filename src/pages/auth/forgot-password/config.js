import index from './index.vue'

export const routes = [
  {
    name: 'auth-forgot-password',
    path: '/auth/forgot-password',
    component: index,
    meta: {
      authNotRequired: true,
    },
  },
]

export default { routes }
