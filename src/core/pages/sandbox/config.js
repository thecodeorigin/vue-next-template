import index from './index.vue'

export const routes = [
  {
    name: 'sandbox',
    path: '/sandbox',
    component: index,
    meta: {
      auth: false,
    },
  },
]

export default { routes }
