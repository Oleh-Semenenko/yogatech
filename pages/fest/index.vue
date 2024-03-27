<template>
  <!-- <FestHero @register="handleToRegisterFormScroll" />
  <LazyFestFeatures />
  <LazyFestProgram />
  <LazyFestTeachers />
  <LazyFestLocation />
  <LazyFestRegisterForm id="register" />
  <LazyFestFaq /> -->
  <div class="fest">
    <div class="container">
      <div class="fest__inner">
        <h1>Дякуємо за інтерес до наших проектів!</h1>
        <p class="text-2 fest__text-1">Цей проект наразі в розробці і готується до презентації.</p>
        <BaseMandala />
        <p class="text-2 fest__text-2">Слідкувати за анонсами подій та презентаціями нових проектів ви можете на нашому Telegram-каналі <NuxtLink to="https://t.me/yogatechua" target="_blanc">https://t.me/yogatechua</NuxtLink></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// const handleToRegisterFormScroll = () => {
//   const el = document.getElementById('register')
//   if (el) {
//     el.scrollIntoView({
//       behavior: 'smooth'
//     })
//   }
// }
</script>

<style lang="sass">
.fest
  margin: 170px 0
  @include xl
    margin: 100px 0
  @include l
    margin: 60px 0
  @include m
    margin: 28px 0

.fest__inner
  display: flex
  flex-direction: column
  gap: 40px

  & h1
    margin-top: 0
  @include l
    gap: 20px
  @include m
    gap: 12px

.fest__text-1
  text-align: center
  font-weight: bold

.fest__text-2
  max-width: 64%
  margin-left: auto
  font-weight: bold
  @include m
    max-width: 100%

  & a
    color: var(--blue-color)
    text-decoration: underline


.fest .mandala-wrapper
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
