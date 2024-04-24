<template>
  <BaseCard :data="partner" />
</template>

<script setup lang="ts">
import type { IPartner } from '~/types'

interface IPartnerProps {
  partner: IPartner
}

const props = defineProps<IPartnerProps>()
const { id, img, title, description, promocode, link } = props.partner
</script>

<style lang="sass" scoped>

</style>