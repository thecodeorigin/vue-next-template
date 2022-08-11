import axios from "axios";

import type { App } from "vue";
import { useAuthStore } from "@/modules/auth/store";

export const httpPlugin = {
  install(app: App) {
    const http = axios.create({
      timeout: 30000, // 30s
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const authStore = useAuthStore();

    // Add a request interceptor
    http.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        return config;
      },
      (error) => {
        // Do something with request error
        return Promise.reject(error);
      },
    );

    // Add a response interceptor
    http.interceptors.response.use(
      (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      },
    );

    // eslint-disable-next-line no-param-reassign
    app.config.globalProperties.$http = http;

    app.provide("$http", http);
  },
};
