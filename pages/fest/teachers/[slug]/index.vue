<template>
  <div class="section">
    <div class="teacher-hero">
      <div class="container">
        <div class="teacher-hero__inner">
          <div></div>
          <div class="teacher-hero__inner-content">
            <h1 class="teacher-hero__title">Михайло Ахекян</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              maiores quam at sed ipsa, tempore consequatur. Neque ea nesciunt
              officia exercitationem, totam possimus! Eos voluptate officiis
              doloribus dolor enim non!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="section blue">
    <div class="container">
      <h2>Про себе</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ad
        ex fuga non sed, dolorum earum laboriosam quis magnam delectus, soluta
        tempora autem dolores sint accusamus officiis doloremque adipisci quasi.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
        voluptatibus cupiditate nemo quidem officiis possimus, aut ab similique
        ipsam corrupti quam, eligendi quisquam debitis quibusdam nihil
        consequatur odit magnam explicabo! Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Molestiae non, ad labore voluptatum nobis
        sit corporis praesentium molestias corrupti hic, esse ratione in ex! Cum
        architecto quos exercitationem inventore reprehenderit.
      </p>
    </div>
  </div> -->

  <!-- <div class="section">
    <div class="container">
      <div class="video-intro">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Mqa60lgJ1Bk?si=na3lXkPwsf384y5f"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div> -->
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.teacher-hero
  background-image: url('/images/miha.png')
  background-position: left top
  background-repeat: no-repeat
  background-size: calc( 50% - 26px )
  @include ll
    background-size: 100%


.teacher-hero__inner
  display: grid
  grid-template-columns: repeat(2, 1fr)
  gap: 52px
  justify-content: space-between
  padding-bottom: 260px
  @include ll
    padding-bottom: 0
    color: var(--white)
    grid-template-columns: 1fr
    grid-template-rows: repeat(2, 1fr)

.teacher-hero__inner-content
  @include ll
    grid-row: 1

.teacher-hero__title
  margin-top: 100px
  margin-bottom: 80px

  @include xl
    margin-top: 80px
    margin-bottom: 60px
  @include ll
    color: var(--white)

  @include l
    margin-top: 60px

.teacher-hero__image
  max-width: 741px
  height: auto
  grid-column: 2
  @include ll
    grid-column: 1
    grid-row: 2

.video-intro
  display: flex
  align-items: center
  justify-content: center
  margin: 0 auto
  width: 1050px
  height: 576px

  & iframe
    width: 100%
    height: 100%
    border-radius: 20px
</style>
