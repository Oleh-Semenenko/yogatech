<template>
  <div class="teammate">
    <img :src="img" alt="Teammate avatar" width="365" height="365" class="teammate__avatar"/>
    <h3 class="teammate__name">{{ name }}</h3>
    <p class="teammate__description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
interface ITeammate {
  participant: {
    id: number
    img: string
    name: string
    description: string
  }
}

const props = defineProps<ITeammate>()
const { id, img, name, description } = props.participant
</script>

<style lang="sass" scoped>
.teammate
  width: 100%
.teammate__avatar
  width: 365px
  height: 365px
  object-fit: cover

.teammate__name
  text-align: center
  margin-top: 8px
  margin-bottom: 4px
.teammate__description

</style>
