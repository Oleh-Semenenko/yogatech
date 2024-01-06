<template>
  <div class="youtube section-blue">
    <div class="container">
      <div class="youtube__inner">
        <div class="youtube__inner-text">
          <h2>Youtube</h2>
          <div class="youtube__inner-text--first">Нові відео</div>
          <div class="youtube__inner-text--second">ЩОПОНЕДІЛКА</div>

          <div class="youtube__inner-text--bottom">
            <div>
              <div class="big">100%</div>
              <div class="small">корисної інформації</div>
            </div>
            <div>
              <span class="small">більше </span>
              <span class="big">150</span>
              <div class="small">відео на каналі</div>
            </div>
          </div>
        </div>

        <div class="youtube__swiper">
          <Swiper
            :modules="[SwiperNavigation, SwiperPagination]"
            :centered-slides="true"
            :slides-per-view="1"
            navigation
            :pagination="{ clickable: true }"
            :loop="true"
          >
            <SwiperSlide class="youtube__swiper-item"
              ><iframe
                width="773"
                height="424"
                src="https://www.youtube.com/embed/ZM3CBfx_IK8?si=QsXbf4fFw3ifFA_q"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe
            ></SwiperSlide>
            <SwiperSlide class="youtube__swiper-item"
              ><iframe
                width="773"
                height="424"
                src="https://www.youtube.com/embed/WcVhZmPqiNc?si=9aYOl8g7us8mzMfm"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe
            ></SwiperSlide>
            <SwiperSlide class="youtube__swiper-item"
              ><iframe
                width="773"
                height="424"
                src="https://www.youtube.com/embed/Mqa60lgJ1Bk?si=VaGJ3tN-N7CyoIEt"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe
            ></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.youtube__inner
  display: flex
  gap: 60px
  justify-content: space-between

.youtube__inner-text
  width: 100%

.youtube__inner-text--first
  font-size: 40px
  margin-bottom: 18px

.youtube__inner-text--second
  font-size: 64px
  font-family: 'Tinos', sans-serif
  font-style: italic
  text-align: right
  font-weight: 700
  margin-bottom: 60px

.youtube__inner-text--bottom
  display: flex
  justify-content: space-between
  padding-top: 60px
  border-top: 1px solid var(--primary-text-color)
  font-size: 40px
  font-weight: 400

  & .big
    font-size: 64px
    font-style: italic
    font-weight: 700

.youtube__swiper
  width: 773px
  margin-top: 52px

.youtube__swiper-item
  width: 500px

  & iframe
    border-radius: 20px
</style>
