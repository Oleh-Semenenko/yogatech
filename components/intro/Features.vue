<template>
  <div class="features section blue">
    <div class="container">
      <div class="features__inner">
        <BaseFeaturesList :features="yogatechFeatures" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { yogatechFeatures } = useFeatures()
</script>
