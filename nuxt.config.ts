// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from "url";
import { dirname, join } from "path";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available within server-side
    backendUrl: "/",
    backendApiUrl: "/api",
    // Keys within public, will be also exposed to the client-side
    public: {
      BACKEND_URL: process.env.NUXT_BACKEND_URL,
      BACKEND_API_URL: process.env.NUXT_BACKEND_API_URL,
      API_ENDPOINT: process.env.NUXT_API_ENDPOINT,
    },
  },
  css: [
    // "animate.css",
    // "@fortawesome/fontawesome-svg-core/styles.css",
    // "bootstrap-icons/",
    // "@/assets/scss/style.scss",
    // join(currentDir, "./assets/scss/style.scss"),
  ],
  components: {
    dirs: [
      {
        path: join(currentDir, "./components/Global"),
        global: true,
        pathPrefix: false,
      },
      {
        path: join(currentDir, "./components"),
        pathPrefix: true,
      },
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "${join(
            currentDir,
            "./assets/scss/variables.scss"
          )}" as *;`,
        },
      },
      devSourcemap: true,
    },
  },
  // components: [
  //   {
  //     global: true,
  //     dirs: ["~/components"],
  //     pathPrefix: false,
  //   },
  // ],
  modules: [
    [
      "@nuxtjs/eslint-module",
      {
        // options
      },
    ],
    // "@nuxt/content",
    // "@nuxtjs/color-mode",
    // "@pinia/nuxt",
    // "nuxt-lodash",
    // "@pinia-plugin-persistedstate/nuxt",
  ],
  eslint: {
    // ignorePatterns: ["temp.js", "/template_src"],
  },
  devtools: {
    enabled: true,

    /*timeline: {
      enabled: true,
    },*/
  },
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
  experimental: {
    headNext: true,
    viewTransition: true,
  },
});
