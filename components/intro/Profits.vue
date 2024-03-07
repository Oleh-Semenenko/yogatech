<template>
  <div class="profits section blue">
    <div class="container">
      <div class="profits__inner">
        <h2 class="profits__title">Чим ми можемо бути вам корисні</h2>

        <div class="mandala-wrapper">
          <img
            src="/images/mandala_gray.png"
            width="230"
            height="230"
            class="mandala-1"
          />
          <img
            src="/images/mandala_dark.png"
            width="230"
            height="230"
            class="mandala-2"
          />
        </div>

        <div class="profits__content">
          <ul class="cards__list profits__list">
            <BaseCard
              v-for="profit in profits"
              :key="profit.id"
              :data="profit"
              withoutFooter
            ></BaseCard>
          </ul>

          <p>
            І звісно, кожен із вас може бути учасником наших конференцій, за
            наявності сертифікату RYT-200 від будь-якої школи йоги. Рівно як у
            клуб автомобілістів не беруть без водійського посвідчення, наша
            асоціація створена для викладачів і це необхідно підтвердити
            документально, задля вашої безпеки та комфорту оточуючих
          </p>
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
.profits__inner
  position: relative
.profits__content
  margin: 0 auto
  max-width: 80%
  display: flex
  flex-direction: column
  gap: 60px

  @include l
    gap: 40px

  @include l
    gap: 24px

  @include m
    max-width: 100%

.profits__list
  z-index: 50
  @include m
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))

.mandala-wrapper
  width: 400px
  display: flex
  position: absolute
  top: 50%
  left: -10%

.mandala-1
  animation: spin-1 30s linear infinite
  transform-origin: center

.mandala-2
  opacity: 0.7
  animation: spin-2 30s linear infinite
  transform-origin: center
  position: absolute
  left: 39%
  bottom: 65%

@keyframes spin-1
  from
    transform: rotate(0deg)
  to
    transform: rotate(360deg)

@keyframes spin-2
  from
    transform: rotate(25deg)
  to
    transform: rotate(-335deg)
</style>
