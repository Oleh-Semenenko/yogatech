import type { BaseCard } from '#build/components';
<template>
  <div class="program section">
    <div class="container">
      <div class="program__inner">
        <h2>Програма конференції</h2>

        <ul class="program__list cards__list">
          <BaseCard v-for="day in days" :key="day.id" :data="day" without-footer />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const days = [
  {
    id: 1,
    title: 'День перший',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita consectetur qui doloremque molestiae dicta autem tenetur delectus error porro, iusto suscipit repellendus saepe laboriosam quasi cupiditate eius! Incidunt, alias!',
    photo: ''
  },
  {
    id: 2,
    title: 'День другий',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita consectetur qui doloremque molestiae dicta autem tenetur delectus error porro, iusto suscipit repellendus saepe laboriosam quasi cupiditate eius! Incidunt, alias!',
    photo: ''
  }
]
</script>

<style lang="sass" scoped>
// .program__list
//   display: flex
//   justify-content: center
//   gap: 52px
</style>
