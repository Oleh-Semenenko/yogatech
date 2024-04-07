<template>
  <div class="footer section blue">
    <div class="container">
      <div class="footer__inner">
        <img
          src="/images/logo_footer.png"
          class="footer__logo"
          width="226"
          height="178"
          @click="navigateTo('/')"
        />
        <p class="copyright">
          © Copyright 2024 YogaTech.ua<br />All Rights Reserved
        </p>

        <ul class="nav__list">
          <li class="nav__item"><NuxtLink to="/">Про YogaTech</NuxtLink></li>
          <li class="nav__item">
            <NuxtLink
              to="/team"
              :class="{ 'router-link-active': $route.path.includes('team') }"
              >Команда та співпраця</NuxtLink
            >
          </li>
          <li class="nav__item">
            <NuxtLink to="/ryt1000">Викладацький курс</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink
              to="/fest"
              :class="{ 'router-link-active': $route.path.includes('fest') }"
              >Конференція</NuxtLink
            >
          </li>
          <li class="nav__item">
            <NuxtLink
              to="/shop"
              :class="{ 'router-link-active': $route.path.includes('shop') }"
              >Магазин</NuxtLink
            >
          </li>
        </ul>

        <ul class="nav__list terms">
          <li class="nav__item">
            <NuxtLink to="/payment-and-shipping">Оплата та Доставка</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="/warranty-and-returns"
              >Гарантії та Повернення</NuxtLink
            >
          </li>
        </ul>

        <ul class="socials__nav-list">
          <li>
            <NuxtLink to="https://t.me/yogatechua" target="_blank">
              <Icon name="ph:telegram-logo-thin" width="44" height="44" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://t.me/MikeYogatech" target="_blank">
              <Icon name="ph:telegram-logo-thin" width="44" height="44" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://www.youtube.com/@Y0GATECH" target="_blank">
              <Icon name="ph:youtube-logo-thin" width="44" height="44" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="mailto:yogatechua@gmail.com" target="_blank">
              <Icon name="ph:envelope-simple-thin" width="44" height="44" />
            </NuxtLink>
          </li>
        </ul>

        <div class="creators">
          Розробка та підтримка сайту:<br /><NuxtLink to="https://www.instagram.com/miriam_khmarska_yogini/" target="_blank">Міріам Хмарська, </NuxtLink>
          <NuxtLink to="https://www.linkedin.com/in/oleh-semenenko" target="_blank">Олег Семененко</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.footer__inner
  display: grid
  grid-template-columns: 300px 1fr auto
  grid-template-rows: repeat(3, 1fr)
  justify-content: space-between
  align-items: flex-start
  gap: 24px
  @include xl
    grid-template-columns: auto 1fr auto
    gap: 8px
  @include l
    grid-template-rows: repeat(2, auto)
    & .nav__list
      display: none

.footer__logo
  cursor: pointer
  grid-column: 1
  grid-row: 1 / -1
  @include xl
    width: 172px
    height: 135px
  @include l
    grid-row: 1
    width: 80px
    height: 64px
  @include m
    width: 60px
    height: 48px

.copyright
  font-size: 20px
  grid-column: 3
  grid-row: 3
  justify-self: start
  margin-top: 12px
  @include l
    grid-column: 1
    grid-row: 2
    margin-top: 20px
  @include m
    justify-self: flex-start
    grid-column: 1 / -1
    font-size: 16px

.nav__list
  grid-column: 2 / 4
  grid-row: 1
  flex-grow: 1
  justify-content: flex-start
  @include m
    grid-column: 1 / -1
    grid-row: 2
    justify-content: flex-start
  @include s
    align-items: start
    flex-direction: column
    gap: 16px

.terms
  grid-column: 2
  grid-row: 2
  justify-content: flex-start

.socials__nav-list
  grid-column: 3
  grid-row: 2
  justify-content: flex-end
  display: flex
  gap: 32px
  @include l
    grid-row: 1
    gap: 24px
  @include m
    gap: 16px
  @include s
    gap: 8px

.icon:hover
  cursor: pointer
  color: var(--orange)

.creators
  grid-column: 3
  grid-row: 4
  @include l
    grid-row: 2
    margin-top: 20px
  @include m
    grid-row: 3
    grid-column: 1 / -1
    margin-top: 0

  & a
    text-decoration: underline
    color: var(--blue-color)
</style>
