<template>
  <div :class="$style.navigationLinksWrapper">
    <NavigationLogo :class="$style.navLogo" />
    <div :class="$style.navLinkTop">
      <NavLink
        v-for="nav in NAVIGATION_CONFIG"
        :key="nav.id"
        :link-data="nav"
        data-allow-mismatch
      />
    </div>
    <div :class="$style.navLinkBottom">
      <nav-link :link-data="NAVIGATION_CONFIG_BOTTOM" data-allow-mismatch />
    </div>
  </div>
</template>

<script setup>
import NavLink from '~/components/common/NavLink.vue';
import NavigationLogo from '~/components/common/NavigationLogo.vue';

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

const NAVIGATION_CONFIG_BOTTOM = {
  link: '/settings',
  title: 'Настройки',
  imgSrc: '/Setting.svg',
  id: '5',
};
</script>

<style module lang="scss">
.navigationLinksWrapper {
  position: sticky;
  top: 0;
  display: flex;
  width: 30rem;
  height: 100vh;
  padding: 3rem 2rem;
  flex-direction: column;
  border-right: 2px solid $grey;

  @include respond-to(desktop) {
    width: 23.7rem;
  }

  @include respond-to(tablet) {
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 9.3rem;
    padding: 1rem 2rem;
  }
}

.navLogo {
  @include respond-to(tablet) {
    display: none;
  }
}

.navLinkTop {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @include respond-to(tablet) {
    flex-direction: row;
  }
}

.navLinkBottom {
  margin-top: auto;

  @include respond-to(tablet) {
    display: none;
  }
}
</style>
