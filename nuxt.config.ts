// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-09-19',

  modules: [
    '@nuxt/eslint',
  ],

  eslint: {
    checker: true,
    config: {
      standalone: false, // https://eslint.nuxt.com/packages/module#custom-config-presets
    },
  },
})
