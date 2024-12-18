<template>
  <div :class="[$style.navLinkWrapper, { [$style._activeLink]: isActiveLink }]">
    <NuxtLink :href="linkData.link" :class="$style.navLink">
      <nuxt-img preload :class="$style.navImg" :src="linkData.imgSrc" />
      <p :class="$style.navTitle">{{ linkData.title }}</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface LinkProps {
  id?: number | string;
  link: string;
  imgSrc: string;
  title: string;
}

const props = defineProps<{ linkData: LinkProps }>();

const route = useRoute();
const isActiveLink = computed(() => route.path === props.linkData.link);
</script>

<style module lang="scss">
.navLinkWrapper {
  display: flex;
  align-items: center;
  width: 100%;
  height: 5.4rem;
  border-radius: 0.5rem;
  outline: 1px solid transparent;

  @include respond-to(tablet) {
    height: 7rem;
  }

  @include respond-to(mobile) {
    height: 7.4rem;
  }

  &:not(._activeLink) {
    transition: outline 0.5s;

    &:hover {
      outline: 1px solid $grey; // Меняем на серый при наведении
      cursor: pointer;
    }
  }

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

  .navImg {
    height: 100%;
  }

  @include respond-to(tablet) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    gap: 0.5rem;

    .navImg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  .navTitle {
    font-family: Geist, sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.4rem;

    @include respond-to(mobile) {
      display: none;
    }
  }
}
</style>
