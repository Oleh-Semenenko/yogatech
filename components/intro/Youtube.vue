<template>
  <div class="youtube section blue">
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
  display: grid
  grid-template-columns: auto 1fr
  gap: 60px
  justify-content: space-between
  @include xxl
    gap: 52px
  @include xl
    gap: 44px
    grid-template-columns: 1fr
    grid-template-rows: 1fr 1fr
  @include l
    gap: 32px
  @include m
    grid-template-columns: 100%
    gap: 24px
.youtube__inner-text
  width: 100%

.youtube__inner-text--first
  font-size: 40px
  margin-bottom: 18px
  @include xl
    font-size: 32px
  @include l
    font-size: 24px

.youtube__inner-text--second
  font-size: 64px
  font-family: 'Tinos', sans-serif
  font-style: italic
  text-align: right
  font-weight: 700
  margin-bottom: 60px
  @include xxl
    font-size: 60px
  @include xl
    margin-bottom: 40px
    font-size: 56px
  @include ll
    font-size: 52px
  @include l
    margin-bottom: 28px
    font-size: 40px
  @include m
    font-size: 32px

.youtube__inner-text--bottom
  display: flex
  justify-content: space-between
  gap: 20px
  padding-top: 60px
  border-top: 1px solid var(--primary-text-color)
  font-size: 36px
  font-weight: 400
  @include xl
    font-size: 32px
  @include l
    font-size: 24px
    gap: 12px

  & .big
    font-size: 60px
    font-style: italic
    font-weight: 700
    @include xl
      font-size: 56px
    @include ll
      font-size: 52px
    @include l
      font-size: 40px
    @include m
      font-size: 32px

.youtube__swiper
  justify-self: center
  width: 700px
  margin-top: 52px
  @include xxl
    width: 650px
  @include xl
    margin-top: 0
    width: 773px
  @include l
    width: 650px
  @include m
    width: 550px
  @include ms
    width: 100%


.youtube__swiper-item
  position: relative
  width: 100%
  padding-bottom: 56.25%
  overflow: hidden

  & iframe
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    border-radius: var(--primary-border-radius)
</style>
