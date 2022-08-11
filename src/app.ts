import "virtual:windi.css";

import "@/core/styles/css/all.css";
import "@/core/styles/scss/all.scss";

import { createSSRApp } from "vue";
import { createPinia } from "pinia";

import { router } from "@/router";

import { httpPlugin } from "@/core/plugins/http";

// The `pageContext` that are available in both on the server-side and browser-side
export type PageContext = {
  Page: any;
  urlPathname: string;
  url: string;
  exports: {
    documentProps?: {
      title?: string;
      description?: string;
    };
  };
};

export function createApp(pageContext: PageContext) {
  const { Page } = pageContext;

  // DO NOT IMPORT PLUGINS BEFORE use(createPinia())
  const app = createSSRApp(Page);

  app.use(createPinia()).use(router).use(httpPlugin);

  return { app, router };
}
