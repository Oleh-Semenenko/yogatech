<template>
  <div class="form section">
    <div class="container">
      <div class="form__wrapper">
        <h2>Заповни заявку для участі в проекті</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis magni
          laudantium ducimus earum maiores atque? Odio vel, repellat neque
          exercitationem fuga voluptate omnis labore nostrum, aut recusandae
          quia debitis doloribus.
        </p>

        <NuxtLink to="/" class="btn form__btn">Заповнити заявку</NuxtLink>
      </div>
      <div class="mandala-wrapper">
        <img
          src="/images/mandala_gray.png"
          width="230"
          height="230"
          class="mandala-1"
        />
        <img
          src="/images/mandala_dark.png"
          width="230"
          height="230"
          class="mandala-2"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
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
    max-width: 50%
    @include m
      max-width: 100%
  display: flex
  flex-direction: column
.form__btn
  margin: 100px auto 134px
  background: var(--orange)
  z-index: 50
  @include xl
    margin-bottom: 32px
</style>
