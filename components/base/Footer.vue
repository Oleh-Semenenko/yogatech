<template>
  <div class="footer section blue">
    <div class="container">
      <div class="footer__inner">
        <div class="logo">logo</div>
        <p class="copyright">© Copyright 2022 YogaTech.ua All Rights Reserved</p>

        <ul class="nav__list">
          <li><NuxtLink to="/">Про YogaTech</NuxtLink></li>
          <li><NuxtLink to="/fest">Конференція</NuxtLink></li>
          <!-- <li><NuxtLink>Навчання</NuxtLink></li> -->
          <li><NuxtLink to="/shop">Магазин</NuxtLink></li>
        </ul>

        <ul class="socials__nav-list">
          <li>
            <Icon name="cib:instagram" />
          </li>
          <li>
            <Icon name="cib:telegram-plane" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.footer__inner
  display: grid
  grid-template-columns: 0.5fr 1fr
  grid-template-rows: repeat(2, 1fr)
  justify-content: space-between
  align-items: flex-start
  gap: 24px

  @include m
    grid-template-columns: 1fr
    grid-template-rows: repeat(3, auto) 

.logo
  grid-column: 1
  grid-row: 1

.copyright
  font-size: 20px
  grid-column: 1
  grid-row: 2
  @include m
    font-size: 16px
    grid-row: 3

.nav__list
  grid-column: 2
  grid-row: 1
  flex-grow: 1
  justify-content: flex-end
  @include m
    grid-column: 1
    grid-row: 2
    justify-content: flex-start
  @include s
    align-items: start
    flex-direction: column
    gap: 16px

.socials__nav-list
  grid-column: 2
  grid-row: 2
  justify-content: flex-end
  display: flex
  gap: 32px
  @include m
    grid-column: 1
    grid-row: 1
    gap: 24px


.icon:hover
  cursor: pointer
  color: var(--orange)
</style>
