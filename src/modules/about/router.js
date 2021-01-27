/**
 * @typedef {import('vue-router').RouteRecordRaw} RouteRecordRaw
 * @type {Array<RouteRecordRaw>}
 */
const routes = [
  {
    path: "/about",
    component: () => import("./pages/index.vue")
  }
];
export default routes;
