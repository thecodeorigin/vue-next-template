import type { RouteRecordRaw } from "vue-router";
import { Layout } from "@/core/constants/layout.enum";

import DashboardPage from "./page.vue";

export const dashboardRoutes: RouteRecordRaw = {
  path: "/",
  name: "DashboardPage",
  component: DashboardPage,
  meta: {
    layout: Layout.DEFAULT,
  },
};
