<template>
  <div class="faq section">
    <div class="container">
      <div class="faq__inner">
        <div>
          <h2 class="faq__inner__title">FAQ</h2>

          <div class="accordion">
            <div
              v-for="{ id, title, open, content } in panels"
              :key="id"
              class="accordion-panel"
            >
              <div class="accordion-header" @click="togglePanel(id)">
                <span class="accordion-header__title">{{ title }}</span>
                <span
                  :class="{
                    'cross-icon': open,
                    'plus-icon': !open
                  }"
                ></span>
              </div>
              <div v-if="open" class="accordion-content">
                {{ content }}
              </div>
            </div>
          </div>
        </div>

        <img src="/images/placeholder.png" width="642" class="faq__inner-img"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const panels = ref([
  {
    id: 1,
    title: 'Що робити, якщо я хочу відмінити реєстрацію?',
    content:
      'З питань відміни реєсрація або переносу коштів на іншу подію, будь ласка, зверніться до нашого менеджера за номером 394090294',
    open: false
  },
  {
    id: 2,
    title: 'Чи повертаються кошти у разі відміни реєстрації?',
    content:
      'З питань відміни реєсрація або переносу коштів на іншу подію, будь ласка, зверніться до нашого менеджера за номером 394090294',
    open: false
  },
  {
    id: 3,
    title: 'Що робити, якщо я хочу відмінити реєстрацію?',
    content:
      'З питань відміни реєсрація або переносу коштів на іншу подію, будь ласка, зверніться до нашого менеджера за номером 394090294',
    open: false
  }
])

const togglePanel = (id: number) => {
  panels.value.forEach((panel) => {
    if (panel.id === id) {
      panel.open = !panel.open
    } else {
      panel.open = false
    }
  })
}
</script>

<style lang="sass" scoped>
.faq__inner
  display: grid
  grid-template-columns: 1fr 642px
  justify-content: space-between
  gap: 52px
  @include xl
    grid-template-columns: 1fr 500px
  @include xl
    grid-template-columns: 1fr 400px

  @include l
    grid-template-columns: 1fr

.faq__inner__title
  @include m
    margin-bottom: 20px
.accordion
  width: 100%

.accordion-panel
  border-bottom: 1px solid #ccc
  margin-bottom: 5px
.accordion-header
  position: relative
  font-size: 28px
  padding: 28px 10px
  cursor: pointer
  display: flex
  align-items: center
  justify-content: space-between
  @include l
    font-size: 24px
    padding: 24px 10px
  @include m
    font-size: 20px
    padding: 16px 10px

  & .accordion-header__title
    width: 80%

.accordion-content
  font-size: 24px
  padding: 10px
  display: block
  background-color: var(--white)
  @include l
    font-size: 20px
  @include m
    padding: 8px
    font-size: 18px

.cross-icon,
.plus-icon
  position: absolute
  top: 25%
  right: 10px
  width: 44px
  height: 44px
  background-size: contain
  background-repeat: no-repeat
  cursor: pointer

  @include m
    width: 32px
    height: 32px
    top: 25%

.cross-icon
  background-image: url('/images/plus.svg')
  transform: rotate(45deg)

.plus-icon
  background-image: url('/images/plus.svg')

.faq__inner-img
  width: 100%
  height: auto
  @include l
    display: none
</style>
