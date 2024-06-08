<template>
  <div class="lty-wrapper">
    <ClientOnly>
      <lite-youtube :videoid="id" :title="title" params="enablejsapi=1"
        :style="{ backgroundImage: 'url(' + bgImage + ')', width: 100, height: 100 }" js-api @click="handleClick"
        ref="playerRef">
        <a :href="videoLink" class="lty-playbtn"></a>
      </lite-youtube>
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  id: string,
  title: string,
  videoLink: string,
  bgImage: string,
}>()

const playerRef = ref<any>(null); // Reference to the YouTube player object

const handleClick = async () => {
  const currentPlayer = playerRef.value;
  if (currentPlayer) {
    await currentPlayer.destroy(); // Destroy the current player if it exists
  }
  const player = await (document.querySelector('lite-youtube') as any)?.getYTPlayer();
  playerRef.value = player; // Save the reference to the new player
  await player.playVideo(); // Example: Play the video
};
</script>

<style lang="sass">
.lty-wrapper 
  width: 100%
  height: 100%
  & lite-youtube 
    width: 100%
    height: 100%
    

</style>