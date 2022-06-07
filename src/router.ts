import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

import { dashboardRoutes } from "@/modules/dashboard/router";

const routes: Array<RouteRecordRaw> = [dashboardRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
