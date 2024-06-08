<template>
  <div>
    <div class="section blue">
      <div class="container">
        <div class="person__inner">
          <div class="person__swiper">
            <Swiper :modules="[SwiperPagination, SwiperAutoplay, SwiperEffectFade]" :centered-slides="true"
              :slides-per-view="1" :effect="'fade'" :autoplay="{
                delay: 3000,
                pauseOnMouseEnter: true,
              }" :pagination="{ clickable: true }" :loop="true">
              <SwiperSlide v-for="(photo, idx) in teammate.photos" :key="idx">
                <img :src="photo" width="922" height="627" alt="Teammate photo" />
              </SwiperSlide>
            </Swiper>
          </div>

          <div>
            <h2 class="person__name">{{ teammate.name }}</h2>
            <ul class="person__socials-list">
              <li v-for="({ icon, link }) in teammate.socials" :key="link">
                <NuxtLink :to="link" target="_blank">
                  <Icon :name="icon" width="44" height="44" />
                </NuxtLink>
              </li>
            </ul>
            <p>
              {{ teammate.description }}
            </p>
            <h3 class="person__slogan">«{{ teammate.motivation }}»</h3>
            <ul class="person__socials-list mob">
              <li v-for="({ icon, link }) in teammate.socials" :key="link">
                <NuxtLink :to="link" target="_blank">
                  <Icon :name="icon" width="44" height="44" />
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div v-if="teammate?.videoId" class="person__intro section">
      <div class="container">
        <BaseMandala />
        <BaseEmbeddedVideo class="person__intro-video" :id="teammate.videoId"
          :title="teammate?.videoTitle ? teammate.videoTitle : ''"
          :videoLink="`https://www.youtube.com/watch?v=${teammate.videoId}`"
          :bg-image="`https://i.ytimg.com/vi_webp/${teammate.videoId}/maxresdefault.webp`"></BaseEmbeddedVideo>
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
        <TeamPageList :list-data="othersTeammates" :type="ListItemType.TEAMMATE" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ListItemType } from '~/types'

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

.person__name
  margin: 0
  @include l
    margin-bottom: 12px
  @include m
    font-size: 16px

.person__socials-list
  margin-top: 12px
  margin-bottom: 24px
  display: flex
  align-items: center
  gap: 24px
  @include xl
    margin-top: 8px
    margin-bottom: 20px
  @include l
    display: none

  &.mob
    display: none
    @include l
      display: flex
      gap: 40px
      margin-top: 28px
      margin-bottom: 0
    @include m
      margin-top: 24px
      gap: 32px

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
