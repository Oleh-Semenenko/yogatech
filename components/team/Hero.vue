<template>
  <div class="hero section">
    <div class="container">
      <div class="hero__inner">
        <h1 class="hero__title">
          Традиція - це передача вогню, а не вклоніння попелу.
        </h1>

        <BaseMandala />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.hero
  position: relative
.hero__title
  width: 60%
  @include m
    width: 100%

.mandala-wrapper
  right: 5%
  left: 0
  margin-left: auto
  @include l
    right: 0
</style>
