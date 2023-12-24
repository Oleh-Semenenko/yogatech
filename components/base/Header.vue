<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <div class="logo">logo</div>

      <nav>
        <ul class="nav__list">
          <li><NuxtLink to="/">Про YogaTech</NuxtLink></li>
          <li><NuxtLink to="/fest">Конференція</NuxtLink></li>
          <li><NuxtLink>Навчання</NuxtLink></li>
          <li><NuxtLink>Магазин</NuxtLink></li>
        </ul>
      </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style lang="sass" scoped>
.header
  padding-top: 56px
  padding-bottom: 56px

.header__inner
  display: flex
  align-items: center
  justify-content: space-between

.logo
  display: inline-block
  width: 230px
  height: 68px
  background-color: gray

.nav__list
  display: flex
  align-items: center
  gap: 32px
  font-size: 28px
  font-weight: 700

.router-link-active
  color: var(--orange)
</style>
