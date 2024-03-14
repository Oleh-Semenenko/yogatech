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
    <ul v-if="product.sizes">
      <li v-for="size of product.sizes" :key="size.id">{{ size.value }}</li>
    </ul>

    <div class="goods__controller">
      <!-- <div class="goods__controller-quantity">
        <Icon
          name="streamline:interface-remove-circle-delete-add-circle-subtract-button-buttons-remove"
          @click="() => count--"
        />
        {{ count }}
        <Icon
          name="streamline:interface-add-circle-button-remove-cross-add-buttons-plus-circle"
          @click="() => count++"
        />
      </div> -->
      <p class="goods__price">{{ product.price }} грн</p>
      <button class="btn goods__btn" @click="addProduct(productData)">
        B кошик
      </button>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { IProduct } from '~/types'

const props = defineProps<{
  product: IProduct
}>()
const { addProduct } = useBasket()
const count = ref(0)
const productData = computed(() => ({
  ...props.product,
  quantity: count.value
}))

watch(count, () => {
  if (count.value <= 0) {
    count.value = 0
  }
})
</script>

<style lang="sass" scoped>
.goods
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

.goods__title
  font-size: 24px
  @include m
    font-size: 20px

.goods__description
  font-size: 18px
  @include m
    font-size: 16px

.goods__price
  font-size: 40px
  font-weight: 700
  @include l
    font-size: 32px
  @include m
    font-size: 28px

.goods__controller
  display: flex
  align-items: flex-end
  justify-content: space-between
  flex-grow: 1

.goods__controller-quantity
  display: flex
  align-items: center
  gap: 16px
  font-size: 24px
  font-weight: 300

  & svg:hover
    cursor: pointer

.goods__btn
  background-color: var(--orange)
</style>
