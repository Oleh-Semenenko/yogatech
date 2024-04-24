<template>
  <div>
    <div class="shop-hero section">
      <div class="container">
        <h1>Мрія дає нуль,<br />якщо її не зробити життям.</h1>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <h2>Курси</h2>
        <div class="courses__levels">
          <span>Рівні складності:</span>
          <ul class="courses__levels-list">
            <li v-for="{ id, icon, value } in levels" :key="id">
              <img :src="icon" width="32" height="32" alt="Course level icon" />
              – {{ value }}
            </li>
          </ul>
        </div>
        <ul class="cards__list products__list">
          <BaseGoodsCard
            v-for="course in courses"
            :key="course.id"
            :product="course"
            :group="ProductGroup.COURSE"
          />
        </ul>
      </div>
    </div>

    <div class="section mentorship blue">
      <div class="container">
        <h2>Менторство</h2>
        <p>
          Михайло Ахекян, ментор асоціації:“Коли я лише починав займатися йогою,
          у моєму житті не було людини, яка могла би мені допомогти і провести
          мене у світ йоги. Я не знав у кого краще навчатися, як говорити з
          роботодавцями, яку ціну ставити за свої послуги, які існують
          сертифікаційні системи та способи монетизації моїх знань, як потрапити
          викладачем на йога-фестиваль, організувати власну подію, зрозуміти
          свою сильну сторону, почати будувати селф-бренд, набрати свою
          аудиторію.<br />
          З усім цим мені довелось працювати самостійно і я прекрасно розумію,
          що маючи провідника у цьому напрямку, я міг би суттєво швидше і з
          меншими зусиллями опинитись там, де я є зараз. Тому я пропоную вам
          власні послуги у ролі ментора”.
        </p>
        <p class="mentorship__text-2">
          У пакет вартістю 5000 грн входить 4 персональні зустрічі протягом
          місяця, на яких ми ставимо чіткі цілі, працюємо над вашими кейсами та
          досягаємо якісно нових результатів.
        </p>
        <div class="mentorship__footer">
          <p>
            Для участі у менторській програмі заповніть, будь ласка, заявку і ми
            з вами зв’яжемось!
          </p>
          <NuxtLink to="https://forms.gle/CtWM1CpQkXp51JbS6" target="_blank" class="btn orange-type">Заповнити заявку</NuxtLink>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <h2>Продукти</h2>
        <ul class="cards__list products__list">
          <BaseGoodsCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            :group="ProductGroup.PRODUCT"
          />
        </ul>
      </div>
    </div>

    <ShopSection
      title="Навчання “Курс підготовки викладачів RYT1000”"
      text="Ультимативний курс для інструкторів, що у 5 разів більший за стандартну міжнародну сертифікацію у 200 годин! Пориньте у світ йоги та дослідіть її глибини у затишних Карпатах!"
      link="/ryt1000"
      blue
      withBtn
    />

    <ShopSection
      title="Конференція"
      :text="`Конференція йога-інструкторів - це проект, який виношувався не один рік. На відміну від фестивалей, куди може приїхати будь-хто і де викладачі мають зважати на досить велике розшарування у аудиторії, конференція дає можливість глибше поринути в тему, розкрити її та говорити про більш складні та глибокі речі, використовуючи відповідну термінологію та не витрачаючи надмірну кількість часу на її пояснення.<br />Разом із цим, це - простір людей, що горять йогою та прагнуть постійного самовдосконалення. Де можна знайти однодумців, здобути нові зв’язки, створити колаборації та зростати разом.`"
      link="/fest"
      withBtn
    />
  </div>
</template>

<script setup lang="ts">
import { ProductGroup } from '~/types'

const { products, courses } = useShop()
const levels = [
  { id: 1, icon: '/images/gear-light.svg', value: 'легкий (лекційні матеріали не потребують попередньої обізнаності у темі, а весь курс можна засвоїти не виконуючи домашніх завдань),' },
  { id: 2, icon: '/images/gear-middle.svg', value: 'середній (лекційні матеріали не потребують особливої обізнаності у темі, однак для засвоєння курсу необхідно виконувати домашні завдання),' },
  { id: 3, icon: '/images/gear-hard.svg', value: 'складний (лекційні матеріали потребують обізнаності у темі, а для засвоєння курсу необхідно виконувати домашні завдання).' }
]
</script>

<style lang="sass" scoped>
.shop-hero
  padding-top: 40px
  padding-bottom: 40px

  & h1
    margin-top: 0
  @include l
    display: flex
    flex-direction: column-reverse
    gap: 32px
  @include m
    gap: 24px

.shop-swiper__item
  width: 100%
  height: 100%

.shop-swiper__img
  width: 100%
  height: 100%
  object-fit: cover

.mentorship__text-2
  margin-top: 12px

.mentorship__footer
  display: flex
  flex-direction: column
  gap: 12px
  margin-top: 40px
  & a
    align-self: end

.courses__levels
  margin-bottom: 24px
  display: flex
  gap: 8px
  @include m
    margin-bottom: 12px
    flex-direction: column
    align-items: center
  
  & span
    flex-shrink: 0

.courses__levels-list
  display: flex
  flex-direction: column
  gap: 8px
  @include xl
    gap: 4px

  & li
    display: flex
    align-items: center
    gap: 4px
    @include xl
      align-items: start
</style>
