<template>
  <div v-if="NAVIGATION_CONFIG.length" :class="$style.navLinkWrapper">
    <nuxt-link
      v-for="(nav, index) in NAVIGATION_CONFIG"
      :key="index"
      :to="nav.link"
      :class="$style.navLink"
    >
      <!--      выделить в отдельный ui-->
      <nuxt-img :src="nav.img" />
      <p>{{ nav.name }}</p>
    </nuxt-link>
  </div>
</template>

<script setup>
defineOptions({
  name: 'TheHeader',
});

const NAVIGATION_CONFIG = [
  {
    link: '/',
    name: 'Каталог',
    img: '/catalog.svg',
  },
  {
    link: '/entries',
    name: 'Записи',
    img: '/entries.svg',
  },
  {
    link: '/certificates',
    name: 'Сертификаты',
    img: '/certificates.svg',
  },
  {
    link: '/reviews',
    name: 'Отзывы',
    img: '/reviews.svg',
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

.navLink {
  display: flex;
  gap: 1.4rem;
}
</style>
