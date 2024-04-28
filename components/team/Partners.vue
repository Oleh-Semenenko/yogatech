<template>
  <div class="section blue">
    <div class="container">
      <h2>Наші партнери</h2>

      <TeamPageList :list-data="partners" :type="ListItemType.PARTNER" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IPartner, ListItemType, LinkColor } from '~/types'
const partners: IPartner[] = [
  {
    id: 1,
    img: '/images/partners/cyf.png',
    title: 'Carpathian Yoga Fest',
    description: [
      'Найбільший фестиваль йоги в Україні',
      'Кращі вчителі йоги, крута програма занять, палітра стилів',
      'Масштабне свято йоги в первозданній красі Карпат',
      'Комфортний, здоровий, цікавий відпочинок в колі однодумців'],
    promocodeText: "Знижка 10% на квиток на фестиваль з нашим промокодом",
    promocode: 'yogatech',
    link: 'https://yogafest.com.ua/uk/carpathian-yoga-fest-2022-izki-2/',
    linkColor: LinkColor.BLUE,
    linksText: 'Дізнатись більше'
  },
  {
    id: 2,
    img: '/images/partners/yoga_planet.png',
    title: 'YogaPlanet',
    description: [
      'Магазин товарів для йоги і медитації, фітнесу, пілатесу',
      'Килимки для йоги, аксесуари, одяг, сувеніри, харчування, аюрведичні препарати, косметика, книги',
      'Висока якість, відмінний сервіс'
    ],
    promocodeText: "Знижка 10% на будь-який товар з нашим промокодом",
    promocode: 'yogatech',
    link: 'https://yogaplanet.com.ua/ua/',
    linkColor: LinkColor.BLUE,
    linksText: 'Дізнатись більше'
  },
  {
    id: 3, img: '/images/partners/rao_wear.png', title: 'Rao Wear', description: ['Магазин одягу та шкарпеток - ваш надійний спутник у світі йоги, свободи, подорожей та самовираження',
      'Команда бренду розробляє вироби, що відповідають вашим потребам',
      'Висока якість, відмінний сервіс',
    ],
    promocodeText: "Знижка 10% на будь-який товар з нашим промокодом",
    promocode: 'yogatech',
    link: 'https://raowear.wayforpay.shop/',
    linkColor: LinkColor.BLUE,
    linksText: 'Дізнатись більше'
  },
  {
    id: 4, img: '/images/partners/fram.png', title: 'Fram Equipment', description: ['Український виробник туристичного спорядження',
      'Вся продукція розробляється досвідченими туристами і альпіністами та тестується в найсуворіших умовах',
      'Швидка доставка, гарантія, гнучкі умови оплати',
    ],
    promocodeText: "Знижка 10% на будь-який товар з нашим промокодом",
    promocode: 'yogatech',
    link: 'https://fram-equip.com/',
    linkColor: LinkColor.BLUE,
    linksText: 'Дізнатись більше'
  }
]
</script>