<template>
  <div class="hero">
    <div class="container">
      <div class="hero__inner">
        <h1 class="hero__title">
          Перший україномовний йогічний проект з науковим підгрунтям
        </h1>
        <div class="hero__image">
          <NuxtImg
            src="/images/hero.png"
            format="webp"
            width="741"
            height="887"
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
  grid-template-columns: 1fr 1fr
  padding-bottom: 60px

.hero__title
  font-family: 'Open Sans', sans-serif
  font-size: 64px
  font-weight: 700
  margin-top: 128px
  grid-column: 1

.hero__image
  max-width: 741px
  height: auto
  grid-column: 2
</style>
