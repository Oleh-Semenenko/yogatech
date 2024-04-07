<template>
  <div>
    <div class="section blue">
      <div class="container">
        <div class="person__inner">
          <div class="person__swiper">
            <Swiper :modules="[SwiperPagination, SwiperAutoplay, SwiperEffectFade]" :centered-slides="true"
              :slides-per-view="1" :effect="'fade'" :autoplay="{
                delay: 3000,
                pauseOnMouseEnter: true
              }" :pagination="{ clickable: true }" :loop="true">
              <SwiperSlide v-for="(photo, idx) in teammate.photos" :key="idx">
                <img :src="photo" width="922" height="627" alt="Teammate photo" />
              </SwiperSlide>
            </Swiper>
          </div>

          <div>
            <h2>{{ teammate.name }}</h2>
            <p>
              {{ teammate.description }}
            </p>
            <h3 class="person__slogan">«{{ teammate.motivation }}»</h3>
          </div>
        </div>
      </div>
    </div>

    <div v-if="teammate?.video" class="person__intro section">
      <div class="container">
        <BaseMandala />
        <iframe class="person__intro-video" width="772" height="424" :src="teammate.video" title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    </div>

    <div class="section blue">
      <div class="container">
        <h2>Шлях в йозі</h2>
        <ul>
          <li v-for="achievement in teammate.achievements" :key="achievement">
            {{ achievement }}
          </li>
        </ul>
        <p class="person__about"></p>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <h2>Дивитись ще</h2>
        <TeamList :teammates="othersTeammates" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { getOneTeammate, getTeammatesExceptCurrent } = useTeammates()
const route = useRoute()
const teammate = getOneTeammate(route.params.slug as string)
const othersTeammates = getTeammatesExceptCurrent(route.params.slug as string)
</script>

<style lang="sass">
.person__inner
  display: grid
  grid-template-columns: 922px auto
  gap: 52px

  @include xl
    grid-template-columns: 640px auto
    gap: 32px
  @include l
    gap: 12px
    grid-template-columns: 100%
    grid-auto-rows: repeat(2, auto)

.person__swiper
  width: 100%
  @include l
    width: 500px
    justify-self: center
  @include m
    width: 100%

  & .swiper-slide
    transition-delay: 500

.person__slogan
  margin-top: 20px
  @include l
    margin-top: 12px
  @include m
    margin-top: 8px

.person__intro .container
  position: relative

.person__intro-video
  display: block
  margin: 0 auto
  width: 782px
  height: 429px
  @include xl
    width: 544px
    height: 333px
  @include l
    width: 500px
    height: 300px
  @include m
    width: 80%
    height: 220px
  @include s
    width: 100%
    height: 180px

.person__swiper .swiper-pagination
  display: block
</style>
