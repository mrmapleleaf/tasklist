// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    plugins: ['~/server/index.ts'],
  },
  modules: ['@pinia/nuxt'],
});
