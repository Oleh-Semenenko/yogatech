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
            <img src="/images/book.png" class="shop-swiper__img" />
          </SwiperSlide>
          <SwiperSlide class="shop-swiper__item">
            <img src="/images/banda.png" class="shop-swiper__img" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="container">
        <div class="shop-hero__content">
          <h1>Простими словами про складні теми</h1>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <h2>Продукти</h2>
        <ul class="cards__list">
          <BaseGoodsCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </ul>
      </div>
    </div>

    <div class="section blue">
      <div class="container">
        <h2>Курси</h2>
        <ul class="cards__list">
          <BaseGoodsCard
            v-for="course in courses"
            :key="course.id"
            :product="course"
          />
        </ul>
      </div>
    </div>

    <ShopSection
      title="Менторство"
      text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet ipsa consequuntur a perspiciatis. Consequatur maxime, exercitationem autem officia tenetur ad commodi maiores dolores, veritatis eum mollitia, rem impedit enim? Non."
    />

    <ShopSection
      title="Навчання “Курс підготовки викладачів RYT500”"
      text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet ipsa consequuntur a perspiciatis. Consequatur maxime, exercitationem autem officia tenetur ad commodi maiores dolores, veritatis eum mollitia, rem impedit enim? Non."
      link="/ryt500"
      blue
      withBtn
    />

    <ShopSection
      title="Конференція"
      text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet ipsa consequuntur a perspiciatis. Consequatur maxime, exercitationem autem officia tenetur ad commodi maiores dolores, veritatis eum mollitia, rem impedit enim? Non."
      link="/fest"
      withBtn
    />
  </div>
</template>

<script setup lang="ts">
const { products, courses } = useShop()
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
