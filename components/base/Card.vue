<template>
  <li class="card">
    <div class="card__header">
      <h3 class="card__header-title">{{ data.title }}</h3>
      <div class="card__avatar"></div>
    </div>

    <p class="card__description">{{ data.description }}</p>

    <div class="card__footer">
      <a :href="data.link" class="card__footer-link">{{ data.linksText }}</a>
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
    link: string
    linksText: string
  }
}
defineProps<ICardProps>()
</script>

<style lang="sass" scoped>
.card
  border: 1px solid var(--primary-text-color)
  border-radius: 2px
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.16)
  padding: 40px 32px 20px
  display: flex
  flex-direction: column
  gap: 28px
  justify-content: space-between
.card__header
  display: flex
  gap: 20px
  justify-content: space-between

.card__header-title
  margin-top: 40px

.card__avatar
  border: 1px solid var(--primary-text-color)
  border-radius: 50%
  width: 120px
  height: 120px
  flex-shrink: 0

.card__description
  font-size: 32px

.card__footer
  border-top: 1px solid var(--primary-text-color)
  padding-top: 20px
  text-align: right

.card__footer-link
  margin-left: auto
  display: inline-block
  padding: 8px 20px
  font-size: 24px
  border: 1px solid var(--primary-text-color)
</style>
