<template>
  <div class="basket-bg">
    <div class="basket">
      <div class="basket-header">
        <span>Замовлення</span>
        <span class="basket-header__close-btn">
          <Icon name="ci:close-big" @click="setIsBasketOpen" />
        </span>
      </div>

      <ul class="basket-list">
        <li
          v-for="product in selectedGoods"
          :key="product.id"
          class="basket-item"
        >
          <BasketItem :product="product" />
        </li>
      </ul>

      <div>Загальна вартість: {{ totalCost }}</div>

      <a href="https://secure.wayforpay.com/button/bf97a2c2fb2e7">Оплатити</a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isBasketOpen: boolean
  setIsBasketOpen: () => void
}>()

const { selectedGoods } = useBasket()

const totalCost = computed(() => {
  return selectedGoods.value.reduce((acc, item) => {
    acc += item.price * item.quantity
    return acc
  }, 0)
})
</script>

<style lang="sass" scoped>
.basket-bg
  position: absolute
  top: 0
  right: 0
  backdrop-filter: blur(10px)
  background-color: rgba(255, 255, 255, 0.3)
  width: 100vw
  height: 100vh
.basket
  background-color: #fff
  height: 100vh
  width: 50vw
  margin-left: auto
  padding: 40px

.basket-header
  display: flex
  align-items: center
  justify-content: space-between

.basket-header__close-btn
  cursor: pointer
  margin-left: auto

.basket-list
  margin-top: 40px
  display: flex
  flex-direction: column
  gap: 16px
</style>
