import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../middleware/auth";
import home from "../../modules/home/router";
import about from "../../modules/about/router";
import compositionApi from "../../modules/composition-api/router";

/**
 * @typedef {import('vue-router').RouteRecordRaw} RouteRecordRaw
 * @type {Array<RouteRecordRaw>}
 */
const routes = [...home, ...about, ...compositionApi];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Global middleware
router.beforeEach(auth);

export { router };
