<template>
  <div class="about-founder section">
    <div class="container">
      <div class="about-founder__inner">
        <h2 class="about-founder__inner-title">Про YogaTech</h2>
        <div class="about-founder__inner-wrapper">
          <img
            src="/images/hero.png"
            width="435"
            height="495"
          />
          <div class="about-founder__inner-content">
            <p class="about-founder__inner-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo
              pariatur iure ab molestias, aperiam dolore expedita, perferendis
              nostrum at maiores voluptatem dignissimos explicabo! Rerum aperiam
              eum autem quisquam ducimus? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Quam sunt, voluptatum voluptate amet
              error commodi! Explicabo similique est repellat dolor iusto, ipsa
              libero temporibus iure, illum iste deleniti tempora perferendis?
            </p>

            <button class="btn">Дізнатись більше</button>
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
    justify-items: center
    grid-template-columns: 1fr
    gap: 8px

  & img
    @include l
      width: 239px
    @include m
      width: 200px
    @include s
      width: 143px

.about-founder__inner-content
  grid-column: 2
  display: flex
  flex-direction: column
  justify-content: space-between

  @include m
    grid-column: 1
    gap: 20px

  & .btn
    align-self: end
</style>
