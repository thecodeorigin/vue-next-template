import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../middleware/auth";
import about from "../../modules/about/router";
import home from "../../modules/home/router";

/**
 * @typedef {import('vue-router').RouteRecordRaw} RouteRecordRaw
 * @type {Array<RouteRecordRaw>}
 */
const routes = [...about, ...home];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Global middleware
router.beforeEach(auth);

export { router };
