<template>
  <li class="feature" :style="{ '--feature-background-color': feature.color }">
    <h2 class="feature__title">{{ feature.title }}</h2>
    <div v-if="Array.isArray(feature.text)">
      <ul class="feature__text-list">
        <li v-for="item in feature.text" :key="item">{{ item }}</li>
      </ul>
    </div>
    <p v-else class="feature__text">{{ feature.text }}</p>
  </li>
</template>

<script setup lang="ts">
import type { IFeature } from '~/types'
defineProps<{
  feature: IFeature
}>()
</script>

<style lang="sass" scoped>
.feature
  position: relative
  padding-top: 32px
  padding-left: 44px
  @include xl
    padding-left: 32px
  @include l
    max-width: 269px
    padding-top: 24px
    padding-left: 24px
  @include m
    padding-top: 20px
    padding-left: 20px
  &::before
    content: ''
    display: block
    width: 80px
    height: 80px
    border-radius: 50%
    background-color: var(--feature-background-color)
    position: absolute
    top: 0
    left: 0
    z-index: -10

    @include xl
      width: 64px
      height: 64px
    @include l
      width: 48px
      height: 48px
    @include m
      width: 40px
      height: 40px

.feature__title
  font-weight: 700
  margin-bottom: 8px

.feature__text-list
  list-style: disc
  padding-left: 16px

.feature__text
  font-size: 20px
  font-weight: 400

  @include l
    font-size: 18px
  @include m
    font-size: 16px
</style>
