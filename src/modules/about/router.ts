import type { RouteRecordRaw } from "vue-router";
import { Layout } from "@/core/constants/layout.enum";

export const aboutRoutes: RouteRecordRaw = {
  path: "/about",
  name: "AboutPage",
  component: () => import("./page.vue"),
  meta: {
    layout: Layout.BLANK,
  },
};
