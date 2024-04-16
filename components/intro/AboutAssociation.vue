<template>
  <div class="about-association section">
    <div class="container">
      <div class="about-association__inner">
        <h2 class="about-association__inner-title">Про YogaTech</h2>
        <div class="about-association__inner-wrapper">
          <img src="/images/hero.png" width="435" height="495" />
          <div class="about-association__inner-content">
            <p class="about-association__inner-text">
              500 років тому людина за все життя отримувала менше інформації, ніж міститься в одному випуску газети. Кількість стресових обставин також зростає із кожним днем, але біологічно ми залишаємося тою самою людиною, якою були 1000 років тому. Сьогодні наша психіка є надзвичайно вразливою і йога є чи не єдиною панацеєю для сучасного людства, адже лише йога дозволяє глибоко пропрацювати усі складові особистості та зробити культурну поведінку людини  властивою їй.
            </p>
            <p class="about-association__inner-text--second">
              Разом з цим через некомпетентність великої кількості викладачів, яку вони прикривають традиціоналізмом,  більшість сучасного світу не рахується із йогою як з наукою і нехтує її надбанням, сприймаючи її як гімнастику чи фітнес.
            </p>
            <p class="about-association__inner-text--second">
              Тож головними із наших цілей є: виведення йоги із площини фітнесу та повернення їй заслуженого статусу науки, створення прозорої термінологічної бази та інтеграція авторських напрацювань в об’єднану методологію йоги.
            </p>

            <NuxtLink to="/team" class="btn">Дізнатись більше</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.about-association
  position: relative

.about-association__inner-wrapper
  display: grid
  grid-template-columns: 1fr 1.5fr
  gap: 52px
  @include xl
    gap: 40px
  @include l
    gap: 28px
  @include m
    justify-items: center
    grid-template-columns: 1fr
    gap: 8px

  & img
    @include l
      width: 239px
    @include m
      width: 200px
    @include s
      width: 143px

.about-association__inner-content
  grid-column: 2
  display: flex
  flex-direction: column

  @include m
    grid-column: 1
    gap: 20px

  & .btn
    margin-top: auto
    align-self: end
    @include l
      margin-top: 20px

.about-association__inner-text--second
  margin-top: 20px
  @include m
    margin-top: 0
</style>
