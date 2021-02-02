import index from './index.vue'
/**
 * @typedef {import('examples/page-example/vue-router').RouteRecordRaw} RouteRecordRaw
 * @type {Array<RouteRecordRaw>}
 */
export const routes = [
  {
    path: '/example',
    component: index,
    meta: {
      auth: true,
      permissions: ['ALL'],
    },
  },
]

export default { routes }
