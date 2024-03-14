<template>
  <div class="section" :class="{ blue: blue }">
    <div class="container">
      <h2>{{ title }}</h2>
      <p>
        {{ text }}
      </p>
      <NuxtLink v-if="withBtn" :to="link" class="btn">Дізнатись більше</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  text: string
  link?: string
  blue?: boolean
  withBtn?: boolean
}>()
</script>

<style lang="sass" scoped>
a.btn
  margin-left: auto
  margin-top: 40px
  display: block
</style>
