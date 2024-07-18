<template>
  <div class="shop section">
    <div class="container">
      <BaseGoBackBtn />

      <div class="product__content">
        <div v-if="!isCourse" class="product__swiper">
          <div class="product__swiper--main">
            <Icon name="mdi-light:chevron-left" class="prev-btn" width="54" height="54" />
            <Swiper :modules="[SwiperThumbs, SwiperNavigation, SwiperPagination, SwiperAutoplay]" :autoplay="{
              delay: 3000,
              pauseOnMouseEnter: true,
            }" :navigation="{
              enabled: true,
              nextEl: '.next-btn',
              prevEl: '.prev-btn'
            }" :pagination="{ clickable: true }" :loop="true" :thumbs="{ swiper: thumbsSwiper }" class="main-swiper">
              <SwiperSlide v-if="product.videoId && !product.lastVideo" class="product__swiper-item">
                <BaseEmbeddedVideo :id="product.videoId" :title="product?.videoTitle ? product.videoTitle : ''"
                  :videoLink="`https://www.youtube.com/watch?v=${product.videoId}`"
                  :bg-image="`https://i.ytimg.com/vi_webp/${product.videoId}/maxresdefault.webp`"></BaseEmbeddedVideo>
              </SwiperSlide>
              <SwiperSlide v-for="(slide, idx) in product.photos" :key="idx" class="product__swiper-item">
                <img :src="slide" width="643" height="440" loading="lazy" />
              </SwiperSlide>
              <SwiperSlide v-if="product.videoId && product.lastVideo" class="product__swiper-item">
                <BaseEmbeddedVideo :id="product.videoId" :title="product?.videoTitle ? product.videoTitle : ''"
                  :videoLink="`https://www.youtube.com/watch?v=${product.videoId}`"
                  :bg-image="`https://i.ytimg.com/vi_webp/${product.videoId}/maxresdefault.webp`"></BaseEmbeddedVideo>
              </SwiperSlide>
            </Swiper>
            <Icon name="mdi-light:chevron-right" class="next-btn" width="54" height="54" />
          </div>

          <Swiper :modules="[SwiperThumbs]" @swiper="setThumbsSwiper" :breakpoints="{
            1920: {
              spaceBetween: 20
            },
            1280: {
              spaceBetween: 16
            }
          }" :loop="true" :slidesPerView="4" class="product__swiper--secondary">
            <SwiperSlide v-if="product.videoId && !product.lastVideo" class="product__swiper-item">
              <BaseEmbeddedVideo :id="product.videoId" :title="product?.videoTitle ? product.videoTitle : ''"
                :videoLink="`https://www.youtube.com/watch?v=${product.videoId}`"
                :bg-image="`https://i.ytimg.com/vi_webp/${product.videoId}/maxresdefault.webp`"></BaseEmbeddedVideo>
            </SwiperSlide>
            <SwiperSlide v-for="(slide, idx) in product.photos" :key="idx" class="product__swiper-item">
              <img :src="slide" width="100" height="100" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide v-if="product.videoId && product.lastVideo" class="product__swiper-item">
              <BaseEmbeddedVideo :id="product.videoId" :title="product?.videoTitle ? product.videoTitle : ''"
                :videoLink="`https://www.youtube.com/watch?v=${product.videoId}`"
                :bg-image="`https://i.ytimg.com/vi_webp/${product.videoId}/maxresdefault.webp`"></BaseEmbeddedVideo>
            </SwiperSlide>
          </Swiper>
        </div>

        <div v-if="isCourse && product?.videoId" class="product__swiper--main">
          <BaseEmbeddedVideo :id="product.videoId" :title="(product as ICourse).videoTitle"
            :videoLink="`https://www.youtube.com/watch?v=${product.videoId}`"
            :bg-image="`https://i.ytimg.com/vi_webp/${product.videoId}/maxresdefault.webp`"></BaseEmbeddedVideo>
        </div>

        <div class="product__info">
          <div class="product__info-header">
            <h3>
              {{ title }}
            </h3>
            <div class="product__info-price-wrapper">
              <p v-if="product?.price" class="text-2" :class="{ sale: showNewPrice }">{{ product.price }} грн</p>
              <p v-if="showNewPrice" class="text-2 new">{{ product.newPrice }} грн
              </p>
              <BaseCountdown v-if="showCountdown && product.salePeriod"
                :countdownEndTimestamp="new Date(product.salePeriod)" @countdownEnded="handleCountdownEnded" />
            </div>
            <p v-if="product?.preOrder" class="text-2">{{ product.preOrder }}</p>
          </div>

          <div v-if="product?.sizes">
            <p class="product__choose-size-title">Оберіть розмір:</p>
            <div class="product__sizes">
              <div>Бажаний розмір можна вказати на сторінці оплати</div>

              <span @click="handleSizesTableOpen">Таблиця розмірів</span>
            </div>
            <Teleport to="body">
              <Transition name="page">
                <div v-if="isSizesTableOpen" class="table__modal">
                  <div class="table__modal-content">
                    <Icon name="ph:x-thin" width="44" height="44" @click="handleSizesTableOpen" />
                    <img :src="product.sizesImg" alt="Sizes table" width="800" height="400" />
                  </div>
                </div>
              </Transition>
            </Teleport>
          </div>

          <NuxtLink :to="paymentLink" class="btn product__add-product-btn orange-type" target="_blank">
            Придбати
          </NuxtLink>

          <div class="product__description">
            <p class="product__description-title">Опис товару:</p>
            <p v-if="isCourse" class="product__description-level">
              Рівень складності:
              <img v-if="(product as ICourse)?.level" :src="`/images/gear-${(product as ICourse).level}.svg`" width="32"
                height="32" alt="Course level icon" />
              - {{ (product as ICourse).levelUA }}
            </p>
            <ul v-if="Array.isArray(product.description)">
              <li v-for="text in product.description" :key="text" class="product__description-text">{{ text }}</li>
            </ul>
            <p v-else>
              {{ product.description }}
            </p>

            <ul v-if="isCourse" class="product__description-lectures">
              <li v-for="lecture in (product as ICourse).lectures" :key="lecture">
                {{ lecture }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="section">
        <h2>Також вас може зацікавити</h2>
        <ul class="cards__list">
          <BaseGoodsCard v-for="card in moreProductsList" :key="card.id" :product="card"
            :group="(route.params.group as ProductGroup)" withoutBtn />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductGroup, type ICourse } from '~/types'

