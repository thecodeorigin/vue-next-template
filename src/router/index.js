import { createRouter, createWebHistory } from "vue-router";
import { auth } from "@/core/middleware/auth";
import about from "@/pages/about/router";
import home from "@/pages/home/router";

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
