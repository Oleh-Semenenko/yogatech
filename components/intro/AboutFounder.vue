<template>
  <div class="about-founder">
    <div class="container">
      <div class="about-founder__inner">
        <h2 class="about-founder__inner-title">Про засновника</h2>
        <div class="about-founder__inner-wrapper">
          <NuxtImg
            src="/images/hero.png"
            format="webp"
            width="741"
            height="887"
          />
          <div class="about-founder__inner-content">
            <h3 class="about-founder__inner-subtitle">Михайло Ахекян</h3>
            <p class="about-founder__inner-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo
              pariatur iure ab molestias, aperiam dolore expedita, perferendis
              nostrum at maiores voluptatem dignissimos explicabo! Rerum aperiam
              eum autem quisquam ducimus? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Quam sunt, voluptatum voluptate amet
              error commodi! Explicabo similique est repellat dolor iusto, ipsa
              libero temporibus iure, illum iste deleniti tempora perferendis?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.about-founder
  position: relative

  &::before
    content: ""
    position: absolute
    top: 0
    left: 0
    width: 56px
    height: 440px
    background: var(--orange)
    z-index: 1
    @include xxl
      width: 44px
    @include xl
      width: 40px
    @include l
      width: 24px
      height: 320px
    @include m
      width: 16px
      height: 100px

  &::after
    content: ""
    position: absolute
    top: 0
    left: 0
    width: calc( 440px + 56px )
    height: 56px
    background: var(--orange)
    z-index: 2
    @include xxl
      height: 44px
    @include xl
      height: 40px
    @include l
      height: 24px
      width: calc( 320px + 24px )
    @include m
      height: 16px
      width: 100px


.about-founder__inner
  padding-top: 120px
  padding-bottom: 60px
  @include xl
    padding-top: 100px
    padding-bottom: 52px
  @include l
    padding-top: 60px
    padding-bottom: 36px

.about-founder__inner-title
  @include m
    text-align: center

.about-founder__inner-wrapper
  display: grid
  grid-template-columns: 1fr 1.5fr
  gap: 52px
  @include xl
    gap: 40px
  @include l
    grid-template-columns: 1fr 1fr
    gap: 28px
  @include m
    grid-template-columns: 1fr

.about-founder__inner-content
  grid-column: 2
  @include m
    grid-column: 1

.about-founder__inner-subtitle
  font-size: 48px
  font-weight: 700
  margin-bottom: 24px

  @include xl
    font-size: 40px
  @include l
    font-size: 32px
    margin-bottom: 20px
  @include m
    font-size: 24px
    margin-bottom: 16px


.about-founder__inner-text
  font-size: 40px
  @include xl
    font-size: 36px
  @include l
    font-size: 28px
  @include m
    font-size: 20px
  @include ms
    font-size: 18px
</style>
