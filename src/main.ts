import "virtual:windi.css";
import { registerSW } from "virtual:pwa-register";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import { i18nPlugin } from "./core/plugins/i18n";

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
