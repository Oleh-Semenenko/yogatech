<template>
  <div class="contacts section">
    <div class="container">
      <div class="contacts__inner">
        <h2>Контакти</h2>

        <ul class="contacts__list">
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
const contacts = [
  {
    id: 1,
    title: 'Telegram Yogatech',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita consectetur qui doloremque molestiae dicta autem tenetur delectus error porro, iusto suscipit repellendus saepe laboriosam quasi cupiditate eius! Incidunt, alias!',
    photo: '',
    link: '#',
    linksText: 'Перейти в Телеграм'
  },
  {
    id: 2,
    title: 'Instagram Mike YogaTech',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita consectetur qui doloremque molestiae dicta autem tenetur delectus error porro, iusto suscipit repellendus saepe laboriosam quasi cupiditate eius! Incidunt, alias!',
    photo: '',
    link: '#',
    linksText: 'Перейти в Інстаграм'
  },
  {
    id: 3,
    title: 'Telegram Засновника',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita consectetur qui doloremque molestiae dicta autem tenetur delectus error porro, iusto suscipit repellendus saepe laboriosam quasi cupiditate eius! Incidunt, alias!',
    photo: '',
    link: '#',
    linksText: 'Написати Михайлу'
  }
]
</script>

<style lang="sass" scoped>
.contacts
  position: relative
  padding-bottom: 120px

  &::before
    content: ""
    position: absolute
    bottom: 0
    right: 0
    width: 56px
    height: 440px
    background: var(--orange)
    z-index: 1
  &::after
    content: ""
    position: absolute
    bottom: 0
    right: 0
    width: calc( 440px + 56px )
    height: 56px
    background: var(--orange)
    z-index: 2
.contacts__list
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 52px
</style>
