import "virtual:windi.css";

import "@/core/styles/css/all.css";
import "@/core/styles/scss/all.scss";

import { createApp } from "vue";

import { createPinia } from "pinia";
import Root from "@/Root.vue";

import { router } from "@/router";

import { httpPlugin } from "@/core/plugins/http";

// DO NOT IMPORT PLUGINS BEFORE use(createPinia())
createApp(Root).use(createPinia()).use(router).use(httpPlugin).mount("#app");
