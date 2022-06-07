import { defineStore } from "pinia";

// useRootStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useRootStore = defineStore("root", {
  state: () => ({
    vueClientReady: false,
    isDarkMode: false,
    isSidebarCollapsed: false,
  }),
});
