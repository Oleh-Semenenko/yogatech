<template>
  <div class="app-wrapper">
    <BaseHeader />
    
    <main class="main">
      <NuxtPage />
    </main>

    <footer>
      <BaseFooter />
    </footer>
  </div>
</template>

<style lang="sass">
.app-wrapper
  min-height: 100vh
  display: flex
  flex-direction: column
  justify-content: space-between
.main
  flex-grow: 1
  display: flex
  flex-direction: column
  justify-content: space-between
  padding-top: 180px

  @include m
    padding-top: 100px
</style>
