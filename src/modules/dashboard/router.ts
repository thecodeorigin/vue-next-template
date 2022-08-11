import type { RouteRecordRaw } from "vue-router";
import { Layout } from "@/core/constants/layout.enum";

export const dashboardRoutes: RouteRecordRaw = {
  path: "/",
  name: "DashboardPage",
  component: () => import("./page.vue"),
  meta: {
    layout: Layout.DEFAULT,
  },
};
