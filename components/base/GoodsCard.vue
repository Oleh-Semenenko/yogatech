<template>
  <NuxtLink :to="`/shop/${group}/${product.slug}`" class="goods">
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
    <p v-if="!product.sizes" class="goods__description">
      {{ product.description }}
    </p>
    <ul v-if="product.sizes" class="goods__sizes-list">
      <li
        v-for="size of product.sizes"
        :key="size.id"
        class="goods__size"
        :class="{ selected: selectedSize?.id === size.id }"
        @click="handleSelectSize(size)"
      >
        {{ size.value }}
      </li>
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
      <button class="btn goods__btn" @click="handleAddProductInBasket(productData)">
        B кошик
      </button>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { type IProduct, type ISize, ProductGroup } from '~/types'

const props = defineProps<{
  product: IProduct
  group: ProductGroup
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
  if(selectedSize.value && product.sizes) {
    product.selectedSize = selectedSize.value
    addProduct(product)
  } else {
    addProduct(product)
  }
}

watch(count, () => {
  if (count.value <= 0) {
    count.value = 0
  }
})
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

.goods__sizes-list
  display: flex
  gap: 12px

.goods__size
  cursor: pointer
  color: var(--gray-color)
  padding: 4px 12px
  font-size: 28px
  border: 1px solid var(--border-color)
  border-radius: var(--primary-border-radius)

  &.selected
    color: var(--orange)
    border-color: var(--orange)


.goods__price
  font-size: 36px
  font-weight: 700
  @include xl
    font-size: 28px
  @include l
    font-size: 20px
  @include m
    font-size: 16px

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
