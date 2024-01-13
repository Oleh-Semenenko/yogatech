<template>
  <div>
    <div class="container">
      <div class="features__inner">
        <BaseFeaturesList :features="festFeatures" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { festFeatures } = useFeatures()
</script>

<style lang="sass" scoped></style>
