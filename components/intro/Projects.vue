<template>
  <div class="projects section blue">
    <div class="container">
      <div class="projects__inner">
        <h2 class="projects__title">Про проекти</h2>

        <ul class="cards__list">
          <BaseCard
            v-for="project in projects"
            :key="project.id"
            :data="project"
          ></BaseCard>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ICard } from '~/types'

const projects: ICard[] = [
  {
    id: 1,
    title: 'Курс для викладачів RYT500',
    description:
      "Перетворіть вашу любов до йоги в успішну кар'єру  з нашим провідним курсом. Ваш успіх починається тут.",
    photo: '',
    link: '/ryt500',
    linksText: 'Дізнатись більше'
  },
  {
    id: 2,
    title: 'Курси',
    description: 'Доторкніться до своєї внутрішньої сили через йогу.',
    photo: '',
    link: '/shop',
    linksText: 'Дізнатись більше'
  },
  {
    id: 3,
    title: 'Менторство',
    description:
      'Відкрийте свій потенціал, як інструктор йоги. З нами ваша мрія стане реальністю.',
    photo: '',
    link: '/shop',
    linksText: 'Дізнатись більше'
  }
]
</script>

<style lang="sass" scoped></style>
