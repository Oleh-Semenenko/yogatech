<template>
  <div class="projects section">
    <div class="container">
      <div class="projects__inner">
        <h2 class="projects__title">Про проекти</h2>

        <ul class="projects__list">
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
interface IProject {
  id: number
  title: string
  description: string
  photo: string
  link: string
  linksText: string
}
const projects: IProject[] = [
  {
    id: 1,
    title: 'Конференція',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita consectetur qui doloremque molestiae dicta autem tenetur delectus error porro, iusto suscipit repellendus saepe laboriosam quasi cupiditate eius! Incidunt, alias!',
    photo: '',
    link: '/fest',
    linksText: 'Дізнатись більше'
  },
  {
    id: 2,
    title: 'Курси',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita consectetur qui doloremque molestiae dicta autem tenetur delectus error porro, iusto suscipit repellendus saepe laboriosam quasi cupiditate eius! Incidunt, alias!',
    photo: '',
    link: '/courses',
    linksText: 'Дізнатись більше'
  },
  {
    id: 3,
    title: 'Книга',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita consectetur qui doloremque molestiae dicta autem tenetur delectus error porro, iusto suscipit repellendus saepe laboriosam quasi cupiditate eius! Incidunt, alias!',
    photo: '',
    link: '/shop',
    linksText: 'Дізнатись більше'
  }
]
</script>

<style lang="sass" scoped>
.projects__list
  width: 100%
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr))
  gap: 52px
  @include xxl
    gap: 40px
  @include ll
    gap: 32px
</style>
