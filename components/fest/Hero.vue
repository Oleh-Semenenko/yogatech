<template>
  <div class="fest section">
    <div class="fest-hero">
      <div class="container">
        <div class="fest-hero__inner">
          <h1 class="fest-hero__title">
            Навчання нон-стоп на виїздній йога-конференції від YogaTech
          </h1>

          <!-- <button class="fest-hero__register-btn btn" @click="emit('register')"
            >Зареєструватись</button
          > -->
          <NuxtLink to="https://docs.google.com/forms/d/e/1FAIpQLSe1p_AiS0axlgap-nxMBZYr9moEG4747P5VDR1ny6Snf_kmxQ/viewform?usp=sf_link" class="btn">Зареєструватись</NuxtLink>
        </div>
      </div>
      <img src="/images/mandala.png" alt="Mandala" width="400" height="400" class="mandala"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['register'])
</script>

<style lang="sass" scoped>
.mandala
  position: absolute
  right: -200px
  top: 40%
  animation: spin 30s linear infinite

  @include l
    width: 250px
    height: 250px
    right: -125px
  @include m
    width: 150px
    height: 150px
    right: -75px

@keyframes spin
  from
    transform: rotate(0deg)
  to
    transform: rotate(360deg)
.fest.section
  position: relative
  padding-top: 16px
.fest-hero
  background: linear-gradient(to right, grey 0 50%, var(--white) 50% 100%)
  background-position: left top
  background-repeat: no-repeat
  @include m
    background: none

.fest-hero__inner
  display: flex
  flex-direction: column
  gap: 130px
  align-items: flex-end
  padding-bottom: 260px
  @include l
    padding-bottom: 150px
    gap: 80px
  @include m
    align-items: center
    gap: 44px
    padding-bottom: 0

.fest-hero__title
  margin-top: 240px
  text-align: right
  z-index: 20

  @include xl
    margin-top: 100px
  @include l
    margin-top: 60px
  @include m
    margin: 0px

.fest-hero__image
  max-width: 741px
  height: auto
  grid-column: 2

a.btn
  z-index: 20
  background-color: #fff
</style>
