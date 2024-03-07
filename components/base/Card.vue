<template>
  <li class="card">
    <div class="card__header">
      <h3 class="card__header-title">{{ data.title }}</h3>
      <div class="card__avatar"></div>
    </div>

    <p class="card__description">{{ data.description }}</p>

    <div v-if="!withoutFooter" class="card__footer">
      <NuxtLink :to="data.link" class="card__footer-link btn">{{ data.linksText }}</NuxtLink>
    </div>
  </li>
</template>

<script setup lang="ts">
interface ICardProps {
  data: {
    id: number
    title: string
    description: string
    photo: string
    link?: string
    linksText?: string
  },
  withoutFooter?: boolean
}
defineProps<ICardProps>()
</script>

<style lang="sass" scoped>
.card
  border: 1px solid var(--border-color)
  background-color: var(--white)
  border-radius: 2px
  box-shadow: var(--box-shadow)
  padding: 20px
  display: flex
  flex-direction: column
  gap: 12px
  justify-content: space-between
  @include xl
    padding: 16px
  @include m
    padding: 12px

.card__header
  display: flex
  gap: 20px
  justify-content: space-between
  @include m
    gap: 12px

.card__avatar
  border: 1px solid var(--border-color)
  border-radius: 50%
  width: 112px
  height: 112px
  flex-shrink: 0
  @include xl
    width: 72px
    height: 72px
  @include m
    width: 60px
    height: 60px

.card__footer
  border-top: 1px solid var(--border-color)
  padding-top: 20px
  text-align: right
  @include m
    padding-top: 16px

.card__footer-link
  margin-left: auto
  color: var(--white)
</style>
