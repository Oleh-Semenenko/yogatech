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

  <div class="section">
    <div class="container">
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
      <p class="person__about">
        2012 – Розпочав особисту практику; 2018 – Отримав посвяту в Махаріші
        Махеш-йогу; 2018 – Пройшов навчання з Кундаліні-йоги у традиції Карта
        Сінгха (Марія Федосєєва); 2018 – Пройшов “Йога-інтенсив” (В'ячеслав
        Гуцалюк); 2019 – Здобув сертифікат у міжнародній школі вчителів
        Кундаліні-йоги K.R.I.Y.A. (Сергій Філімонов та Наталія Дубенкова); 2019
        – Створив авторський курс "Медитація 2,0"; 2019 – Співведучий курсу для
        викладачів Кундаліні-йоги (Марія Федосєєва); 2019 – 2020 – Лектор на
        таких фестивалях як "Аватар", "Кундаліні-йога", "Кульбаба"; 2019 – 2020
        - Отримав сертифікацію у школі Девдан-йоги (Олена Бакай) та співведучий
        викладач на курсі школи Девдан протягом двох років; 2019-2022 - Проводив
        майстер-класи з йоги та дихальної гімнастики для студентів Українського
        Католицького Університету; 2020 – Як інструктор, ознайомився з
        викладацькими програмами шкіл Андрія Сідерського, Андрія Лаппи, Анатолія
        Зенченка; 2020 – Прослухав експрес курс для викладачів від Московського
        центру Аштанга- йоги (Агапкін, Бабкін); 2020 – Спікер та співорганізатор
        конференції "Devdan yoga international"; 2020 – Створив авторські курси
        "Інтро в йогу" та "Прана, що воно таке, та як її їдять"; 2021 – Пройшов
        курси гіпнотерапії від американської школи "Омні" (500 годин); 2021 –
        Проводив заняття з йоги на сцені “Захід-фест”; 2021 – 2023 – Спікер на
        Carpathian yoga fest; 2021 – Започаткував ютуб-канал “YogaTech”; 2022 –
        Завершив десяти тижневий курс WimHofMethod; 2022 – Отримав сертифікацію
        з флай-йоги (Катерина Чернова); 2023 – Спікер на “Level up!
        Internacionale yoga conference” (разом з Гуру Гхі та Б’янкою Олівейра);
        2023 – Отримав два сертифікати від “Fitness Academy”; 2023 – Пройшов
        курс “Animal gymnastic yoga” (Костянтин Ронін); 2023 – Зробив низку
        наукових публікацій у журналах, зокрема “Йогатерапія у корекції
        наслідків ПТСР” та “Особливості застосування йогатерапії при травмах
        ЦНС”;
      </p>
    </div>
  </div>

  <div class="section">
    <div class="container">
      <h2>Дивитись ще</h2>
      <div class="team__swiper">
        <Swiper
          :modules="[SwiperPagination, SwiperAutoplay]"
          :slides-per-view="4"
          :space-between="52"
          :centered-slides="false"
          :pagination="{ clickable: true }"
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
          :autoplay="{
            delay: 3000
          }"
        >
          <SwiperSlide
            class="team__swiper-item"
            v-for="teammate in othersTeammates"
            :key="teammate.id"
          >
            <TeamTeammate :participant="teammate" />
          </SwiperSlide>
        </Swiper>
        <div class="about-us__slider-pagination">
          <div class="about-us__slider-pagination"></div>
        </div>
      </div>
      <!-- <div>
        <ul class="team__list-mob">
          <li v-for="teammate in visibleTeammates" :key="teammate.id">
            <TeamTeammate :participant="teammate" />
          </li>
        </ul>

        <button
          v-if="isShowMoreBtn"
          class="team__list-more-btn"
          @click="handleShowMore"
        >
          <span>Дивитись більше</span>
          <Icon name="ph:arrow-down-thin" width="52" height="52" />
        </button>
      </div> -->
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
