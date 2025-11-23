import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@pinia/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3, // include h3 headings
        }
      }
    }
  }
})
