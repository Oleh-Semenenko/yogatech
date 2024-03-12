<template>
  <div class="teammate">
    <div
      class="teammate__avatar-wrapper"
      @mouseenter="handleShowOverlay"
      @mouseleave="hideOverlay"
      @click="toggleOverlay"
    >
      <img
        :src="img"
        alt="Teammate avatar"
        width="365"
        height="365"
        class="teammate__avatar"
      />
      <div class="teammate__overlay">
        <div class="teammate__overlay-footer">
          <NuxtLink to="/" class="btn">Дізнатись більше</NuxtLink>
          <NuxtLink :to="instagramLink" target="_blank">
            <Icon name="ph:instagram-logo-thin" width="44" height="44" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <h3 class="teammate__name">{{ name }}</h3>
    <p class="teammate__description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { ITeammate } from '~/types'

interface ITeammateProps {
  participant: ITeammate
}

const props = defineProps<ITeammateProps>()
const { id, img, name, description, instagramLink } = props.participant

const showOverlay = ref(false)
const isMobile = computed(() => {
  return window.innerWidth <= 768
})

const toggleOverlay = () => {
  if (isMobile.value) {
    showOverlay.value = !showOverlay.value
  }
}

const handleShowOverlay = () => {
  if (!isMobile.value) {
    showOverlay.value = true
  }
}

const hideOverlay = () => {
  if (!isMobile.value) {
    showOverlay.value = false
  }
}
</script>

<style lang="sass" scoped>
.teammate
  width: 100%

.teammate__overlay
  position: absolute
  top: -100%
  right: 0
  display: flex
  align-items: flex-end
  justify-content: flex-end
  padding: 8px 16px
  width: 100%
  height: 100%
  transition: all 0.3s ease
  cursor: pointer

.teammate__overlay-footer
  display: none
  align-items: center
  gap: 8px

.teammate__avatar-wrapper
  position: relative
  cursor: pointer
  width: 365px
  height: 365px

  @include xl
    width: 316px
    height: 316px
  @include l
    width: 340px
    height: 340px
  @include m
    width: 312px
    height: 312px
  @include s
    width: 100%

  &:hover .teammate__overlay
    top: 0
    background: rgba(255, 255, 255, 0.7)
  &:hover .teammate__overlay-footer
    display: flex


.teammate__avatar
  width: 100%
  height: 100%
  object-fit: cover

.teammate__name
  text-align: center
  margin-top: 8px
  margin-bottom: 4px
  @include m
    margin-top: 4px
</style>
