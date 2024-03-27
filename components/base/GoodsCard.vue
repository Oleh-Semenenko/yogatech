<template>
  <li
    class="goods"
    @click.stop="() => navigateTo(`/shop/${group}/${product.slug}`)"
  >
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
    <p v-if="!product.sizes && product?.shortDescription" class="goods__description">
      {{ product.shortDescription }}
    </p>
    <ShopSizesList
      v-if="product?.sizes && selectedSize"
      :sizes="product.sizes"
      :selected-size="selectedSize"
      @select-size="handleSelectSize"
    />

    <div class="goods__controller">
      <p class="goods__price text-2">{{ product.price }} грн</p>
      <button
        v-if="!withoutBtn"
        class="btn orange-type"
        @click.stop="handleAddProductInBasket(productData)"
      >
        B кошик
      </button>
    </div>
  </li>
</template>

<script setup lang="ts">
import { type IProduct, type ISize, ProductGroup } from '~/types'

const props = defineProps<{
  product: IProduct
  group: ProductGroup
  withoutBtn?: boolean
}>()

const { addProduct } = useBasket()
const count = ref(0)
const selectedSize: Ref<ISize | null> = ref(
  props.product?.sizes ? props.product?.sizes[0] : null
)
const productData = computed(() => ({
  ...props.product,
  quantity: count.value
}))

const handleSelectSize = (size: ISize) => {
  selectedSize.value = size
}
const handleAddProductInBasket = (product: IProduct) => {
  if (selectedSize.value && product.sizes) {
    product.selectedSize = selectedSize.value
    addProduct(product)
  } else {
    addProduct(product)
  }
}
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
