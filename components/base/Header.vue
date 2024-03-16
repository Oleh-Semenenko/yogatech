<template>
  <div class="header" :class="{ 'without-blur': isMobMenuOpen }">
    <div class="container">
      <div class="header__inner">
        <img src="/images/logo.svg" class="logo" />

        <nav class="header__inner-nav">
          <ul class="nav__list">
            <li class="nav__item"><NuxtLink to="/">Про YogaTech</NuxtLink></li>
            <li class="nav__item">
              <NuxtLink
                to="/team"
                :class="{ 'router-link-active': isTeamLinkActive }"
                >Команда та співпраця</NuxtLink
              >
            </li>
            <li class="nav__item">
              <NuxtLink to="/ryt500">Навчання RYT500</NuxtLink>
            </li>
            <li class="nav__item">
              <NuxtLink
                to="/fest"
                :class="{ 'router-link-active': isFestLinkActive }"
                >Конференція</NuxtLink
              >
            </li>
            <li class="nav__item"><NuxtLink to="/shop">Магазин</NuxtLink></li>
          </ul>
        </nav>

        <div
          class="basket"
          v-if="$route.path === '/shop'"
          @click="handleToggleBasketOpen"
        >
          <Icon name="prime:shopping-cart" />
          <span class="basket-goods-quantity">{{ selectedGoods.length }}</span>
        </div>

        <Transition name="page">
          <BasketModal
            v-if="isBasketOpen"
            :is-basket-open="isBasketOpen"
            :set-is-basket-open="handleToggleBasketOpen"
          />
        </Transition>

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
                  to="/team"
                  :class="{ 'router-link-active': isTeamLinkActive }"
                  @click="handleToggleMobMenu"
                  >Команда та співпраця</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/ryt500" @click="handleToggleMobMenu"
                  >Навчання RYT500</NuxtLink
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
const { selectedGoods } = useBasket()
const isBasketOpen = ref(false)
const isMobMenuOpen = ref(false)

const isFestLinkActive = computed(() => {
  return route.path.includes('fest')
})

const isTeamLinkActive = computed(() => {
  return route.path.includes('team')
})

const handleToggleMobMenu = () => {
  isMobMenuOpen.value = !isMobMenuOpen.value
  if (isMobMenuOpen.value) {
    document.documentElement.style.overflow = 'hidden'
  } else {
    document.documentElement.style.overflow = ''
  }
}

const handleToggleBasketOpen = () => {
  isBasketOpen.value = !isBasketOpen.value
}
</script>

<style lang="sass" scoped>
.page-enter-active,
.page-leave-active
  transition: all 0.4s

.page-enter-from,
.page-leave-to
  opacity: 0

.header
  padding-top: 16px
  padding-bottom: 16px
  position: fixed
  width: 100%
  background-color: var(--white)
  border-bottom-left-radius: var(--primary-border-radius)
  border-bottom-right-radius: var(--primary-border-radius)
  z-index: 1000
  box-shadow: var(--box-shadow)
  @include l
    padding-top: 12px
    padding-bottom: 12px

  &.without-blur
    box-shadow: none
    border-radius: 0

.header__inner
  display: flex
  align-items: center
  justify-content: space-between
  gap: 20px
.header__inner-nav
  margin-left: auto
  @include l
    display: none

.basket
  cursor: pointer
  display: flex
  gap: 4px

.basket-goods-quantity
  display: inline-flex
  align-items: center
  justify-content: center
  font-size: 12px
  width: 20px
  height: 20px
  background-color: rgba(255, 185, 37, 0.3)
  border-radius: 50%
  position: relative

.mob-menu__btn
  display: none
  @include l
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
