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
      devSourcemap: true,
    },
  },
  modules: ["@nuxtjs/eslint-module", "@nuxt/image"],
  devtools: {
    enabled: true,
  },
  experimental: {
    headNext: true,
    viewTransition: true,
  },
});
