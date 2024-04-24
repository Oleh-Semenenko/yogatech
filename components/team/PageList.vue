<template>
  <div class="team__swiper">
    <Icon name="mdi-light:chevron-left" class="prev-btn" width="54" height="54" />
    <Swiper :modules="[SwiperNavigation, SwiperPagination]" :slides-per-view="'auto'" :spaceBetween="52"
      :centered-slides="false" :pagination="{ clickable: true }" :navigation="{
        enabled: true,
        nextEl: '.next-btn',
        prevEl: '.prev-btn'
      }" :breakpoints="{
        1920: {
          slidesPerView: 'auto',
          spaceBetween: 52
        },
        1280: {
          slidesPerView: 'auto',
          spaceBetween: 32
        }
      }">
      <SwiperSlide class="team__swiper-item" v-for="listItem in listData" :key="listItem.id">
        <TeamTeammate v-if="type === ListItemType.TEAMMATE" :participant="(listItem as ITeammate)" />
        <TeamPartner v-if="type === ListItemType.PARTNER" :partner="(listItem as IPartner)" />
      </SwiperSlide>
    </Swiper>
    <Icon name="mdi-light:chevron-right" class="next-btn" width="54" height="54" />

    <div class="about-us__slider-pagination">
      <div class="about-us__slider-pagination"></div>
    </div>
  </div>

  <div>
    <ul class="team__list-mob">
      <li v-for="listItem in visibleData" :key="listItem.id">
        <TeamTeammate v-if="type === ListItemType.TEAMMATE" :participant="(listItem as ITeammate)" />
        <TeamPartner v-if="type === ListItemType.PARTNER" :partner="(listItem as IPartner)" />
      </li>
    </ul>

    <button v-if="isShowMoreBtn" class="team__list-more-btn" @click="handleShowMore">
      <span>Дивитись більше</span>
      <Icon name="ph:arrow-down-thin" width="52" height="52" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { type ITeammate, type IPartner, ListItemType } from '~/types'

const props = defineProps<{
  listData: ITeammate[] | IPartner[]
  type: ListItemType
}>()
const { listData } = props
const visibleData: Ref<(ITeammate | IPartner)[] | []> = ref(listData.slice(0, 4))
const isShowMoreBtn = computed(
  () => listData.length > visibleData.value.length
)

const handleShowMore = () => {
  const startIndex = visibleData.value.length
  const endIndex = Math.min(startIndex + 4, listData.length)

  if (startIndex < listData.length) {
    const additionalListData = listData.slice(startIndex, endIndex)
    visibleData.value = [...visibleData.value, ...additionalListData]
  }
}
</script>

<style lang="sass" scoped>
.swiper
  margin-left: 0
.team__swiper
  display: flex
  align-items: center
  margin: 0 auto
  @include l
    display: none

  & .next-btn,
  & .prev-btn
    position: absolute
    margin-bottom: 130px
  & .next-btn
    right: 0
  & .prev-btn
    left: 0

.team__swiper-item
  text-align: center
  width: 365px
  @include xl
    width: 316px
  @include l
    width: 340px

.team__list-mob
  display: none
  @include l
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 24px
  @include m
    justify-items: center
    grid-template-columns: 1fr
    gap: 12px

  & li
    width: 340px
    @include m
      width: 312px
    @include s
      width: 100%
.team__list-more-btn
  display: none
  @include l
    margin-left: auto
    margin-top: 20px
    display: flex
    align-items: flex-end
    font-size: 18px
    color: var(--gray-color)
  @include m
    font-size: 14px
    margin-top: 8px
</style>
