import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: process.env.VITE_GITHUB_PAGES === "true" ? "/calidadxx.github.io/" : "/",
  plugins: [vue()]
});
