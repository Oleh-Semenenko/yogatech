<template>
  <div class="contacts section">
    <div class="container">
      <div class="contacts__inner">
        <h2>Контакти</h2>

        <ul class="cards__list">
          <BaseCard
            v-for="contact in contacts"
            :key="contact.id"
            :data="contact"
          ></BaseCard>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ICard, LinkColor } from '~/types'

const contacts: ICard[] = [
  {
    id: 1,
    title: 'Telegram Yogatech',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita consectetur qui doloremque molestiae dicta autem tenetur delectus error porro, iusto suscipit repellendus saepe laboriosam quasi cupiditate eius! Incidunt, alias!',
    photo: '',
    link: '#',
    linksText: 'Зв’язатись',
    linkColor: LinkColor.ORANGE
  },
  {
    id: 2,
    title: 'Instagram Mike YogaTech',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita consectetur qui doloremque molestiae dicta autem tenetur delectus error porro, iusto suscipit repellendus saepe laboriosam quasi cupiditate eius! Incidunt, alias!',
    photo: '',
    link: '#',
    linksText: 'Зв’язатись',
    linkColor: LinkColor.ORANGE
  },
  {
    id: 3,
    title: 'Instagram Mike YogaTech',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita consectetur qui doloremque molestiae dicta autem tenetur delectus error porro, iusto suscipit repellendus saepe laboriosam quasi cupiditate eius! Incidunt, alias!',
    photo: '',
    link: '#',
    linksText: 'Зв’язатись',
    linkColor: LinkColor.ORANGE
  }
]
</script>

<style lang="sass" scoped>
.contacts
  position: relative
</style>
