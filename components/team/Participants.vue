<template>
  <div class="team section">
    <div class="container">
      <div class="team__inner">
        <h2 class="team__title">Наша команда</h2>

        <div class="team__swiper">
          <Icon
            name="mdi-light:chevron-left"
            class="prev-btn"
            width="54"
            height="54"
          />
          <Swiper
            :modules="[SwiperNavigation, SwiperPagination]"
            :slides-per-view="4"
            :space-between="52"
            :centered-slides="false"
            :pagination="{ clickable: true }"
            :navigation="{
              enabled: true,
              nextEl: '.next-btn',
              prevEl: '.prev-btn'
            }"
            :breakpoints="{
              1920: {
                slidesPerView: 4,
                spaceBetween: 52
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 32
              }
            }"
          >
            <SwiperSlide
              class="team__swiper-item"
              v-for="teammate in teammates"
              :key="teammate.id"
            >
              <TeamTeammate :participant="teammate" />
            </SwiperSlide>
          </Swiper>
          <Icon
            name="mdi-light:chevron-right"
            class="next-btn"
            width="54"
            height="54"
          />

          <div class="about-us__slider-pagination">
            <div class="about-us__slider-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const teammates = [
  {
    id: 1,
    img: '/images/banda.png',
    name: 'Михайло Ахекян',
    description:
      'засновник YogaTech, голова наукового відділу асоціації, лектор, викладач йоги, ментор'
  },
  {
    id: 2,
    img: '/images/banda.png',
    name: 'Міріам Хмарська',
    description:
      'голова культурного відділу асоціацї,  викладачка йоги, менеджер'
  },
  {
    id: 3,
    img: '/images/banda.png',
    name: 'Катерина Ковальчук',
    description: 'голова відділу маркетингу асоціації, бізнес-коуч, ментор'
  },
  {
    id: 4,
    img: '/images/banda.png',
    name: 'Дарт Вейдер',
    description: 'орцукпук окцапшукопшу пткоашоукопщук плдоукшоауко'
  },
  {
    id: 5,
    img: '/images/miha.png',
    name: 'Михайло Ахекян',
    description:
      'засновник YogaTech, голова наукового відділу асоціації, лектор, викладач йоги, ментор'
  },
  {
    id: 6,
    img: '/images/miha.png',
    name: 'Міріам Хмарська',
    description:
      'голова культурного відділу асоціацї,  викладачка йоги, менеджер'
  },
  {
    id: 7,
    img: '/images/miha.png',
    name: 'Катерина Ковальчук',
    description: 'голова відділу маркетингу асоціації, бізнес-коуч, ментор'
  },
  {
    id: 8,
    img: '/images/miha.png',
    name: 'Дарт Вейдер',
    description: 'орцукпук окцапшукопшу пткоашоукопщук плдоукшоауко'
  }
]
</script>

<style lang="sass" scoped>
.team
  position: relative
.team__swiper
  display: flex
  align-items: center
  margin: 0 auto

.team__swiper-item
  width: 365px
</style>
