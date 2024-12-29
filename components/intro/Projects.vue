<template>
  <div class="projects section blue">
    <div class="container">
      <div class="projects__inner">
        <h2 class="projects__title">Наші проєкти</h2>

        <ul class="cards__list">
          <BaseCard
            v-for="project in projects"
            :key="project.id"
            :data="project"
            root-element="li"
          ></BaseCard>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ICard } from '~/types';

const projects: ICard[] = [
  // TEMPORARY: removed RYT-1000 course
  // {
  //   id: 1,
  //   title: 'Викладацький курс RYT-1000',
  //   description:
  //     "Перетворіть вашу любов до йоги в успішну кар'єру  з нашим провідним курсом. Ваш успіх починається тут.",
  //   icon: 'ph:graduation-cap-thin',
  //   link: '/ryt1000',
  //   linksText: 'Дізнатись більше'
  // },
  {
    id: 2,
    title: 'Авторські курси',
    description:
      'Доторкніться до своєї внутрішньої сили через йогу. Найкращі викладачі України поділяться з вами своїми знаннями.',
    icon: 'ph:brain-thin',
    link: '/shop',
    linksText: 'Дізнатись більше'
  },
  {
    id: 3,
    title: 'Менторство для йога-інструкторів',
    description:
      'Відкрийте свій потенціал як викладач йоги. З нами ваша мрія стане реальністю.',
    icon: 'ph:users-thin',
    link: '/shop',
    linksText: 'Дізнатись більше'
  }
];
</script>

<style lang="sass" scoped></style>
