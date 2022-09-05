import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import https from "https";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/ducks-api": {
        target: "https://random-d.uk/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ducks-api/, ""),
      },
    },
  },
});
