<template>
  <div class="app-wrapper">
    <BaseHeader />

    <main class="main">
      <NuxtPage />
    </main>

    <footer>
      <BaseFooter />
    </footer>
  </div>
</template>

<script setup lang="ts">
import 'animate.css'

useSeoMeta({
  title: 'Yogatech | Всеукраїнська ассоціація йога-інструкторів',
  ogTitle: 'Yogatech | Всеукраїнська ассоціація йога-інструкторів',
  description: 'Курс для викладачів йоги на понад 1000годин, навчання, спрівпраця та взаємодія.',
  ogDescription: 'Курс для викладачів йоги на понад 1000годин, навчання, спрівпраця та взаємодія.',
  ogImage: '/images/og_logo.png',
})
</script>

<style lang="sass">
.app-wrapper
  min-height: 100vh
  display: flex
  flex-direction: column
  justify-content: space-between
.main
  flex-grow: 1
  display: flex
  flex-direction: column
  justify-content: space-between
  padding-top: 112px
  @include xl
    padding-top: 84px
  @include l
    padding-top: 60px
</style>
