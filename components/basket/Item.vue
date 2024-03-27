<template>
  <div class="product">
    <img :src="product.photos[0]" alt="Product logo" width="100" height="100" />
    <div class="product__data">
      <div class="product__data-header">
        <div>Назва: {{ productTitle }}</div>
        <Icon name="ph:trash-thin" width="44" height="44" @click="removeProduct(product.id)" />
      </div>
      <div class="product__controller">
        <div class="product__price text-3">{{ product.price }} грн</div>
        <div class="product__controller-quantity">
          <Icon
            name="ph:minus-circle-thin"
            width="44"
            height="44"
            @click.stop="() => count--"
          />
          <span class="text-3">{{ count }}</span>
          <Icon
            name="ph:plus-circle-thin"
            width="44"
            height="44"
            @click.stop="() => count++"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISelectedProduct } from '~/types'

const props = defineProps<{
  product: ISelectedProduct
}>()
const { removeProduct } = useBasket()
const count = ref(1)

const productTitle = computed(() => {
  return props.product?.selectedSize
    ? props.product.title + ' розмір ' + props.product.selectedSize.value
    : props.product.title
})

watch(count, () => {
  if (count.value <= 1) {
    count.value = 1
  }
})
</script>

<style lang="sass">
.product
  padding: 16px 24px
  border-radius: var(--primary-border-radius)
  border-bottom: 1px solid var(--border-color)
  display: flex
  gap: 16px

.product__data
  flex-grow: 1

.product__data-header
  display: flex
  justify-content: space-between
  @include s
    margin-bottom: 12px

  & svg
    cursor: pointer

.product__price
  font-weight: 700

.product__controller
  display: flex
  align-items: baseline
  gap: 36px
  @include m
    gap: 12px

.product__controller-quantity
  display: flex
  align-items: center
  gap: 16px
  font-size: 24px
  font-weight: 300
  color: var(--gray-color)
  @include m
    gap: 8px

  & span
    width: 44px
    height: 44px
    border: 1px solid var(--border-color)
    border-radius: var(--primary-border-radius)
    display: flex
    justify-content: center
    align-items: center
    font-weight: 700
    @include m
      width: 28px
      height: 28px

  & svg 
    path
      fill: var(--gray-color)
    @include m
      width: 28px
      height: 28px

  & svg:hover
    cursor: pointer
</style>
