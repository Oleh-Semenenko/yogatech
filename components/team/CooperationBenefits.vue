<template>
  <div class="benefits section blue">
    <div class="container">
      <div class="benefits__inner">
        <h2>Заробляйте з нами</h2>
        <BaseFeaturesList
          :features="cooperationBenefits"
          class="benefits__list"
          styles="earn-list"
        />
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
    text: 'Ви досконало володієте певною темою та створили високоякісний авторський курс? Опублікуйте його на нашому сайті і таким чином отримайте додаткове джерело доходу.',
    color: 'var(--orange)'
  },
  {
    id: 2,
    title: 'Проводь дослідження',
    text: 'Ми допомагаємо талановитим йога-інструкторам у пошуку та оформленні грантів під вашу дослідницьку діяльність. Також ви можете стати учасником наших викладацьких конференцій, де зможете представити результати ваших досліджень.',
    color: 'var(--blue-color)'
  },
  {
    id: 3,
    title: 'Будь ментором',
    text: ' У вас є низка сертифікатів, проведених майстер-класів та унікальний викладацький досвід, яким ви хочете поділитись з іншими? У такому випадку ви можете спробувати себе у ролі ментора та допомогти у розвитку менш досвідченим викладачам.',
    color: 'var(--gray-color)'
  },
  {
    id: 4,
    title: 'Співпрацюй з експертами',
    text: 'Ми глибоко переконані у тому, що разом ми здатні на більше! Якщо ви маєте власну студію, або хист до організації - ми можемо познайомити вас із експертами, для спільної проведення потужних ретритів та цікавих  подій! В свою чергу, ми виступаємо гарантом якості, а також допомагатимемо з рекламою.',
    color: 'var(--orange)'
  }
]
</script>

<style lang="sass">
.benefits
  position: relative
.benefits__list
  width: 90%
  margin: 0 auto
  @include xl
    width: 100%

.earn-list
  grid-template-columns: 782px
  gap: 24px
  justify-content: start
  margin-left: 140px
  @include xl
    margin-left: 96px
    grid-template-columns: 734px
  @include l
    grid-template-columns: 1fr
    margin-left: 70px
    gap: 16px
  @include m
    margin-left: 0
    gap: 8px
  & .feature
    max-width: 100%
</style>
