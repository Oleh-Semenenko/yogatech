// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
    }
  },
  css: ['~/assets/styles/main.sass'],
  modules: [
    'nuxt-swiper',
    '@nuxt/image',
  ],
  swiper: {
    styleLang: 'scss',
    modules: ['navigation', 'pagination']
  }
})
