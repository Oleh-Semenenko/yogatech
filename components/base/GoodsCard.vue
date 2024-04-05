<template>
  <li class="goods" @click.stop="() => navigateTo(`/shop/${group}/${product.slug}`)">
    <img v-if="group === ProductGroup.COURSE" :src="product.photos[0]" alt="Course wallpaper" />
    <ul v-else class="goods__photos-list">
      <li v-for="(img, idx) in product.photos" :key="idx" class="goods__photos-item">
        <img :src="img" alt="Product photo" />
      </li>
    </ul>

    <div class="goods__header">
      <img v-if="(product as ICourse)?.level" :src="`/images/gear-${(product as ICourse).level}.svg`" width="32"
        height="32" alt="Course level icon" />
      <p class="goods__title">{{ product.title }}</p>
    </div>
    <p v-if="product?.shortDescription" class="goods__description">
      {{ product.shortDescription }}
    </p>

    <div class="goods__controller">
      <p v-if="product?.price" class="goods__price text-2">{{ product.price }} грн</p>
      <p v-if="product?.preOrder" class="goods__price">{{ product.preOrder }}</p>
      <NuxtLink v-if="!withoutBtn" :to="product.payment_link" class="btn orange-type" target="_blanc" @click.stop>
        Придбати
      </NuxtLink>
    </div>
  </li>
</template>

<script setup lang="ts">
import { type IProduct, type ICourse, ProductGroup } from '~/types'

const props = defineProps<{
  product: IProduct | ICourse
  group: ProductGroup
  withoutBtn?: boolean
}>()
</script>

<style lang="sass" scoped>
.goods
  cursor: pointer
  padding: 12px
  border: 1px solid var(--border-color)
  overflow-x: hidden
  background: var(--white)
  width: 100%
  box-shadow: var(--box-shadow)
  display: flex
  flex-direction: column
  gap: 12px
  justify-content: space-between
  @include l
    padding-top: 32px
    padding-bottom: 32px
  @include m
    padding: 20px 16px

.goods__photos-list
  position: relative
  display: flex
  gap: 12px

.goods__photos-item
  width: 168px
  height: 168px
  flex-shrink: 0

  & img
    width: 100%
    height: 100%
    object-fit: cover

.goods__header
  display: flex
  align-items: center
  gap: 4px

.goods__title
  font-size: 24px
  @include m
    font-size: 20px

.goods__description
  font-size: 18px
  @include m
    font-size: 16px

.goods__price
  font-weight: 700

.goods__controller
  display: flex
  align-items: flex-end
  justify-content: space-between
  flex-grow: 1
  margin-top: 32px
  @include xl
    margin-top: 16px
</style>
