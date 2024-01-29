<template>
  <div class="location section">
    <div class="container">
      <div class="location__inner">
        <div>
          <h2>Локація</h2>
          <p class="location__inner-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            officiis error pariatur illo totam, voluptas consectetur ullam odio
            consequuntur perferendis provident cupiditate doloribus dolorem
            reiciendis amet quod exercitationem, est quisquam?
          </p>
        </div>

        <div class="location__swiper">
          <Swiper
            :modules="[SwiperNavigation, SwiperPagination]"
            :centered-slides="true"
            :slides-per-view="1"
            navigation
            :pagination="{ clickable: true }"
            :loop="true"
          >
            <SwiperSlide class="location__swiper-item">
              <!-- <NuxtImg
                src="/images/banda.png"
                width="885"
                format="webp,avif"
              /> -->
              <img
                src="/images/banda.png"
                width="885"
              />
            </SwiperSlide>
            <SwiperSlide class="location__swiper-item">
              <!-- <NuxtImg
                src="/images/banda.png"
                width="885"
                format="webp,avif"
              /> -->
              <img
                src="/images/banda.png"
                width="885"
              />
            </SwiperSlide>
            <SwiperSlide class="location__swiper-item">
              <!-- <NuxtImg
                src="/images/banda.png"
                width="885"
                format="webp,avif"
              /> -->
              <img
                src="/images/banda.png"
                width="885"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.location__inner
  display: grid
  grid-template-columns: 1fr 885px
  gap: 40px
  @include xxl
    grid-template-columns: 1fr 700px
  @include xl
    grid-template-columns: 100%
  @include l
    gap: 32px
  @include m
    gap: 24px

.location__inner-text
  font-size: 36px
  @include l
    font-size: 28px
  @include m
    font-size: 20px
  @include ms
    font-size: 18px

.location__swiper
  width: 100%
  justify-self: center

.location__swiper-item
  width: 100%

  & img
    width: 100%
    border-radius: 20px
</style>
