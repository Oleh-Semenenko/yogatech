<template>
  <FestHero @register="handleToRegisterFormScroll" />
  <LazyFestFeatures />
  <LazyFestProgram />
  <LazyFestTeachers />
  <LazyFestLocation />
  <LazyFestRegisterForm id="register" />
  <LazyFestFaq />
</template>

<script setup lang="ts">
const handleToRegisterFormScroll = () => {
  const el = document.getElementById('register')
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped></style>
