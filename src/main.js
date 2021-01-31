/**
 * A few note:
 * Vite is not based on Webpack and has its own dev server which utilizes native ES modules in the browser.
 * This architecture allows is to be orders of magnitude faster than Webpack's dev server (x10 times, LOL!).
 * Vite employs Rollup for the build, which is faster as well.
 *
 * Read this article: https://vuejsdevelopers.com/2020/12/07/vite-vue-cli/
 * Also this one: https://harlanzw.com/blog/how-the-heck-does-vite-work/
 *
 * require() is not available in the browser!
 * Because it doesn't use Webpack, it will be missing some familiar features like require.context() and stuff
 *
 * Some older packages may only provide CommonJS modules and can't be implemented
 *
 * Personal oppinion: You should Vite for admin page for amazing build time, for a client page, use Vue CLI, Nuxt,...
 */
import { createApp } from "vue";
import { router } from "@/router";
import { store } from "@/store";
import { clientApiPlugin } from "@/core/services/client";
import { authApiPlugin } from "@/core/services/auth";
import { globalMixin } from "@/core/mixins/global";
import { i18nPlugin } from "@/core/plugins/i18n";
import { examplePlugin } from "@/core/plugins/example";
import { exampleDIPlugin } from "@/core/plugins/exampleDI";
import Root from "@/Root.vue";
import "@/core/assets/css/main.css";
import "@/core/assets/scss/main.scss";

// Check the imported files for code explanation
createApp(Root)
  .use(store)
  .use(router)
  .use(clientApiPlugin)
  .use(authApiPlugin)
  .use(i18nPlugin)
  .use(examplePlugin) // Used in home page
  .provide("globalDI", exampleDIPlugin) // Used in home page
  .mixin(globalMixin)
  .mount("#app");
