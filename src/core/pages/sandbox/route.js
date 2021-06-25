import { Route } from '@/core/models/Route'

export default new Route({
  name: 'sandbox',
  path: '/sandbox',
  component: () => import('./index.vue'),
  meta: {
    title: 'sandbox.title',
    auth: false,
    layout: 'blank',
  },
})
