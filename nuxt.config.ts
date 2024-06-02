// https://nuxt.com/docs/api/configuration/nuxt-config
import useShop from './composables/useShop'
import { ProductGroup } from './types'
const { products, courses } = useShop()

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  nitro: {
    hooks: {
      async 'prerender:routes'(routes) {
        const productsSlugsForRoutes = products.map((p) => p.slug)
        const coursesSlugsForRoutes = courses.map((c) => c.slug)

        const productRoutes = productsSlugsForRoutes.map(
          (slug) => `/shop/${ProductGroup.PRODUCT}/${slug}`
        )
        const courseRoutes = coursesSlugsForRoutes.map(
          (slug) => `/shop/${ProductGroup.COURSE}/${slug}`
        )

        const dynamicRoutes = [...productRoutes, ...courseRoutes]
        if (dynamicRoutes.length) {
          for (const route of dynamicRoutes) {
            routes.add(route)
          }
        }
      }
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "~/assets/styles/config/mixins.sass" as *\n'
        }
      }
    }
  },
  css: ['@/assets/styles/main.sass', '@/node_modules/lite-youtube-embed/src/lite-yt-embed.css'],
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
  modules: ['nuxt-swiper', 'nuxt-icon', '@nuxtjs/sitemap'],
  site: {
    url: 'https://yogatech.com.ua/'
  },
  swiper: {
    styleLang: 'scss',
    modules: ['navigation', 'pagination', 'autoplay', 'thumbs', 'effect-fade']
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL
    }
  },
  plugins: ['@/plugins/youtube.client.js'],
  appConfig: {
    compilerOptions: {
      isCustomElement: (tag: string) => ['lite-youtube'].includes(tag)
    }
  }
})
