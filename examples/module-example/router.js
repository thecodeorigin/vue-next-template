/**
 * @typedef {import('@/examples/module-example/vue-router').RouteRecordRaw} RouteRecordRaw
 * @type {Array<RouteRecordRaw>}
 */

const routes = [
  {
    path: '/',
    component: () => import('./pages/index.vue'),
  },
]
export default routes
