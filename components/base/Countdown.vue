<template>
  <div class="countdown">
    <template v-if="countdown.days">
      <div>
        <p>{{ formatNumber(countdown.days) }}</p>
      </div>
      <div>:</div>
    </template>
    <div>
      <p>{{ formatNumber(countdown.hours) }}</p>
    </div>
    <div>:</div>
    <div>
      <p>{{ formatNumber(countdown.minutes) }}</p>
    </div>
    <div>:</div>

    <div>
      <p>{{ formatNumber(countdown.seconds) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  countdownEndTimestamp: Date | number
}>()
const emit = defineEmits(["countdownEnded"])
const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })
const isCountdownEnded = ref(false);

const formatNumber = (num: number) => {
  return num < 10 ? `0${num}` : num;
};

const calculateCountdown = () => {
  const currentTimeSeconds = Math.floor(Date.now() / 1000);
  const countdownEndSeconds = Math.floor((props.countdownEndTimestamp as number) / 1000);
  const remainingSeconds = Math.max(0, countdownEndSeconds - currentTimeSeconds);

  if (remainingSeconds === 0) {
    isCountdownEnded.value = true;
    emit('countdownEnded');
  }

  const days = Math.floor(remainingSeconds / (24 * 3600));
  const hours = Math.floor((remainingSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;

  countdown.value = { days, hours, minutes, seconds };
};

calculateCountdown();

let interval: string | number | NodeJS.Timeout | undefined;

onMounted(() => {
  calculateCountdown();
  interval = setInterval(calculateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});

watch(isCountdownEnded, (newValue) => {
  if (newValue) {
    clearInterval(interval);
  }
});
</script>

<style lang="sass" scoped>
.countdown
  display: flex
  font-weight: bold
  font-size: 30px
  border: 4px solid var(--orange)
  border-radius: 10px
  padding: 4px 8px
</style>