<template>
  <div class="section">
    <div class="teacher-hero">
      <div class="container">
        <div class="teacher-hero__inner">
          <div class="teacher-hero__inner-img"></div>
          <div class="teacher-hero__inner-content">
            <h1 class="teacher-hero__title">Михайло Ахекян</h1>
            <p class="teacher-hero__description">
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

  <div class="section blue">
    <div class="container">
      <h2 class="teacher__about-title">Про себе</h2>
      <p class="teacher__about-text">
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
  </div>

  <div class="section">
    <div class="container">
      <div class="video-intro">
        <iframe
          width="560"
          height="315"
          :src="videoSrc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const videoSrc = computed(() => {
  if (route.path.includes('ahekyan')) {
    return 'https://www.youtube.com/embed/-UY_vLmb2UQ?si=rmJJUaN3DJ562Uwj'
  } else if(route.path.includes('scherbakov')) {
    return 'https://www.youtube.com/embed/2nynd0FmhHc?si=q9flh8we8FY7x2q-'

  }
})
</script>

<style lang="sass" scoped>
.teacher-hero
  background-image: url('/images/miha.png')
  background-position: left top
  background-repeat: no-repeat
  background-size: calc( 50% - 26px )
  @include ll
    background-size: 100%
    background-image: none


.teacher-hero__inner
  display: grid
  grid-template-columns: repeat(2, 1fr)
  gap: 52px
  justify-content: space-between
  padding-bottom: 260px
  @include ll
    padding-bottom: 0
    grid-template-columns: 1fr
    grid-template-rows: 1fr 2fr
    gap: 40px
  @include m
    grid-template-rows: 1fr 1fr
    gap: 32px
  @include s
    grid-template-rows: 1fr 1fr
    gap: 24px

.teacher-hero__inner-content
  @include ll
    grid-row: 1

.teacher-hero__inner-img
  @include ll
    background-image: url('/images/miha.png')
    background-position: center
    background-repeat: no-repeat
    background-size: cover
    grid-row: 2


.teacher-hero__title
  margin-top: 100px
  margin-bottom: 80px

  @include xl
    margin-top: 80px
    margin-bottom: 60px
  @include ll
    margin-top: 0
    margin-bottom: 40px
  @include m
    margin-bottom: 32px
  @include ms
    margin-bottom: 24px

.teacher-hero__description
  font-size: 32px
  @include ll
    font-size: 28px
  @include m
    font-size: 24px

.teacher-hero__image
  max-width: 741px
  height: auto
  grid-column: 2
  @include ll
    grid-column: 1
    grid-row: 2

.teacher__about-title
  @include xl
    font-size: 40px
  @include l
    font-size: 32px
    margin-bottom: 20px
  @include m
    font-size: 24px
    margin-bottom: 16px

.teacher__about-text
  font-size: 40px
  @include xl
    font-size: 36px
  @include l
    font-size: 28px
  @include m
    font-size: 20px
  @include ms
    font-size: 18px

.video-intro
  display: flex
  align-items: center
  justify-content: center
  margin: 0 auto
  width: 100%
  height: 576px
  @include ll
    height: 450px
  @include l
    height: 350px
  @include m
    height: 300px
  @include s
    height: 200px

  & iframe
    width: 100%
    height: 100%
    border-radius: var(--primary-border-radius)
</style>
