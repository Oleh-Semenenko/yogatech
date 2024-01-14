import type { BaseCard } from '#build/components';
<template>
  <div class="teachers section blue">
    <div class="container">
      <div class="teachers__inner">
        <h2>Викладачі</h2>

        <ul class="teachers__list">
          <BaseCard
            v-for="teacher in teachers"
            :key="teacher.id"
            :data="teacher"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const teachers = [
  {
    id: 1,
    title: 'Михайло Ахекян',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita consectetur qui doloremque molestiae dicta autem tenetur delectus error porro, iusto suscipit repellendus saepe laboriosam quasi cupiditate eius! Incidunt, alias!',
    photo: '',
    link: '/fest/teachers/ahekyan',
    linksText: 'Дізнатись більше'
  },
  {
    id: 2,
    title: 'Дмитро Щербаков',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita consectetur qui doloremque molestiae dicta autem tenetur delectus error porro, iusto suscipit repellendus saepe laboriosam quasi cupiditate eius! Incidunt, alias!',
    photo: '',
    link: '/fest/teachers/scherbakov',
    linksText: 'Дізнатись більше'
  },
  {
    id: 3,
    title: 'Роман',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita consectetur qui doloremque molestiae dicta autem tenetur delectus error porro, iusto suscipit repellendus saepe laboriosam quasi cupiditate eius! Incidunt, alias!',
    photo: '',
    link: '/fest/teachers/roman',
    linksText: 'Дізнатись більше'
  }
]
</script>

<style lang="sass" scoped>
.teachers__list
  width: 100%
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr))
  gap: 52px
  @include xxl
    gap: 40px
  @include ll
    gap: 32px
</style>
