<template>
  <div class="teammate">
    <img :src="img" alt="Teammate avatar" />
    <p>{{ name }}</p>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
interface ITeammate {
  id: number
  img: string
  name: string
  description: string
}

const props = defineProps<ITeammate>()
const { id, img, name, description } = props
</script>

<style lang="sass" scoped></style>
