<template>
  <div :class="[$style.navLinkWrapper, { [$style._activeLink]: route.path === linkData.link }]">
    <nuxt-link :to="linkData.link" :class="$style.navLink">
      <nuxt-img :class="$style.navImg" :src="linkData.imgSrc" />
      <p :class="$style.navTitle">{{ linkData.title }}</p>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
interface LinkProps {
  id?: number;
  link: string;
  imgSrc: string;
  title: string;
}

defineProps<{ linkData: LinkProps }>();

const route = useRoute();
// надо разобраться как выносить сюда вычисление того что мне надо а не писать в разметке
// const isActiveLink = computed(() => route.path === linkData.link);
</script>

<style module lang="scss">
.navLinkWrapper {
  display: flex;
  align-items: center;
  width: 100%;
  height: 5.4rem;
  border-radius: 0.5rem;

  &._activeLink {
    background-color: $orange;

    .navLink {
      .navImg {
        filter: invert(93%) sepia(100%) saturate(0%) hue-rotate(0deg) brightness(110%)
          contrast(100%);
      }
    }

    .navTitle {
      color: $white;
    }
  }
}

.navLink {
  display: flex;
  gap: 1.4rem;
  width: 100%;
  height: 100%;
  padding: 1.5rem;

  .navTitle {
    font-family: Geist, sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.4rem;
  }
}
</style>
