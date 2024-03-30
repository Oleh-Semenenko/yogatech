<template>
  <div class="section" :class="{ blue: blueBg }">
    <div class="container">
      <h2>{{ id }}. {{ title }}</h2>
      <div class="ryt__section-content">
        <div>
          <p>{{ text[0] }}</p>
          <p v-if="text.length > 1" class="ryt__section-content--second">{{ text[1] }}</p>
        </div>
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
  text: string[]
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
  @include xl
    gap: 96px
  @include l
    gap: 24px
  @include m
    flex-direction: column
    gap: 12px

.ryt__section-content--second
  margin-top: 20px
  @include m
    margin-top: 16px

.ryt__section-card
  width: 504px
  flex-shrink: 0
  @include xl
    width: 352px
  @include l
    width: 340px
  @include m
    align-self: center
    width: 312px
  @include s
    width: 100%
</style>
