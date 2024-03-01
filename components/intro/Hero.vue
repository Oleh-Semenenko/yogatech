<template>
  <div class="hero">
    <div class="container">
      <div class="hero__inner">
        <h1 class="hero__title">
          Перший україномовний йогічний проект з науковим підгрунтям
        </h1>
        <div class="hero__logo">
          <img src="/images/YOG.png" alt="Logo" width="529" class="">
          <img src="/images/logo_triangle.png" alt="Logo" width="200" height="170" class="hero__logo-img">
          <img src="/images/TECH.png" alt="Logo" width="614" class="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.hero__inner
  display: grid
  grid-template-columns: 1fr
  grid-template-rows: repeat(2, auto)
  gap: 14px
  padding-bottom: 60px
  @include xl
    padding-bottom: 52px
  @include l
    padding-bottom: 36px
  @include m
    grid-template-columns: 1fr
    grid-template-rows: auto 1fr
    gap: 32px

.hero__title
  margin-top: 128px

  @include xl
    margin-top: 100px

  @include l
    margin-top: 60px
  @include m
    text-align: center
    margin-bottom: 0
    margin-top: 32px
    grid-row: 1

.hero__image
  max-width: 741px
  height: auto
  grid-column: 2

  @include m
    grid-column: 1
    grid-row: 2

.hero__logo
  justify-self: end
  display: grid
  grid-template-columns: repeat(3, max-content)
  gap: 12px
.hero__logo-img
  display: inline-block
</style>
