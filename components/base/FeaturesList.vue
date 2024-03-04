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

<style lang="sass">
.features__list
  display: grid
  grid-template-columns: repeat(3, auto)
  justify-content: center
  gap: 90px
  @include xl
    gap: 68px
  @include l
    grid-template-columns: repeat(2, 1fr)
    grid-template-rows: repeat(2, 1fr)
    gap: 12px
  @include m
    justify-items: center
    grid-template-columns: 1fr

  & .feature:last-child
    @include l
      justify-self: center
      grid-column: 1 / -1
</style>
