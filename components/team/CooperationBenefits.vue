<template>
  <div class="benefits section blue">
    <div class="container">
      <div class="benefits__inner">
        <h2>Заробляй з нами</h2>
        <BaseFeaturesList :features="cooperationBenefits" class="benefits__list" />

        <div class="benefits__content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            dicta voluptate, molestiae deserunt rerum tempore fugiat, iste
            laudantium sunt, quisquam est! Voluptatum enim architecto
            perferendis ea? Cupiditate reprehenderit animi rem!
          </p>

          <div class="benefits__swiper">
            <Swiper
              :modules="[SwiperPagination, SwiperAutoplay]"
              :centered-slides="true"
              :slides-per-view="1"
              :autoplay="{
                delay: 4000
              }"
              :pagination="{ clickable: true }"
              :loop="true"
            >
              <SwiperSlide class="benefits__swiper-item">
                <img src="/images/miha.png" width="640" height="312" />
              </SwiperSlide>
              <SwiperSlide class="benefits__swiper-item"
                ><img src="/images/miha.png" width="640" height="312" />
              </SwiperSlide>
              <SwiperSlide class="benefits__swiper-item"
                ><img src="/images/miha.png" width="640" height="312" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IFeature } from '~/types'
const cooperationBenefits: IFeature[] = [
  {
    id: 1,
    title: 'Продавай свої курси',
    text: 'Ми об’єднюємо викладачів та любителів йоги',
    color: 'var(--orange)'
  },
  {
    id: 2,
    title: 'Виступай на сцені',
    text: 'Курси, література, менторство і багато іншого',
    color: 'var(--blue-color)'
  },
  {
    id: 3,
    title: 'Будь ментором',
    text: 'Ми допоможемо знайти свій шлях та дамо проявити себе',
    color: 'var(--gray-color)'
  }
]
</script>

<style lang="sass" scoped>
.benefits__list
  width: 90%
  margin: 0 auto
  @include xl
    width: 100%

.benefits__content
  margin-top: 40px
  display: flex
  justify-content: space-between
  gap: 52px
  @include l
    flex-direction: column
    margin-top: 16px
    gap: 16px
    align-items: center

.benefits__swiper
  width: 640px
  @include m
    width: 100%

.benefits__swiper-item img
  object-fit: cover
  width: 640px
  height: 312px
  @include m
    width: 100%
</style>
