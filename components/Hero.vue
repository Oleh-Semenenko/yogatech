<template>
  <div class="hero">
    <div class="container">
      <div class="hero__inner">
        <h1 class="hero__title">Перший україномовний йогічний проект з науковим підгрунтям</h1>
        <NuxtImg
          src="/images/hero.png"
          format="webp"
          width="741"
          height="887"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.hero__inner
  display: flex
  justify-content: space-between

.hero__title
  font-family: 'Open Sans', sans-serif
  font-size: 64px
  font-weight: 700
  margin-top: 128px
</style>
