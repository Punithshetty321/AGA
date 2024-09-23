import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
  ],
  css: [
    './assets/scss/styles.scss',
    'bootstrap/dist/css/bootstrap.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'vue3-carousel/dist/carousel.css'
  ],
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
    ]
  },
  
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
         additionalData: '@use "~/assets/scss/_variables.scss" as *;',
        }
      }
    },
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
    define: {
      'process.env.ASSET_PATH': JSON.stringify('/assets/')
    }
  },
  runtimeConfig: {
    public: {
      NUXT_BASE_SSO_ID: process.env.NUXT_BASE_SSO,
      siteUrl: process.env.SITE_URL || 'http://localhost:3000'
    }
  },
  plugins: [
    '~/plugins/vue-carousel.ts'
  ],
  
});
