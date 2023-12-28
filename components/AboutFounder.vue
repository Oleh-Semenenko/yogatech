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
  border-left: 56px solid var(--orange)

.about-founder__inner
  padding-top: 120px
  padding-bottom: 60px

.about-founder__inner-title
  font-size: 52px
  font-weight: 700
.about-founder__inner-wrapper
  display: flex
  gap: 52px

// .about-founder__inner-content

.about-founder__inner-subtitle
  font-size: 48px
  font-weight: 700
  margin-bottom: 24px

.about-founder__inner-text
  font-size: 40px
</style>
