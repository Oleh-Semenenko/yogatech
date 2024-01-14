<template>
  <div class="shop-hero section">
    <div class="shop-swiper">
      <Swiper
        :modules="[SwiperAutoplay]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 5000 }"
      >
        <SwiperSlide>
          <NuxtImg src="/images/book.png" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/images/banda.png" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="container">
      <div class="shop-hero__content">
        <h1>Простими словами про складні теми</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.shop-hero
  position: relative
.shop-swiper
  width: 50%
  margin-left: auto

.shop-hero__content
  position: absolute
  top: 0
</style>
