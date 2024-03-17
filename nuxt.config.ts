// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "~/assets/styles/config/mixins.sass" as *\n'
        }
      }
    }
  },

  css: ['@/assets/styles/main.sass'],
  app: {
    head: {
      title: 'YogaTech',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          charset: 'utf-8'
        }
      ]
    },
  },
  modules: ['nuxt-swiper', '@nuxt/image', 'nuxt-icon'],
  swiper: {
    styleLang: 'scss',
    modules: ['navigation', 'pagination', 'autoplay', 'thumbs']
  },
  image: {
    format: ['webp','avif'],
    domains: ['netlify.app']
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    }
  }
})
