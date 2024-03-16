<template>
  <div class="section">
    <div class="container">
      <div class="go-back-btn" @click="() => $router.go(-1)">
        <Icon name="mdi-light:chevron-left" width="32" height="32" />
        <h3>Назад до магазину</h3>
      </div>

      <div class="product__content">
        <div class="product__swiper">
          <Icon
            name="mdi-light:chevron-left"
            class="prev-btn"
            width="54"
            height="54"
          />
          <Swiper></Swiper>
          <Icon
            name="mdi-light:chevron-right"
            class="next-btn"
            width="54"
            height="54"
          />
        </div>

        <div>
          <h3>{{ product.title }}</h3>
          <p>{{ product.price }} грн</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductGroup } from '~/types'

const route = useRoute()
const { getOneProduct } = useShop()

const product = getOneProduct(
  route.params.slug as string,
  route.params.group as ProductGroup
)
</script>

<style lang="sass">
.go-back-btn
  & svg path
    fill: var(--primary-text-color)

  cursor: pointer
  display: flex
  align-items: center

.product__content
  display: flex

.product__swiper
  width: 643px
  display: flex
</style>
