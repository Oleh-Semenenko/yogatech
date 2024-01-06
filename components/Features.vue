<template>
  <div class="features section-blue">
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

.feature
  position: relative
  padding-top: 90px
  padding-left: 44px
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

.feature__title
  font-size: 40px
  font-weight: 700
  margin-bottom: 64px

.feature__text
  font-size: 20px
  font-weight: 400
</style>
