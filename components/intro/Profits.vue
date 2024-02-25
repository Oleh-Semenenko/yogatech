<template>
  <div class="profits section blue">
    <div class="container">
      <div class="profits__inner">
        <h2 class="profits__title">Чим ми можемо бути вам корисні</h2>

        <div class="profits__content">
          <ul class="cards__list profits__list">
          <BaseCard
            v-for="profit in profits"
            :key="profit.id"
            :data="profit"
            withoutFooter
          ></BaseCard>
        </ul>

        <p>І звісно, кожен із вас може бути учасником наших конференцій, за наявності сертифікату RYT-200 від будь-якої школи йоги. Рівно як у клуб автомобілістів не беруть без водійського посвідчення, наша асоціація створена для викладачів і це необхідно підтвердити документально, задля вашої безпеки та комфорту оточуючих</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProfit {
  id: number
  title: string
  description: string
  photo: string
}
const profits: IProfit[] = [
  {
    id: 1,
    title: 'Користь для викладачів-початківців',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita consectetur qui doloremque molestiae dicta autem tenetur delectus error porro, iusto suscipit repellendus saepe laboriosam quasi cupiditate eius! Incidunt, alias!',
    photo: ''
  },
  {
    id: 2,
    title: 'Користь для просунутих викладачів',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita consectetur qui doloremque molestiae dicta autem tenetur delectus error porro, iusto suscipit repellendus saepe laboriosam quasi cupiditate eius! Incidunt, alias!',
    photo: ''
  }
]
</script>

<style lang="sass" scoped>
.profits__content
  margin: 0 auto
  max-width: 80%
  display: flex
  flex-direction: column
  gap: 60px
</style>