<template>
  <div class="form section">
    <div class="container">
      <div class="form__wrapper">
        <h2>Заповни заявку для участі в проекті</h2>
        <p>
          Заповніть Google-форму, якщо маєте питання або пропозиції по співпраці і ми з вами зв’яжемось!
        </p>

        <NuxtLink to="https://forms.gle/hitRZj1CfKV5fMzJ8" class="btn form__btn orange-type" target="_blanc">Заповнити заявку</NuxtLink>
      </div>
      <BaseMandala />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass">
.form 
  & .container
    position: relative
  
  & .mandala-wrapper
    top: 40%
    right: 0
    left: auto
    @include xl
      width: 310px
    @include l
      width: 250px
    @include m
      left: -5%
      top: auto
      bottom: 0
      display: flex

  & .mandala-2
    @include xl
      left: 39%
    @include l
      left: 32%
    @include m
      bottom: 34%
      left: 42%
.form__wrapper
  & p
    @include l
      max-width: 50%
    @include m
      max-width: 100%
  display: flex
  flex-direction: column
.form__btn
  margin: 100px auto 44px
  z-index: 50
  @include xl
    margin-bottom: 32px
</style>
