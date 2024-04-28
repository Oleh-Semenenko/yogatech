<template>
  <component :is="rootElement" class="card" :class="{'small-padding': smallerPadding}">
    <div v-if="(data as IPartner)?.img" class="card__header simple">
      <img :src="(data as IPartner).img" class="card__header-img" width="323" height="163" alt="Partner logo">
      <h3 class="card__header-title">{{ data.title }}</h3>
    </div>
    <div v-else class="card__header">
      <h3 class="card__header-title">{{ data.title }}</h3>
      <Icon v-if="data.icon" :name="(data.icon as string)" width="72" height="72" class="card__contact-avatar" />
    </div>

    <div class="card__content">
      <ul v-if="Array.isArray(data.description)" class="card__description-list">
        <li v-for="item in data.description" :key="item">{{ item }}</li>
        <li v-if="(data as IPartner)?.promocodeText" class="card__description-promocode">{{ (data as
          IPartner).promocodeText }} <span>{{ (data as
            IPartner).promocode }}</span></li>
      </ul>
      <p v-else class="card__description">{{ data.description }}</p>
    </div>

    <div v-if="!withoutFooter" class="card__footer">
      <NuxtLink :to="data.link" class="card__link btn" :class="{ 'orange-type': data.linkColor === LinkColor.ORANGE }"
        target="_blank">{{ data.linksText }}</NuxtLink>
    </div>
  </component>
</template>

<script setup lang="ts">
import { type ICard, type IPartner, LinkColor } from '~/types'

interface ICardProps {
  data: ICard | IPartner
  rootElement: string
  smallerPadding?: boolean
  withoutFooter?: boolean
}
const props = defineProps<ICardProps>()
const { rootElement } = props
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
  height: 100%
  @include xl
    padding: 16px
  @include m
    padding: 12px

  &.small-padding
    padding: 12px

.card__header
  display: flex
  justify-content: space-between
  gap: 8px
  &.simple
    flex-direction: column
    justify-content: center
    & h3
      text-align: left
    & img
      // width: 341px
      // height: 163px
      display: block
      object-fit: contain

.card__header-img
  width: auto
  height: 163px

.card__contact-avatar
  flex-shrink: 0
  @include xl
    width: 56px
    height: 56px
  @include l
    width: 44px
    height: 44px
  @include m
    width: 40px
    height: 40px

.card__content
  flex-grow: 1

.card__description-list
  list-style: disc
  padding-left: 16px
  text-align: left

.card__description-promocode
  font-weight: bold
  & span
    color: var(--orange)

.card__footer
  border-top: 1px solid var(--border-color)
  padding-top: 20px
  text-align: right
  @include m
    padding-top: 16px

.card__link
  margin-left: auto
  color: var(--white)
</style>
