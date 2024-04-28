<template>
  <div class="form section">
    <div class="container">
      <div class="form__wrapper">
        <h2>Заповни заявку для участі в проекті</h2>
        <p>
          Заповніть Google-форму, якщо маєте питання або пропозиції по співпраці, і ми з вами зв’яжемось!
        </p>

        <NuxtLink to="https://forms.gle/hitRZj1CfKV5fMzJ8" class="btn form__btn orange-type" target="_blank">Заповнити заявку</NuxtLink>
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
    top: 0
    right: 0
    left: auto
    @include xl
      top: -10%
      width: 310px
    @include l
      top: 20%
      width: 250px
    @include m
      display: none

  & .mandala-2
    @include xl
      left: 39%
    @include l
      left: 32%

.form__wrapper
  & p
    @include l
      max-width: 50%
    @include m
      max-width: 100%
  display: flex
  flex-direction: column
.form__btn
  margin: 28px auto auto
  z-index: 50
  @include l
    margin-top: 20px
</style>
