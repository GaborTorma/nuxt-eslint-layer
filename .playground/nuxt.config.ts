import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  compatibilityDate: '2024-09-19',

  extends: ['..'],

  eslint: {
    config: {
      // Final solution for https://github.com/nuxt/eslint/issues/501 issue
      // Use the generated ESLint config for lint root project as well
      // It it works well, you need to get the following error: 20:3  error  The template root requires exactly one element  vue/no-multiple-template-root
      rootDir: fileURLToPath(new URL('..', import.meta.url)),
    },
  },
})
