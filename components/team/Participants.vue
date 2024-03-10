<template>
  <div class="team">
    <div class="container">
      <div class="team__inner">
        <h2 class="team__title">Наша команда</h2>

        <div class="team__swiper">
          <Icon
            name="mdi-light:chevron-left"
            class="team__swiper-prev-btn"
            width="54"
            height="54"
          />
          <Swiper
            :modules="[SwiperNavigation, SwiperPagination]"
            :centered-slides="true"
            :slides-per-view="4"
            :pagination="{ clickable: true }"
            :loop="true"
            :navigation="{
              enabled: true,
              nextEl: '.team__swiper-next-btn',
              prevEl: '.team__swiper-prev-btn'
            }"
          >
            <SwiperSlide class="team__swiper-item">
              <TeamTeammate
                v-for="teammate in teammates"
                :key="teammate.id"
                :teammate="teammate"
              />
            </SwiperSlide>
          </Swiper>
          <Icon
            name="mdi-light:chevron-right"
            class="team__swiper-next-btn"
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
    img: '',
    name: 'Михайло Ахекян',
    description:
      'засновник YogaTech, голова наукового відділу асоціації, лектор, викладач йоги, ментор'
  },
  {
    id: 2,
    img: '',
    name: 'Міріам Хмарська',
    description:
      'голова культурного відділу асоціацї,  викладачка йоги, менеджер'
  },
  {
    id: 3,
    img: '',
    name: 'Катерина Ковальчук',
    description: 'голова відділу маркетингу асоціації, бізнес-коуч, ментор'
  },
  {
    id: 4,
    img: '',
    name: 'Дарт Вейдер',
    description: 'орцукпук окцапшукопшу пткоашоукопщук плдоукшоауко'
  }
]
</script>

<style lang="sass" scoped></style>
