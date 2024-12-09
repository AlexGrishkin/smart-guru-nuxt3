// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "@nuxt/image",
    "@pinia/nuxt",
    "dayjs-nuxt",
    "nuxt-typed-router",
    "nuxt-file-storage",
    "@nuxt/eslint",
    "@nuxtjs/stylelint-module",
  ],
  stylelint: {
    cache: true,
    include: ["src/**/*.{css,scss,vue}"],
    exclude: ["**/node_modules/**", ".nuxt/**"],
    emitError: true,
    emitWarning: true,
    lintOnStart: false,
  },
  families: [{ name: "montserrat", provider: "google" }],
  css: ["~/assets/scss/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
        @use "~/assets/scss/_vars.scss" as *;
        @use "~/assets/scss/_mixins.scss" as *;
        `,
        },
      },
    },
  },
});
