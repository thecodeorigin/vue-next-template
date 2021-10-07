import "virtual:windi.css";
import "./core/styles/css/all.css";
import "./core/styles/scss/all.scss";

import App from "./App.vue";

import { createApp } from "vue";

import { store } from "./store";
import { router } from "./router";
import { i18nPlugin } from "./core/plugins/i18n";

import { registerSW } from "virtual:pwa-register";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const updateSW = registerSW({
  onNeedRefresh() {
    console.log("Need Refresh");
  },
  onOfflineReady() {
    console.log("Offline");
  },
});

createApp(App).use(store).use(router).use(i18nPlugin).mount("#app");
