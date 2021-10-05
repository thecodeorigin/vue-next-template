/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module "virtual:pwa-register/vue" {
  import { Ref } from "vue";
  type RegisterSWOptions = {
    immediate?: boolean;
    onNeedRefresh?: () => void;
    onOfflineReady?: () => void;
  };

  function useRegisterSW(
    options?: RegisterSWOptions
  ): {
    needRefresh: Ref<boolean>;
    offlineReady: Ref<boolean>;
    updateServiceWorker(reloadPage?: boolean): void;
  };
}
declare module "virtual:pwa-register" {
  type RegisterSWOptions = {
    immediate?: boolean;
    onNeedRefresh?: () => void;
    onOfflineReady?: () => void;
  };

  function registerSW(
    options?: RegisterSWOptions
  ): (reloadPage?: boolean) => void;
}