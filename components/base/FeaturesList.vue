<template>
  <ul class="features__list">
    <BaseFeatureItem
      v-for="feature in features"
      :key="feature.id"
      :feature="feature"
    >
    </BaseFeatureItem>
  </ul>
</template>

<script setup lang="ts">
import type { IFeature } from '@/types/index'
defineProps<{
  features: IFeature[]
}>()
</script>

<style lang="sass" scoped>
.features__list
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 90px
  @include xxl
    gap: 70px
  @include xl
    gap: 50px
  @include l
    gap: 28px
  @include m
    grid-template-columns: 1fr
</style>
