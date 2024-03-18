<template>
  <div class="shop section">
    <div class="container">
      <div class="go-back-btn" @click="() => $router.go(-1)">
        <Icon name="mdi-light:chevron-left" width="32" height="32" />
        <h3>Назад до магазину</h3>
      </div>

      <div class="product__content">
        <div class="product__swiper">
          <div class="product__swiper--main">
            <Icon
              name="mdi-light:chevron-left"
              class="prev-btn"
              width="54"
              height="54"
            />
            <Swiper
              :modules="[SwiperThumbs, SwiperNavigation]"
              :navigation="{
                enabled: true,
                nextEl: '.next-btn',
                prevEl: '.prev-btn'
              }"
              :loop="true"
              :thumbs="{ swiper: thumbsSwiper }"
              class="main-swiper"
            >
              <SwiperSlide
                v-for="(slide, idx) in product.photos"
                :key="idx"
                class="location__swiper-item"
              >
                <img :src="slide" width="643" height="440" />
              </SwiperSlide>
            </Swiper>
            <Icon
              name="mdi-light:chevron-right"
              class="next-btn"
              width="54"
              height="54"
            />
          </div>

          <Swiper
            :modules="[SwiperThumbs]"
            @swiper="setThumbsSwiper"
            :spaceBetween="20"
            :loop="true"
            :slidesPerView="4"
            class="product__swiper--secondary"
          >
            <SwiperSlide
              v-for="(slide, idx) in product.photos"
              :key="idx"
              class="location__swiper-item"
            >
              <img :src="slide" width="100" height="100" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div class="product__info">
          <div class="product__info-header">
            <h3>{{ product.title }}</h3>
            <p>{{ product.price }} грн</p>
          </div>

          <div v-if="product?.sizes">
            <p class="product__choose-size-title">Оберіть розмір:</p>
            <div class="product__sizes">
              <ShopSizesList
                v-if="product?.sizes && product?.selectedSize"
                :sizes="product.sizes"
                :selected-size="product?.selectedSize"
                @select-size="handleSelectSize"
              />

              <span @click="handleSizesTableOpen">Таблиця розмірів</span>
            </div>
            <Transition name="page">
              <BasketModal
                v-if="isSizesTableOpen"
                :is-basket-open="isSizesTableOpen"
                :set-is-basket-open="handleSizesTableOpen"
              />
            </Transition>
          </div>

          <button class="btn product__add-product-btn">В кошик</button>

          <div class="product__description">
            <p class="product__description-title">Опис товару:</p>
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>

      <div class="section">
        <h2>Також вас може зацікавити</h2>
        <ul class="cards__list">
          <li v-for="card in moreProductsList" :key="card.id">
            <BaseGoodsCard
              :product="card"
              :group="(route.params.group as ProductGroup)"
              withoutBtn
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductGroup, type ISize } from '~/types'

const route = useRoute()
const { getOneProduct, getProductsExceptSelected } = useShop()

const isSizesTableOpen = ref(false)

const handleSizesTableOpen = () => {
  isSizesTableOpen.value = true
}

const product = getOneProduct(
  route.params.slug as string,
  route.params.group as ProductGroup
)

const moreProductsList = getProductsExceptSelected(
  route.params.slug as string,
  route.params.group as ProductGroup
)

const thumbsSwiper: Ref<any | null> = ref(null)

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper
}

const handleSelectSize = (size: ISize) => {
  product.selectedSize = size
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
.go-back-btn
  & svg path
    fill: var(--primary-text-color)

  cursor: pointer
  display: flex
  align-items: center
  margin-bottom: 40px

.product__content
  display: flex
  justify-content: space-between
  gap: 40px
  padding: 40px 0

.product__swiper
  width: 751px
  display: flex
  flex-direction: column
  gap: 12px

.product__swiper--main
  display: flex
  align-items: center
  width: 100%
  height: 440px
  overflow: hidden

  & .swiper-slide
    width: 100%
    height: 440px

  & img
    width: 100%
    height: 100%
    object-fit: cover

.product__swiper--secondary
  width: calc( 100% - 54px * 2 )

  & .swiper-slide
    opacity: 0.6
  & .swiper-slide-thumb-active
    opacity: 1
  & img
    width: 100px
    height: 100px
    object-fit: cover

.product__info
  display: flex
  flex-direction: column
  gap: 40px

.product__info-header
  & h3
    margin-bottom: 28px
  & p
    color: var(--primary-text-color)
    font-size: 36px
    font-weight: 700

.product__choose-size-title
  color: var(--gray-color)
  margin-bottom: 12px

.product__sizes
  display: flex
  gap: 44px
  align-items: baseline
  color: var(--gray-color)

.product__add-product-btn
  background-color: var(--orange)
  font-size: 32px

.product__description-title
  color: var(--gray-color)
  margin-bottom: 12px
</style>
