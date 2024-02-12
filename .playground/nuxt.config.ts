import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);
export default defineNuxtConfig({
  extends: [".."],
  vite: {
    css: {
      preprocessorOptions: {
        test: {
          minThreads: 0,
          maxThreads: 1,
        },
        scss: {
          additionalData: `
           @use "${resolve("./assets/scss/variables.scss")}" as *;
            @import "${resolve("./assets/scss/additionalData")}";
          `,
        },
      },
      devSourcemap: true,
    },
  },
})
