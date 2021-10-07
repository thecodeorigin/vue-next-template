import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import WindiCSS from "vite-plugin-windicss";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    VitePWA({
      includeAssets: [
        "favicon.svg",
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png",
      ],
      manifest: {
        name: "Vue next template",
        short_name: "Short name of your app",
        description: "Description of your app",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/img/icons/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/img/icons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/img/icons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
