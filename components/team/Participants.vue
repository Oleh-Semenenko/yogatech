<template>
  <div class="team section">
    <div class="container">
      <div class="team__inner">
        <h2 class="team__title">Наша команда</h2>

        <TeamList :teammates="teammates" />

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { teammates } = useTeammates()
</script>

<style lang="sass" scoped>
.team
  position: relative
</style>
