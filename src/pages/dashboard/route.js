import { Route } from '@/core/models/Route'

export default new Route({
  name: 'dashboard',
  path: '/',
  component: () => import('./index.vue'),
  alias: ['/dashboard', '/home'],
  meta: {
    title: 'dashboard.title',
    auth: false,
    permissions: ['ALL'],
  },
})
