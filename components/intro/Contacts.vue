<template>
  <div class="contacts section">
    <div class="container">
      <div class="contacts__inner">
        <h2>Контакти</h2>

        <ul class="cards__list">
          <BaseCard
            v-for="contact in contacts"
            :key="contact.id"
            :data="contact"
          ></BaseCard>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ICard, LinkColor } from '~/types'

const contacts: ICard[] = [
  {
    id: 1,
    title: 'Telegram-канал YogaTech',
    description:
      'Тут ви знайдете багато цікавих дописів на тему йоги, психології, нутріціології та іншого. І звичайно всі публікації містять наукове підґрунтя, а деякі підкріплені посиланнями на дослідження.',
    photo: 'ph:telegram-logo-thin',
    link: 'https://t.me/yogatechua',
    linksText: 'Зв’язатись',
    linkColor: LinkColor.ORANGE,
    contactsType: true
  },
  {
    id: 2,
    title: 'Telegram засновника Михайла Ахекяна',
    description:
      "Ви можете написати Михайлу, якщо у вас є пропозиції або питання по співпраці, навчанню. Але перед тим рекомендуємо все ж таки заповнити заявку у вигляді Google-форми і ми самі зв'яжемось з вами!",
    photo: 'ph:telegram-logo-thin',
    link: 'https://t.me/MikeYogatech',
    linksText: 'Зв’язатись',
    linkColor: LinkColor.ORANGE,
    formBtn: '#',
    contactsType: true
  },
  {
    id: 3,
    title: 'YouTube YogaTech',
    description:
      'Тут ділимось тими знаннями, які вдалося накопичити за роки практики, навчання, пошуку, а також своїм розумінням та баченням йоги як системи. Сподіваємось, що ці матеріали будуть вам корисними.',
    photo: 'ph:youtube-logo-thin',
    link: 'https://www.youtube.com/@Y0GATECH',
    linksText: 'Зв’язатись',
    linkColor: LinkColor.ORANGE,
    contactsType: true
  }
]
</script>

<style lang="sass" scoped>
.contacts
  position: relative
</style>
