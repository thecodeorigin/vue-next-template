import type { RouteRecordRaw } from "vue-router";
import { createRouter, createMemoryHistory, createWebHistory } from "vue-router";

import { dashboardRoutes } from "@/modules/dashboard/router";
import { aboutRoutes } from "@/modules/about/router";

const routes: Array<RouteRecordRaw> = [dashboardRoutes, aboutRoutes];

const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes,
});

export { router };
