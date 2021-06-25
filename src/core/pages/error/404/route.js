import { Route } from '@/core/models/Route'

export default new Route({
  name: '404',
  path: '/:pathMatch(.*)*',
  component: () => import('./index.vue'),
  meta: {
    title: 'error.404',
    layout: 'error',
    auth: false,
  },
})
