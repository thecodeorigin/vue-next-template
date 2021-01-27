/**
 * @typedef {import('vue-router').RouteRecordRaw} RouteRecordRaw
 * @type {Array<RouteRecordRaw>}
 */

import Index from "./pages/index.vue";

const routes = [
  {
    path: "/composition-api",
    component: Index
  }
];
export default routes;
