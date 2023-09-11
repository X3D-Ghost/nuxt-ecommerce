// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "animate.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    // "bootstrap-icons/",
    "@/assets/scss/style.scss",
  ],
  components: {
    dirs: [
      {
        path: "~/components/Global",
        global: true,
        pathPrefix: false,
      },
      {
        path: "~/components",
        pathPrefix: true,
      },
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/variables.scss" as *;',
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
  buildModules: [
    [
      "@nuxtjs/localforage",
      {
        /* module options */
      },
    ],
  ],
  eslint: {
    // ignorePatterns: ["temp.js", "/template_src"],
  },
  devtools: {
    enabled: false,

    timeline: {
      enabled: true,
    },
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
