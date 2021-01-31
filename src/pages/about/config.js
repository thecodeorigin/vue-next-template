import index from ".";
/**
 * @typedef {import('vue-router').RouteRecordRaw} RouteRecordRaw
 * @type {Array<RouteRecordRaw>}
 */
export const routes = [
  {
    path: "/about",
    component: index,
    meta: {
      auth: true,
      permissions: ["ALL"]
    }
  }
];

export default { routes };
