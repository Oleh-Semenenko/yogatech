<template>
  <li class="card">
    <div class="card__header">
      <h3 class="card__header-title">{{ data.title }}</h3>
      <Icon v-if="data.contactsType" :name="(data.photo as string)" width="72" height="72" class="card__contact-avatar" />
      <div v-else class="card__avatar"></div>
    </div>

    <div class="card__content">
      <p class="card__description">{{ data.description }}</p>

      <NuxtLink
        v-if="data.formBtn"
        :to="data.formBtn"
        class="card__link btn form-link"
        :class="{ 'orange-type': data.linkColor === LinkColor.ORANGE }"
        >Заповнити форму</NuxtLink
      >
    </div>

    <div v-if="!withoutFooter" class="card__footer">
      <NuxtLink
        :to="data.link"
        class="card__link btn"
        :class="{ 'orange-type': data.linkColor === LinkColor.ORANGE }"
        >{{ data.linksText }}</NuxtLink
      >
    </div>
  </li>
</template>

<script setup lang="ts">
import { type ICard, LinkColor } from '~/types'

interface ICardProps {
  data: ICard
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
  justify-content: space-between
  gap: 40px
  @include m
    gap: 12px

.card__contact-avatar
  flex-shrink: 0

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

.card__content
  flex-grow: 1

.card__footer
  border-top: 1px solid var(--border-color)
  padding-top: 20px
  text-align: right
  @include m
    padding-top: 16px

.card__link
  margin-left: auto
  color: var(--white)

.form-link
  margin-top: 20px
  display: block
</style>
