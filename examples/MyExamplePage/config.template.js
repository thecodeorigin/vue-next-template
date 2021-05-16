import index from './index.template'
/**
 * @typedef {import('@examples/MyExamplePage/vue-router').RouteRecordRaw} RouteRecordRaw
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
