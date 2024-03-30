<template>
  <div class="profits section blue">
    <div class="container">
      <div class="profits__inner">
        <h2 class="profits__title">Чим ми можемо бути вам корисні</h2>

        <BaseMandala />

        <div class="profits__content">
          <ul class="cards__list profits__list">
            <BaseCard
              v-for="profit in profits"
              :key="profit.id"
              :data="profit"
            ></BaseCard>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ICard } from '~/types'

const profits: ICard[] = [
  {
    id: 1,
    title: 'Користь для викладачів-початківців та практикуючих',
    description: [
      'Хороша наукова база',
      'Високоякісні курси на найрізноманітніші теми',
      'Найбільший викладацький курс в Україні',
      'Менторські послуги',
      'Можливість зростати разом'
    ],
    icon: 'ph:flower-lotus-thin',
    link: '/shop',
    linksText: 'Дізнатись більше'
  },
  {
    id: 2,
    title: 'Користь для просунутих викладачів',
    description: [
      'Заробляйте знаннями, а не лише проведенням занять',
      'Реалізовуйте себе, як дослідники, ментори чи організатори',
      'Створюйте авторські курси та викладайте їх на нашій платформі',
      'Будьте учасниками закритих подій'
    ],
    icon: 'ph:sketch-logo-thin',
    link: '/team',
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

.profits__list
  z-index: 50
  grid-template-columns: repeat(2, minmax(250px, 504px))
  @include xl
    grid-template-columns: repeat(auto-fill, minmax(250px, 448px))
  @include l
    grid-template-columns: repeat(auto-fill, minmax(150px, 320px))
</style>
