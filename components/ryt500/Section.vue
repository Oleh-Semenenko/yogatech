<template>
  <div class="section" :class="{ 'blue': blueBg }">
    <div class="container">
      <h2>{{ id }}. {{ title }}</h2>
      <div class="ryt__section-content">
        <p>{{ text }}</p>
        <div class="ryt__section-card">
          <BaseCard :data="card" without-footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ICard } from '~/types'

interface ISectionContent {
  id: number
  title: string
  text: string
  card: ICard
}
const props = defineProps<{
  content: ISectionContent
  blueBg?: boolean
}>()
const { id, title, text, card } = props.content
</script>

<style lang="sass" scoped>
.ryt__section-content
  display: flex
  justify-content: space-between
  gap: 140px

.ryt__section-card
  width: 504px
  flex-shrink: 0
</style>
