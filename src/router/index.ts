import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../pages/home.vue";
import About from "../pages/about.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
