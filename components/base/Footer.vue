<template>
  <div class="footer section blue">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__inner-left">
          <div class="logo">logo</div>
          <p>© Copyright 2022 YogaTech.ua All Rights Reserved</p>
        </div>

        <ul>
          <li>
            <NuxtLink>insta</NuxtLink>
          </li>
          <li>
            <NuxtLink>insta</NuxtLink>
          </li>
          <li>
            <NuxtLink>insta</NuxtLink>
          </li>
        </ul>

        <ul class="nav__list">
          <li><NuxtLink to="/">Про YogaTech</NuxtLink></li>
          <li><NuxtLink to="/fest">Конференція</NuxtLink></li>
          <li><NuxtLink>Навчання</NuxtLink></li>
          <li><NuxtLink>Магазин</NuxtLink></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.footer__inner
  display: flex
  justify-content: space-between
  align-items: flex-start
  gap: 24px

.footer__inner-left
  display: flex
  flex-direction: column
  max-width: 20%
  gap: 60px

.nav__list
  flex-grow: 1
  justify-content: flex-end
.logo
  display: inline-block
  max-width: 230px
  height: 68px
  background-color: gray
</style>
