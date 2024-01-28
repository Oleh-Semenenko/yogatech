<template>
  <div class="">
    <div class="shop-hero section">
      <div class="shop-swiper">
        <Swiper
          :modules="[SwiperAutoplay]"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{ delay: 5000 }"
        >
          <SwiperSlide class="shop-swiper__item">
            <NuxtImg src="/images/book.png" class="shop-swiper__img" />
          </SwiperSlide>
          <SwiperSlide class="shop-swiper__item">
            <NuxtImg src="/images/banda.png" class="shop-swiper__img" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="container">
        <div class="shop-hero__content">
          <h1>Простими словами про складні теми</h1>
        </div>
      </div>
    </div>

    <div class="container section">
      <ul class="cards__list">
        <BaseGoodsCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from '@/types/index'

const products: IProduct[] = [
  {
    id: 1,
    title: 'Книга “Технологія йоги” Михайла Ахекяна',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati ratione, aliquam ducimus optio ea minima maiores inventore omnis illum distinctio. Facere, architecto quaerat. Nobis, iusto. Nam commodi obcaecati ullam.',
    price: '1 грн',
    photos: ['/images/book.png', '/images/book.png', '/images/book.png'],
    payment_link: 'https://secure.wayforpay.com/button/bac90579800e7'
  },
  {
    id: 2,
    title: 'Брендована біла футболка YOGATECH',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati ratione, aliquam ducimus optio ea minima maiores inventore omnis illum distinctio. Facere, architecto quaerat. Nobis, iusto. Nam commodi obcaecati ullam.',
    price: '1 грн',
    photos: ['/images/t_shirt/t-shirt.png', '/images/t_shirt/t-shirt-2.png', '/images/t_shirt/t-shirt-3.png'],
    payment_link: 'https://secure.wayforpay.com/button/b50682ce6b3a0'
  },
  {
    id: 3,
    title: 'Курс "Медитація 2.0"',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati ratione, aliquam ducimus optio ea minima maiores inventore omnis illum distinctio. Facere, architecto quaerat. Nobis, iusto. Nam commodi obcaecati ullam.',
    price: '1 грн',
    photos: ['/images/book.png', '/images/book.png', '/images/book.png'],
    payment_link: 'https://secure.wayforpay.com/button/bc04782a4b6aa'
  },
]
</script>

<style lang="sass" scoped>
.shop-hero
  position: relative
  @include l
    display: flex
    flex-direction: column-reverse
    gap: 32px
  @include m
    gap: 24px
.shop-swiper
  width: 50%
  margin-left: auto
  @include l
    margin-left: 0
    width: 100%

.shop-hero__content
  width: 40%
  position: absolute
  top: 20%
  z-index: 20
  @include l
    position: relative
    width: 100%
    top: 0
  
  & h1
    @include m
      margin-bottom: 0

.shop-swiper__item
  width: 100%
  height: 100%

.shop-swiper__img
  width: 100%
  height: 100%
  object-fit: cover
</style>
