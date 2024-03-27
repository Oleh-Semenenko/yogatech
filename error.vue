<template>
  <div class="app-wrapper">
    <BaseHeader />
    <main class="main">
      <div class="container error">
        <div class="text-2">
          {{ text }} Перейдіть на <NuxtLink to="/">головну</NuxtLink> або
          спробуйте оновити сторінку.
        </div>

        <BaseMandala />
      </div>
    </main>

    <footer>
      <BaseFooter />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const text = computed(() => {
  return props.error?.statusCode === 404
    ? '404: Сторінку не знайдено.'
    : 'Упс, щось пішло не так.'
})
</script>

<style lang="sass">
.main
  justify-content: center

.error
  display: flex
  flex-direction: column
  gap: 40px

  & .text-2
    font-weight: bold
    text-align: center

    & a
      color: var(--blue-color)

.error .mandala-wrapper
  position: relative
  top: 0
  left: 0
  margin: 0 auto
  @include l
    width: 240px
  @include m
    display: flex
  & .mandala-2
    bottom: -2%
    left: 54%

    @include xl
      left: 42%
    @include l
      left: 47%
</style>
