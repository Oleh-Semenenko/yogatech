<template>
  <div class="teammate">
    <div
      class="teammate__avatar-wrapper"
      @click="handleCardMobClick"
    >
      <img
        :src="coverImg"
        alt="Teammate avatar"
        width="365"
        height="365"
        class="teammate__avatar"
      />
      <div class="teammate__overlay">
        <div class="teammate__overlay-footer">
          <NuxtLink :to="`/team/${slug}`" class="btn">Дізнатись більше</NuxtLink>
        </div>
      </div>
    </div>
    <h3 class="teammate__name">{{ name }}</h3>
    <p class="teammate__description">{{ intro }}</p>
  </div>
</template>

<script setup lang="ts">
import type { ITeammate } from '~/types'

interface ITeammateProps {
  participant: ITeammate
}

const props = defineProps<ITeammateProps>()
const { coverImg, name, slug, intro } = props.participant

const isMobile = computed(() => {
  return window.innerWidth <= 768
})

const handleCardMobClick = () => {
  if (isMobile.value) {
    navigateTo(`/team/${slug}`)
  }
}
</script>

<style lang="sass" scoped>
.teammate
  width: 100%
  overflow: hidden

.teammate__overlay
  position: absolute
  top: 0
  right: 0
  display: flex
  align-items: flex-end
  justify-content: center
  padding: 8px 16px
  width: 100%
  height: 100%
  transform: translateY(100%)
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1), background 300ms cubic-bezier(0.4, 0, 0.2, 1)
  cursor: pointer
  background: rgba(255, 255, 255, 0)

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
    transform: translateY(0)
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

.teammate__description
  text-align: left
</style>
