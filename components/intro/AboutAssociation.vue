<template>
  <div class="about-association section">
    <div class="container">
      <div class="about-association__inner">
        <h2 class="about-association__inner-title">Про YogaTech</h2>
        <div class="about-association__inner-wrapper">
          <img src="/images/hero.png" width="435" height="495" />
          <div class="about-association__inner-content">
            <p class="about-association__inner-text">
              Останні сто років у йозі процвітав індивідуалізм, де кожен
              викладач прагнув створити школу імені себе. Однак понад 5000 років
              йога існувала, як цілісна наука, тож на нашу думку, настав час
              згадати про наше спільне коріння. Ми закликаємо йогів усіх
              традицій та напрямків до об'єднання, конструктивного діалогу та
              обміну досвідом!
            </p>
            <p class="about-association__inner-text--second">
              Також, однією із наших цілей, є виведення йоги із площини фітнесу
              та повернення йозі статусу науки, техніки якої логічні, зрозумілі
              та можуть бути з легкістю впроваджені у життя.
            </p>

            <button class="btn">Дізнатись більше</button>
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
    grid-template-columns: 1fr 1fr
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
  justify-content: space-between

  @include m
    grid-column: 1
    gap: 20px

  & .btn
    align-self: end

.about-association__inner-text--second
  flex-grow: 1
  margin-top: 20px
</style>
