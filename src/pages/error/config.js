import NotFoundErrorPage from './404.vue'
import InternalServerErrorPage from './500.vue'

export const routes = [
  {
    name: '404',
    path: '/:pathMatch(.*)*',
    component: NotFoundErrorPage,
    meta: {
      auth: false,
    },
  },
  {
    name: '500',
    path: '/error',
    component: InternalServerErrorPage,
    meta: {
      auth: false,
    },
  },
]

export default { routes }
