<template>
  <div class="youtube section">
    <div class="container">
      <div class="youtube__inner">
        <div class="youtube__inner-text">
          <h2>Youtube</h2>
          <div class="youtube__inner-text--first youtube__text--big">
            Регулярно
          </div>
          <div class="youtube__inner-text--second youtube__text--small">
            виходять нові відео
          </div>

          <div class="youtube__inner-text--bottom">
            <div>
              <div class="youtube__text--big">100%</div>
              <div class="youtube__text--small">корисної інформації</div>
            </div>
            <div>
              <span class="youtube__text--small">більше </span>
              <span class="youtube__text--big">150</span>
              <div class="youtube__text--small">відео на каналі</div>
            </div>
          </div>
        </div>

        <div class="youtube__swiper">
          <Icon
            name="mdi-light:chevron-left"
            class="prev-btn"
            width="54"
            height="54"
          />
          <Swiper
            :modules="[SwiperNavigation, SwiperPagination]"
            :centered-slides="true"
            :slides-per-view="1"
            :pagination="{ clickable: true }"
            :loop="true"
            :navigation="{
              enabled: true,
              nextEl: '.next-btn',
              prevEl: '.prev-btn'
            }"
          >
            <SwiperSlide class="youtube__swiper-item">
              <iframe
                width="773"
                height="424"
                src="https://www.youtube.com/embed/QAURIxNwiSU?si=rpY1yBJrF3sAIyVg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
            </SwiperSlide>
            <SwiperSlide class="youtube__swiper-item">
              <iframe
                width="773"
                height="424"
                src="https://www.youtube.com/embed/TCB3o-Rog7w?si=qkJUn50EcoEmC9zO"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
            </SwiperSlide>
            <SwiperSlide class="youtube__swiper-item">
              <iframe
                width="773"
                height="424"
                src="https://www.youtube.com/embed/9b6AG0XqGRc?si=3gdypa5sI_W2BHfW"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
            </SwiperSlide>
            <SwiperSlide class="youtube__swiper-item">
              <iframe
                width="773"
                height="424"
                src="https://www.youtube.com/embed/pcHIiXtsD3o?si=9BFfxuszko_rucwp"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
            </SwiperSlide>
            <SwiperSlide class="youtube__swiper-item">
              <iframe
                width="773"
                height="424"
                src="https://www.youtube.com/embed/HUOvQ2e1CW4?si=Lv79RctD8KbTosXJ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
            </SwiperSlide>
            <SwiperSlide class="youtube__swiper-item">
              <iframe
                width="773"
                height="424"
                src="https://www.youtube.com/embed/Mqa60lgJ1Bk?si=0W1_Vijaxeh23Ixe"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
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

<script setup lang="ts"></script>

<style lang="sass" scoped>
.youtube__inner
  display: grid
  grid-template-columns: auto auto
  gap: 60px
  justify-content: space-between
  @include xl
    gap: 52px
  @include xl
    gap: 44px
  @include l
    grid-template-columns: 1fr
    grid-template-rows: auto auto
    justify-items: center
    gap: 32px
    position: relative
  @include m
    grid-template-columns: 100%
    gap: 24px
.youtube__inner-text
  width: 643px
  @include xl
    width: 443px
  @include l
    width: 340px
    & h2
      position: absolute
      left: 0
  @include m
    width: 70%

.youtube__text--big
  font-size: 64px
  font-weight: 700
  @include xl
    font-size: 48px
  @include l
    font-size: 36px
  @include m
    font-size: 24px

.youtube__text--small
  font-size: 32px
  @include xl
    font-size: 24px
  @include l
    font-size: 18px
  @include m
    font-size: 16px

.youtube__inner-text--first
  @include l
    margin-top: 30px

.youtube__inner-text--second
  text-align: right
  margin-bottom: 24px
  @include xl
    margin-bottom: 16px
  @include l
    margin-bottom: 8px

.youtube__inner-text--bottom
  display: flex
  justify-content: space-between
  gap: 20px
  padding-top: 24px
  border-top: 1px solid var(--border-color)
  font-weight: 400
  @include xl
    padding-top: 16px
  @include l
    padding-top: 8px
    gap: 12px

.youtube__swiper
  display: flex
  align-items: center
  justify-self: center
  width: 678px
  @include xl
    width: 618px
  @include l
    width: 534px
  @include m
    width: 100%

.youtube__swiper-item
  position: relative
  width: 100%
  padding-bottom: 56.25%
  overflow: hidden
  pointer-events: none
  & iframe
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    border-radius: var(--primary-border-radius)
</style>
