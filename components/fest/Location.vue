<template>
  <div class="location section">
    <div class="container">
      <div class="location__inner">
        <div>
          <h2>Локація</h2>
          <p>
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
              <NuxtImg src="/images/banda.png" />
            </SwiperSlide>
            <SwiperSlide class="location__swiper-item">
              <NuxtImg src="/images/banda.png" />
            </SwiperSlide>
            <SwiperSlide class="location__swiper-item">
              <NuxtImg src="/images/banda.png" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="sass" scoped>
.location__inner
  display: grid
  grid-template-columns: 1fr 885px
  gap: 40px

.location__swiper
  width: 100%

</style>
