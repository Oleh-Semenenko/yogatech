<template>
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
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.mandala-wrapper
  width: 400px
  display: flex
  position: absolute
  top: 50%
  left: -10%
  @include xl
    left: -15%
  @include m
    display: none

.mandala-1
  animation: spin-1 30s linear infinite
  transform-origin: center
  @include xl
    width: 180px
    height: 180px
  @include l
    width: 120px
    height: 120px

.mandala-2
  opacity: 0.7
  animation: spin-2 30s linear infinite
  transform-origin: center
  position: absolute
  left: 39%
  bottom: 65%
  @include xl
    width: 180px
    height: 180px
    left: 30%
  @include l
    width: 120px
    height: 120px
    left: 20%

@keyframes spin-1
  from
    transform: rotate(0deg)
  to
    transform: rotate(360deg)

@keyframes spin-2
  from
    transform: rotate(25deg)
  to
    transform: rotate(-335deg)
</style>
