<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <div class="logo">logo</div>

        <nav>
          <ul class="nav__list">
            <li><NuxtLink to="/">Про YogaTech</NuxtLink></li>
            <li>
              <NuxtLink
                to="/fest"
                :class="{ 'router-link-active': isFestLinkActive }"
                >Конференція</NuxtLink
              >
            </li>
            <li><NuxtLink to="/courses">Навчання</NuxtLink></li>
            <li><NuxtLink to="/shop">Магазин</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const isFestLinkActive = computed(() => {
  return route.path.includes('fest')
})
</script>

<style lang="sass" scoped>
.header
  padding-top: 56px
  padding-bottom: 56px

.header__inner
  display: flex
  align-items: center
  justify-content: space-between
  gap: 20px

.logo
  display: inline-block
  width: 230px
  height: 68px
  background-color: gray
</style>
