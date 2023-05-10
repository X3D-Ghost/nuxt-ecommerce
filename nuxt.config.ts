// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "animate.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    // "bootstrap-icons/",
    "@/assets/scss/style.scss",
  ],

  modules: [
    [
      "@nuxtjs/eslint-module",
      {
        // options
      },
    ],
    "@nuxt/content",
    "@nuxtjs/color-mode",
  ],
  eslint: {
    // ignorePatterns: ["temp.js", "/template_src"],
  },
  devtools: {
    enabled: false,
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
});
