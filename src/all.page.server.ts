import { renderToString } from "@vue/server-renderer";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import { createApp, type PageContext } from "./app";

export async function render(pageContext: PageContext) {
  const { app, router } = createApp(pageContext);

  // set the router to the desired URL before rendering
  router.push(pageContext.url);

  await router.isReady();

  const appHtml = await renderToString(app);

  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;
}
