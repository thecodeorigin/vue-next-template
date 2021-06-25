import { Route } from '@/core/models/Route'

export default new Route({
  name: 'auth-signin',
  path: '/auth/signin',
  component: () => import('./index.vue'),
  meta: {
    title: 'signin.title',
    authNotRequired: true,
  },
})