const route = useRoute()
const { getOneProduct, getProductsExceptSelected } = useShop()

const isSizesTableOpen = ref(false)
const thumbsSwiper: Ref<any | null> = ref(null)

const handleSizesTableOpen = () => {
  isSizesTableOpen.value = !isSizesTableOpen.value
  isSizesTableOpen.value
    ? document.querySelector('body')?.classList.add('fixed')
    : document.querySelector('body')?.classList.remove('fixed')
}

const product = getOneProduct(
  route.params.slug as string,
  route.params.group as ProductGroup
)

const moreProductsList = getProductsExceptSelected(
  route.params.slug as string,
  route.params.group as ProductGroup
)

const showNewPrice = ref(!!product.newPrice);
const showCountdown = ref(!!product.salePeriod);
const paymentLink = computed(() => showNewPrice.value && product.newPaymentLink ? product.newPaymentLink : product.payment_link)

const handleCountdownEnded = () => {
  showNewPrice.value = false;
  showCountdown.value = false;
};

const title = computed(() => {
  return route.params.group === ProductGroup.COURSE
    ? `Курс "${product.title}" ${(product as ICourse).author}`
    : product.title
})
const isCourse = computed(() => route.params.group === ProductGroup.COURSE)

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper
}
</script>

<style lang="sass">
.page-enter-active,
.page-leave-active
  transition: all 0.4s

.page-enter-from,
.page-leave-to
  opacity: 0
.shop
  position: relative

