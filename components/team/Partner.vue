<template>
  <BaseCard :data="partner" root-element="div" smaller-padding />
</template>

<script setup lang="ts">
import type { IPartner } from '~/types'

interface IPartnerProps {
  partner: IPartner
}

const props = defineProps<IPartnerProps>()
</script>

<style lang="sass" scoped>

</style>