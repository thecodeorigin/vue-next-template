import { Route } from '@/core/models/Route'

export default new Route({
  name: 'projects-slug',
  path: '/projects/:slug',
  component: () => import('./index.vue'),
  meta: {
    title: 'projects-detail.title',
    auth: false,
    permissions: ['ALL'],
  },
})
