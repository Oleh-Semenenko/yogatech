<template>
  <div class="section">
    <div class="fest-hero">
      <div class="container">
        <div class="fest-hero__inner">
          <!-- <div class="fest-hero__image">
          <NuxtImg
            src="/images/hero.png"
            format="webp"
            width="741"
            height="887"
          />
        </div> -->
          <h1 class="fest-hero__title">
            Навчання нон-стоп на виїздній йога-конференції від YogaTech
          </h1>

          <BaseButton class="fest-hero__register-btn"
            >Зареєструватись</BaseButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.fest-hero
  background: linear-gradient(to right, grey 0 50%, #fff 50% 100%)
  background-position: left top
  background-repeat: no-repeat

.fest-hero__inner
  display: flex
  flex-direction: column
  gap: 130px
  align-items: flex-end
  padding-bottom: 260px

.fest-hero__title
  margin-top: 240px
  text-align: right

  @include xl
    margin-top: 100px

  @include l
    margin-top: 60px

.fest-hero__image
  max-width: 741px
  height: auto
  grid-column: 2
</style>
