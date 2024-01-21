<template>
  <div class="fest section">
    <div class="fest-hero">
      <div class="container">
        <div class="fest-hero__inner">
          <h1 class="fest-hero__title">
            Навчання нон-стоп на виїздній йога-конференції від YogaTech
          </h1>

          <button class="fest-hero__register-btn btn" @click="emit('register')"
            >Зареєструватись</button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['register'])
</script>

<style lang="sass" scoped>
.fest.section
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
</style>
