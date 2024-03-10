<template>
  <div class="profits section blue">
    <div class="container">
      <div class="profits__inner">
        <h2 class="profits__title">Чим ми можемо бути вам корисні</h2>

        <div class="mandala-wrapper">
          <img
            src="/images/mandala_gray.png"
            width="230"
            height="230"
            class="mandala-1"
          />
          <img
            src="/images/mandala_dark.png"
            width="230"
            height="230"
            class="mandala-2"
          />
        </div>

        <div class="profits__content">
          <ul class="cards__list profits__list">
            <BaseCard
              v-for="profit in profits"
              :key="profit.id"
              :data="profit"
            ></BaseCard>
          </ul>

          <p class="profits__content-text">
            І звісно, кожен із вас може бути учасником наших конференцій, за
            наявності сертифікату RYT-200 від будь-якої школи йоги. Рівно як у
            клуб автомобілістів не беруть без водійського посвідчення, наша
            асоціація створена для викладачів і це необхідно підтвердити
            документально, задля вашої безпеки та комфорту оточуючих
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ICard } from '~/types';

const profits: ICard[] = [
  {
    id: 1,
    title: 'Користь для викладачів-початківців',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita consectetur qui doloremque molestiae dicta autem tenetur delectus error porro, iusto suscipit repellendus saepe laboriosam quasi cupiditate eius! Incidunt, alias!',
    photo: '',
    link: '#',
    linksText: 'Дізнатись більше'
  },
  {
    id: 2,
    title: 'Користь для просунутих викладачів',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita consectetur qui doloremque molestiae dicta autem tenetur delectus error porro, iusto suscipit repellendus saepe laboriosam quasi cupiditate eius! Incidunt, alias!',
    photo: '',
    link: '#',
    linksText: 'Дізнатись більше'
  }
]
</script>

<style lang="sass" scoped>
.profits__inner
  position: relative

.profits__content
  margin: 0 auto
  display: flex
  flex-direction: column
  gap: 24px
  @include xl
    gap: 20px
  @include l
    gap: 16px
  @include m
    gap: 12px

.profits__content-text
  display: inline-block
  max-width: 90%
  z-index: 50
  margin: 0 auto

.profits__list
  z-index: 50
  grid-template-columns: repeat(2, minmax(250px, 504px))
  @include xl
    grid-template-columns: repeat(auto-fill, minmax(250px, 448px))
  @include l
    grid-template-columns: repeat(auto-fill, minmax(150px, 320px))

.mandala-wrapper
  width: 400px
  display: flex
  position: absolute
  top: 50%
  left: -10%
  @include xl
    left: -15%
  @include m
    display: none

.mandala-1
  animation: spin-1 30s linear infinite
  transform-origin: center
  @include xl
    width: 180px
    height: 180px
  @include l
    width: 120px
    height: 120px

.mandala-2
  opacity: 0.7
  animation: spin-2 30s linear infinite
  transform-origin: center
  position: absolute
  left: 39%
  bottom: 65%
  @include xl
    width: 180px
    height: 180px
    left: 30%
  @include l
    width: 120px
    height: 120px
    left: 20%

@keyframes spin-1
  from
    transform: rotate(0deg)
  to
    transform: rotate(360deg)

@keyframes spin-2
  from
    transform: rotate(25deg)
  to
    transform: rotate(-335deg)
</style>
