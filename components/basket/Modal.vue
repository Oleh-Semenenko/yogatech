<template>
  <div class="basket-bg">
    <div class="basket">
      <div class="basket-header">
        <h2>Кошик</h2>
        <span class="basket-header__close-btn">
          <Icon
            name="ph:x-thin"
            width="44"
            height="44"
            @click="setIsBasketOpen"
          />
        </span>
      </div>

      <div class="basket-products">
        <h3>Продукти</h3>
        <ul class="basket-list">
          <li
            v-for="product in selectedGoods"
            :key="product.id"
            class="basket-item"
          >
            <BasketItem :product="product" />
          </li>
        </ul>
      </div>

      <div class="basket-footer">
        <h2>Всього: {{ totalCost }} грн</h2>

        <a href="https://secure.wayforpay.com/button/bf97a2c2fb2e7" class="btn">Перейти до оплати</a>
      </div>
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
    acc += item.price
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

.basket-header
  display: flex
  align-items: center
  justify-content: space-between
  margin-bottom: 32px
  padding: 24px 24px 0
  & h2
    margin-bottom: 0

.basket-header__close-btn
  cursor: pointer
  margin-left: auto

.basket-products
  & h3
    padding: 0 24px
    margin-bottom: 16px

.basket-list
  border-top: 1px solid var(--border-color)
  display: flex
  flex-direction: column

.basket-footer
  padding: 0 24px
  margin-top: 16px

  & a
    margin-left: auto
    display: block
    background-color: var(--orange)
</style>
