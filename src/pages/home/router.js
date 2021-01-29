/**
 * @typedef {import('vue-router').RouteRecordRaw} RouteRecordRaw
 * @type {Array<RouteRecordRaw>}
 */
const routes = [
  {
    path: "/",
    component: import("./")
  }
];
export default routes;
