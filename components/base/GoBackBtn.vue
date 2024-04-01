<template>
  <div class="go-back-btn" @click="() => navigateTo('/shop')">
    <Icon name="mdi-light:chevron-left" width="32" height="32" />
    <p class="text-3">до магазину</p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass">
.go-back-btn
  & svg path
    fill: var(--primary-text-color)

  cursor: pointer
  display: flex
  align-items: center
  margin-bottom: 40px
  font-weight: 700
  @include xl
    margin-bottom: 28px
  @include l
    margin-bottom: 20px
  @include m
    margin-bottom: 12px
</style>
