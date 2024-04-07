<template>
  <ul class="features__list" :class="styles">
    <BaseFeatureItem
      v-for="feature in features"
      :key="feature.id"
      :feature="feature"
    >
    </BaseFeatureItem>
  </ul>
</template>

<script setup lang="ts">
import type { IFeature } from '~/types'
defineProps<{
  features: IFeature[],
  styles?: string
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

.goals__list
  grid-template-columns: repeat(2, auto)
  grid-template-rows: repeat(2, auto)
  justify-items: start
  @include m
    grid-template-columns: 1fr

  & .feature
    max-width: 100%
  & .feature:last-child
    grid-column: auto

.values__list
  grid-template-columns: repeat(2, auto)
  grid-template-rows: repeat(2, auto)
  justify-items: start
  @include m
    grid-template-columns: 1fr
  & .feature
    max-width: 100%

  & .feature:last-child
    justify-self: center
    grid-column: 1 / -1
    max-width: 782px
    @include xl
      max-width: 543px
    @include l
      max-width: 340px
    @include m
      justify-self: start
      max-width: 100%

.earn__list
  grid-template-columns: 782px
  gap: 24px
  justify-content: start
  margin-left: 140px
  @include xl
    margin-left: 96px
    grid-template-columns: 734px
  @include l
    grid-template-columns: 1fr
    margin-left: 70px
    gap: 16px
  @include m
    margin-left: 0
    gap: 8px
  & .feature
    max-width: 100%
</style>
