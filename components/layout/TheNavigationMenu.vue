<template>
  <div :class="$style.navLinkWrapper">
    <NavLink v-for="nav in NAVIGATION_CONFIG" :key="nav.id" :link-data="nav" />
  </div>
</template>

<script setup>
import NavLink from '~/components/common/NavLink.vue';

defineOptions({
  name: 'TheNavigationMenu',
});

const NAVIGATION_CONFIG = [
  {
    link: '/',
    title: 'Каталог',
    imgSrc: '/catalog.svg',
    id: '1',
  },
  {
    link: '/entries',
    title: 'Записи',
    imgSrc: '/entries.svg',
    id: '2',
  },
  {
    link: '/certificates',
    title: 'Сертификаты',
    imgSrc: '/certificates.svg',
    id: '3',
  },
  {
    link: '/reviews',
    title: 'Отзывы',
    imgSrc: '/reviews.svg',
    id: '4',
  },
];
</script>

<style module lang="scss">
.navLinkWrapper {
  display: flex;
  max-width: 30rem;
  padding: 3rem 2rem 2rem 3rem;
  flex-direction: column;
  gap: 1rem;
}
</style>
