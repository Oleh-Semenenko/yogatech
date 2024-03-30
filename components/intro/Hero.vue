<template>
  <div class="hero">
    <div class="container">
      <div class="hero__inner">
        <h1 class="hero__title">
          Українська асоціація йога-інструкторів
        </h1>
        <div class="hero__logo">
          <img
            src="/images/YOG.png"
            alt="Logo"
            width="529"
            height="auto"
            class="yog animate__animated animate__fadeInLeft"
          />
          <img
            src="/images/logo_triangle.png"
            alt="Logo"
            width="200"
            height="170"
            class="hero__logo-img animate__animated animate__rotateIn"
          />
          <img
            src="/images/TECH.png"
            alt="Logo"
            width="614"
            height="auto"
            class="tech animate__animated animate__fadeInRight"
          />
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
  gap: 60px
  padding-bottom: 40px
  @include xl
    gap: 44px
  @include l
    gap: 32px
    padding-bottom: 16px
  @include m
    gap: 16px
    grid-template-columns: 1fr
    grid-template-rows: auto 1fr

.hero__title
  max-width: 70%
  @include l
    max-width: 80%
  @include m
    max-width: 100%
    text-align: center
    margin-bottom: 0
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
  @include m
    justify-self: center
    gap: 4px

.hero__logo-img
  display: inline-block
  align-self: center
  @include xl
    width: 113px
    height: 99px
  @include l
    width: 83px
    height: 73px
  @include m
    width: 44px
    height: 39px

.yog
  @include xl
    width: 309px
  @include l
    width: 221px
  @include m
    width: 115px

.tech
  @include xl
    width: 358px
  @include l
    width: 256px
  @include m
    width: 133px

.yog,
.tech,
.hero__logo-img
  animation-duration: 2s
</style>
