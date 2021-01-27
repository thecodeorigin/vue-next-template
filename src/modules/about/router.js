/**
 * @typedef {import('vue-router').RouteRecordRaw} RouteRecordRaw
 * @type {Array<RouteRecordRaw>}
 */
const routes = [
  {
    path: "/about",
    component: () => import("./pages")
  }
];
export default routes;
