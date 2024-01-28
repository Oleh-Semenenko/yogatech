<template>
  <li class="goods">
    <ul class="goods__photos-list">
      <li
        v-for="(img, idx) in product.photos"
        :key="idx"
        class="goods__photos-item"
      >
        <img :src="img" alt="Photo" />
      </li>
    </ul>

    <p class="goods__title">{{ product.title }}</p>
    <p class="goods__description">{{ product.description }}</p>
    <p class="goods__price">{{ product.price }}</p>

    <div class="goods__controller">
      <div class="goods__controller-quantity">
        <Icon
          name="streamline:interface-remove-circle-delete-add-circle-subtract-button-buttons-remove"
          @click="() => count--"
        />
        {{ count }}
        <Icon
          name="streamline:interface-add-circle-button-remove-cross-add-buttons-plus-circle"
          @click="() => count++"
        />
      </div>
      <a
        :href="product.payment_link"
        class="btn"
      >
        Оплатити
      </a>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { IProduct } from '@/types/index'

const props = defineProps<{
  product: IProduct
}>()

const count = ref(0)

watch(count, () => {
  if (count.value <= 0) {
    count.value = 0
  }
})
</script>

<style lang="sass" scoped>
.goods
  padding: 40px 20px
  border: 1px solid black
  overflow-x: hidden
  width: 100%
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.16)
  @include l
    padding-top: 32px
    padding-bottom: 32px
  @include ms
    padding: 20px 16px

.goods__photos-list
  position: relative
  display: flex
  gap: 12px
  margin-bottom: 12px

.goods__photos-item
  width: 168px
  height: 168px
  flex-shrink: 0

  & img
    width: 100%
    height: 100%
    object-fit: cover

.goods__title
  font-size: 24px
  margin-bottom: 12px
  @include ms
    font-size: 20px

.goods__description
  font-size: 18px
  margin-bottom: 12px
  @include ms
    font-size: 16px

.goods__price
  font-size: 40px
  font-weight: 700
  margin-bottom: 12px
  @include l
    font-size: 32px
  @include ms
    font-size: 28px

.goods__controller
  display: flex
  align-items: center
  justify-content: space-between

.goods__controller-quantity
  display: flex
  align-items: center
  gap: 16px
  font-size: 24px
  font-weight: 300
</style>
