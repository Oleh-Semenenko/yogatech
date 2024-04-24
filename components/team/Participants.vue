<template>
  <div class="team section">
    <div class="container">
      <div class="team__inner">
        <h2 class="team__title">Члени асоціації</h2>

        <TeamPageList :list-data="teammates" :type="ListItemType.TEAMMATE" />

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ListItemType } from '~/types'

const { teammates } = useTeammates()
</script>

<style lang="sass" scoped>
.team
  position: relative
</style>
