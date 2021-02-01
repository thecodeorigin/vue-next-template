import index from './index.vue'
/**
 * @typedef {import('vue-router').RouteRecordRaw} RouteRecordRaw
 * @type {Array<RouteRecordRaw>}
 */
export const routes = [
  {
    path: '/',
    component: index,
    meta: {
      auth: true,
      permissions: ['ALL'],
    },
  },
]

export default { routes }