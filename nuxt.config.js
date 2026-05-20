// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/motion/nuxt'],
  app: {
    baseURL: '/3ein39/',
  },
  nitro: {
    compatibilityDate: '2026-04-30',
  },
})