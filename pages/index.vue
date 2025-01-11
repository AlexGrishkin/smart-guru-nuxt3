<template>
  <div>
    <CourseCard :card-data="DEFAULT_CARD_DATA" />
  </div>
</template>

<script setup lang="ts">
import CourseCard from '~/components/common/CourseCard.vue';

const DEFAULT_CARD_DATA = {
  id: 11,
  title: 'Аналитик данных с нуля',
  organisationLogo: '/orgLogo.png',
  organisationName: 'Skypro',
  courseType: 'Аналитик данных',
  shortDescription:
    'Курс "Искусство Письма: Основы и Техники" представляет собой глубокое погружение в мир писательского мастерства. В рамках этого курса мы рассмотрим все аспекты процесса написания, начиная с развития творческого мышления и заканчивая окончательным редактированием и самопубликацией произведений.',
  courseImg: '/CourseImg.png',
  rating: 4,
  courseCost: 45,
  freePlaces: 5,
  courseLenght: 24,
};
</script>
<style lang="scss">
h1 {
  @include Title;

  color: $primary;
}
</style>
