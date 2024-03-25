<template>
  <div class="section blue">
    <div class="container">
      <div class="person__inner">
        <div class="person__swiper">
          <Swiper
            :modules="[SwiperPagination, SwiperAutoplay]"
            :centered-slides="true"
            :slides-per-view="1"
            :autoplay="{
              delay: 4000
            }"
            :pagination="{ clickable: true }"
            :loop="true"
          >
            <SwiperSlide class="benefits__swiper-item">
              <img src="/images/miha.png" width="922" height="627" />
            </SwiperSlide>
            <SwiperSlide class="benefits__swiper-item"
              ><img src="/images/miha.png" width="922" height="627" />
            </SwiperSlide>
            <SwiperSlide class="benefits__swiper-item"
              ><img src="/images/miha.png" width="922" height="627" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div>
          <h2>{{ teammate.name }}</h2>
          <p>
            Михайло Ахекян — сертифікований викладач (RYT-200) з Кундаліні-йоги
            і Девдан-йоги, має більше 8 років досвіду особистої практики, різних
            навчань і посвячень. Проводить інтенсивні курси по медитації для ІТ
            і великого бізнесу. Навчався в провідних викладачів: Наталі Дубенко,
            Сергія Філімонова, співпрацював з Марією Федосеєвою. Провів понад 6
            онлайн курсів по медитації і пранаямі, спікер міжнародних фестивалів
            і конференцій. Проводить практичні курси та лекції на викладацьких
            семінарах RYT-100 і RYT-200.
          </p>
          <h3 class="person__slogan">
            «Йога — це не спорт! У спорті ми перемагаємо інших, повинні бути
            кращими за всіх. Швидше, вище, сильніше! Тоді як йога, якщо її
            викладають правильно, а не як фітнес, дає людині більше.»
          </h3>
        </div>
      </div>
    </div>
  </div>

  <div class="person__intro section">
    <div class="container">
      <BaseMandala />
      <iframe
        class="person__intro-video"
        width="772"
        height="424"
        src="https://www.youtube.com/embed/ZM3CBfx_IK8?si=QsXbf4fFw3ifFA_q"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>

  <div class="section blue">
    <div class="container">
      <h2>Шлях Михайла в йозі</h2>
      <p v-html="teammate.description" class="person__about"></p>
    </div>
  </div>

  <div class="section">
    <div class="container">
      <h2>Дивитись ще</h2>
      <TeamList :teammates="othersTeammates"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const { getOneTeammate, getTeammatesExceptCurrent } = useTeammates()
const route = useRoute()
const teammate = getOneTeammate(route.params.slug as string)
const othersTeammates = getTeammatesExceptCurrent(route.params.slug as string)
</script>

<style lang="sass" scoped>
.person__inner
  display: flex
  gap: 52px

  @include xl
    gap: 32px
  @include l
    gap: 12px
    flex-direction: column

.person__swiper
  width: 922px
  @include xl
    width: 640px
  @include l
    align-self: center
  @include m
    width: 100%

.person__slogan
  margin-top: 20px
  @include l
    margin-top: 12px
  @include m
    margin-top: 8px

.person__intro .container
  position: relative

.person__intro-video
  display: block
  margin: 0 auto
  width: 782px
  height: 429px
  @include xl
    width: 544px
    height: 333px
  @include l
    width: 500px
    height: 300px
  @include m
    width: 80%
    height: 220px
  @include s
    width: 100%
    height: 180px

.person__about
  white-space: pre-wrap
</style>
