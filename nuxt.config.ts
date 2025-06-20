// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'

import { Noir } from './config/primveue/noir.js'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
      Components({
        resolvers: [PrimeVueResolver()],
      }),
    ],
  },
  modules: ['@primevue/nuxt-module'],
  primevue: {
    autoImport: true,
    options: {
      ripple: true,
      theme: {
        preset: Noir,
      },
    },
  },
})
