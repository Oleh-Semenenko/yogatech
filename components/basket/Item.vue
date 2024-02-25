<template>
  <div class="product">
    <img :src="product.photos[0]" alt="Product logo" width="100" height="100" />
    <div>Назва: {{ product.title }}</div>
    <div>Кількість: {{ product.quantity }}</div>
    <div>Ціна за 1 одиницю: {{ product.price }}</div>
    <div>Загальна вартість за товар: {{ totalCostPerItem }}</div>
  </div>
</template>

<script setup lang="ts">
import type { ISelectedProduct } from '~/types'

const props = defineProps<{
  product: ISelectedProduct
}>()

const totalCostPerItem = computed(
  () => (props.product.quantity * props.product.price)
)
</script>

<style lang="sass" scoped>
.product
  padding: 16px
  border-radius: var(--primary-border-radius)
  border: 1px solid var(--primary-text-color)
  display: flex
  flex-direction: column
  gap: 8px
  font-size: 18px
</style>
