<template>
  <div class="header" :class="{ 'without-blur': isMobMenuOpen }">
    <div class="container">
      <div class="header__inner">
        <div class="logo">logo</div>

        <nav class="header__inner-nav">
          <ul class="nav__list">
            <li><NuxtLink to="/">Про YogaTech</NuxtLink></li>
            <li>
              <NuxtLink
                to="/fest"
                :class="{ 'router-link-active': isFestLinkActive }"
                >Конференція</NuxtLink
              >
            </li>
            <!-- <li><NuxtLink to="/courses">Навчання</NuxtLink></li> -->
            <li><NuxtLink to="/shop">Магазин</NuxtLink></li>
          </ul>
        </nav>

        <div class="mob-menu__btn" @click="handleToggleMobMenu">
          <Icon v-if="!isMobMenuOpen" name="ci:hamburger" />
          <Icon v-else name="ci:close-big" />
        </div>

        <div v-if="isMobMenuOpen" class="mob-menu">
          <nav class="header__mob-nav">
            <ul class="nav__list">
              <li>
                <NuxtLink to="/" @click="handleToggleMobMenu"
                  >Про YogaTech</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/fest"
                  :class="{ 'router-link-active': isFestLinkActive }"
                  @click="handleToggleMobMenu"
                  >Конференція</NuxtLink
                >
              </li>
              <!-- <li>
                <NuxtLink to="/courses" @click="handleToggleMobMenu"
                  >Навчання</NuxtLink
                >
              </li> -->
              <li>
                <NuxtLink to="/shop" @click="handleToggleMobMenu"
                  >Магазин</NuxtLink
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const isMobMenuOpen = ref(false)

const isFestLinkActive = computed(() => {
  return route.path.includes('fest')
})

const handleToggleMobMenu = () => {
  isMobMenuOpen.value = !isMobMenuOpen.value
  if (isMobMenuOpen.value) {
    document.documentElement.style.overflow = 'hidden'
  } else {
    document.documentElement.style.overflow = ''
  }
}
</script>

<style lang="sass" scoped>
.header
  padding-top: 56px
  padding-bottom: 56px
  position: fixed
  width: 100%
  backdrop-filter: blur(10px)
  z-index: 1000

  @include l
    padding-top: 40px
    padding-bottom: 40px
  @include m
    padding-top: 32px
    padding-bottom: 32px

  &.without-blur
    backdrop-filter: none
    background-color: var(--white)

.header__inner
  display: flex
  align-items: center
  justify-content: space-between
  gap: 20px
.header__inner-nav
  @include m
    display: none
.mob-menu__btn
  display: none
  @include m
    display: block

.mob-menu
  position: absolute
  left: 0
  top: 100%
  bottom: 0
  width: 100vw
  height: 100vh
  background-color: var(--white)
  padding: 40px

  & .nav__list
    flex-direction: column
    font-size: 28px
</style>
