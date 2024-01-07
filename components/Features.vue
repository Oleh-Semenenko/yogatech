<template>
  <div class="features section blue">
    <div class="container">
      <div class="features__inner">
        <ul class="features__list">
          <li
            v-for="{ id, title, text, color } in features"
            :key="id"
            class="feature"
            :style="{ '--feature-background-color': color }"
          >
            <p class="feature__title">{{ title }}</p>
            <p class="feature__text">{{ text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const features = ref([
  {
    id: 1,
    title: 'Пізнавай філософію',
    text: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, dolore incidunt. Sit nisi repellendus, ad iste id accusamus debitis blanditiis ipsam nesciunt, quisquam vel nihil labore autem numquam quibusdam qui?',
    color: 'var(--orange)'
  },
  {
    id: 1,
    title: 'Пізнавай філософію',
    text: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, dolore incidunt. Sit nisi repellendus, ad iste id accusamus debitis blanditiis ipsam nesciunt, quisquam vel nihil labore autem numquam quibusdam qui?',
    color: 'var(--blue-color)'
  },
  {
    id: 1,
    title: 'Пізнавай філософію',
    text: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, dolore incidunt. Sit nisi repellendus, ad iste id accusamus debitis blanditiis ipsam nesciunt, quisquam vel nihil labore autem numquam quibusdam qui?',
    color: 'var(--gray-color)'
  }
])
</script>

<style lang="sass" scoped>
.features__list
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 90px
  @include xxl
    gap: 70px
  @include xl
    gap: 50px
  @include l
    gap: 28px

.feature
  position: relative
  padding-top: 90px
  padding-left: 44px
  @include xxl
    padding-top: 60px
  @include xl
    padding-top: 40px
    padding-left: 36px
  @include l
    padding-top: 32px
    padding-left: 28px
  &::before
    content: ''
    display: block
    width: 164px
    height: 164px
    border-radius: 50%
    background-color: var(--feature-background-color)
    position: absolute
    top: 0
    left: 0
    z-index: -10

    @include xxl
      width: 159px
      height: 150px
    @include xl
      width: 120px
      height: 120px
    @include l
      width: 80px
      height: 80px

.feature__title
  font-size: 40px
  font-weight: 700
  margin-bottom: 44px
  @include xl
    font-size: 32px
    margin-bottom: 32px
  @include l
    font-size: 24px
    margin-bottom: 24px

.feature__text
  font-size: 20px
  font-weight: 400

  @include l
    font-size: 18px
</style>
