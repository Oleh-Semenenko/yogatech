<template>
  <ul class="goods__sizes-list">
      <li
        v-for="size of sizes"
        :key="size.id"
        class="goods__size"
        :class="{ selected: selectedSize?.id === size.id }"
        @click.stop="handleSelectSize(size)"
      >
        {{ size.value }}
      </li>
    </ul>
</template>

<script setup lang="ts">
import type { ISize } from '~/types';

const emit = defineEmits(['selectSize'])

defineProps<{
  sizes: ISize[],
  selectedSize: ISize
}>()

const handleSelectSize = (size: ISize) => {
  emit('selectSize', size)
}

</script>

<style lang="sass" scoped>
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
</style>