.product__content
  display: grid
  grid-template-columns: 751px auto
  gap: 40px
  padding-top: 40px
  padding-bottom: 40px
  @include xl
    grid-template-columns: 556px auto
    padding-top: 28px
    padding-bottom: 28px
  @include l
    grid-template-columns: 340px auto
    gap: 24px
    padding-top: 20px
    padding-bottom: 20px
  @include m
    grid-template-columns: 100%
    grid-template-rows: repeat(2, auto)

.main-swiper 
  width: 100%

.product__course-intro
  width: 100%
  @include m
    text-align: center

.product__swiper
  width: 100%
  display: flex
  flex-direction: column
  gap: 12px
  @include l
    gap: 0
  @include m
    justify-self: center
    width: 80%
  @media screen and (max-width: 600px)
    width: 100%

  & .prev-btn,
  & .next-btn
    @include l
      display: none

.product__swiper .swiper-pagination
  display: none
  @include l
    display: block

.product__swiper--main
  display: flex
  align-items: center
  width: 100%
  height: 440px
  overflow: hidden
  @include xl
    height: 306px
  @include l
    height: 259px

  & .swiper-slide
    width: 100%
    height: 440px
    @include xl
      height: 306px
    @include l
      height: 239px

      & .product__swiper-item
        height: 100%

  & img,
  & iframe
    width: 100%
    height: 100%
    object-fit: cover

.product__swiper--secondary
  width: calc( 100% - 54px * 2 )
  margin: 0
  @include l
    display: none

  & .swiper-slide
    opacity: 0.6
  & .swiper-slide-thumb-active
    opacity: 1
  & img,
  & iframe
    width: 100px
    height: 100px
    object-fit: cover

.product__info
  display: flex
  flex-direction: column
  gap: 40px
  @include xl
    gap: 32px
  @include l
    gap: 20px
  @include m
    gap: 12px
    width: 100%

.product__info-header
  & h3
    margin-bottom: 28px
    @include xl
      margin-bottom: 20px
    @include l
      margin-bottom: 12px
    @include m
      margin-bottom: 4px
  & p
    color: var(--primary-text-color)
    font-weight: 700

.product__info-price-wrapper
  display: flex
  gap: 20px
  align-items: center
  @include l
    gap: 8px
  & .countdown
    display: inline-flex
    margin-left: auto
    justify-content: flex-end
    font-size: 40px
    @include l
      font-size: 32px

.product__choose-size-title
  color: var(--gray-color)
  margin-bottom: 12px
  @include m
    margin-bottom: 8px

.product__sizes
  display: flex
  gap: 44px
  align-items: baseline
  color: var(--gray-color)
  flex-direction: column
  @include xl
    gap: 32px
  @include l
    gap: 12px

  & span
    cursor: pointer

.product__add-product-btn
  font-size: 32px
  @include xl
    font-size: 28px
  @include l
    font-size: 24px
  @include m
    font-size: 20px
  @media screen and (max-width: 600px)
    text-align: center
    width: 100%

.product__description-title
  color: var(--gray-color)
  margin-bottom: 12px
  @include xl
    margin-bottom: 8px

.product__description-level
  display: flex
  align-items: center
  gap: 4px
  margin-bottom: 4px

.product__description-lectures
  margin-top: 20px
  @include m
    margin-top: 16px

.product__description-text:first-child
  margin-bottom: 20px
  @include m
    margin-bottom: 16px



.table__modal
  z-index: 1000
  position: absolute
  top: 0
  right: 0
  width: 100vw
  height: 100%
  backdrop-filter: blur(10px)
  background-color: rgba(255, 255, 255, 0.3)

.table__modal-content
  background: var(--white)
  width: calc( 800px + 50px * 2 )
  height: calc( 400px + 46px * 2 )
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  @include l
    width: calc( 600px + 50px * 2 )
    height: auto

  @include m
    width: calc( 100% - 24px * 2 )
    height: auto

  & img
    margin: 0 auto
    width: calc( 100% - 50px * 2 )
    height: calc( 100% - 46px * 2 )
    @include l
      margin-bottom: 44px

    @include m
      width: calc( 100% - 24px * 2 )
      height: auto
  & svg.icon
    cursor: pointer
    margin-left: auto
    display: block
</style>
