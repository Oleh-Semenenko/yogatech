<template>
  <div class="benefits section blue">
    <div class="container">
      <div class="benefits__inner">
        <BaseFeaturesList :features="cooperationBenefits" />

        <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dicta voluptate, molestiae deserunt rerum tempore fugiat, iste laudantium sunt, quisquam est! Voluptatum enim architecto perferendis ea? Cupiditate reprehenderit animi rem!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IFeature } from '~/types';
const cooperationBenefits: IFeature[] = [
{
  id: 1,
  title: 'Продавай свої курси',
  text: 'Ми об’єднюємо викладачів та любителів йоги',
  color: 'var(--orange)'
},
{
  id: 2,
  title: 'Виступай на сцені',
  text: 'Курси, література, менторство і багато іншого',
  color: 'var(--blue-color)'
},
{
  id: 3,
  title: 'Будь ментором',
  text: 'Ми допоможемо знайти свій шлях та дамо проявити себе',
  color: 'var(--gray-color)'
}
]
</script>

<style lang="sass" scoped>

</style>