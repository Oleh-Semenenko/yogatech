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
  @include xxl
    padding: 40px 28px 20px
  @include xl
    padding: 32px 24px 20px
  @include l
    gap: 24px
    padding: 28px 20px 16px

.card__header
  display: flex
  gap: 20px
  justify-content: space-between
  align-items: center

.card__header-title
  margin-bottom: 0
  font-size: 32px
  @include xl
    font-size: 28px
  @include l
    font-size: 24px

.card__avatar
  border: 1px solid var(--primary-text-color)
  border-radius: 50%
  width: 120px
  height: 120px
  flex-shrink: 0
  @include xxl
    width: 100px
    height: 100px
  @include xl
    width: 70px
    height: 70px


.card__description
  font-size: 28px
  @include xl
    font-size: 24px
  @include l
    font-size: 20px

.card__footer
  border-top: 1px solid var(--primary-text-color)
  padding-top: 20px
  text-align: right
  @include m
    padding-top: 16px

.card__footer-link
  margin-left: auto
  display: inline-block
  padding: 8px 20px
  font-size: 24px
  border: 1px solid var(--primary-text-color)
  @include xl
    font-size: 20px
</style>
