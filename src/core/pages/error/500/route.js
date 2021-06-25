import { Route } from '@/core/models/Route'

export default new Route({
  name: '500',
  path: '/error',
  component: () => import('./index.vue'),
  meta: {
    title: 'error.500',
    layout: 'error',
    auth: false,
  },
})
