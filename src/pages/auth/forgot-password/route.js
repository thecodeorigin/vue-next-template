import { Route } from '@/core/models/Route'

export default new Route({
  name: 'auth-forgot-password',
  path: '/auth/forgot-password',
  component: () => import('./index.vue'),
  meta: {
    title: 'forgot-password.title',
    authNotRequired: true,
  },
})
