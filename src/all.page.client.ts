import { createApp, type PageContext } from "./app";

export async function render(pageContext: PageContext) {
  const { app, router } = createApp(pageContext);

  await router.isReady();

  app.mount("#app");
}
