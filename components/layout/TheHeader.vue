<template>
  <div :class="$style.TheHeader">
    <!--    надо подумать как данные передать и генерить уникальный id-->
    <NavLink
      :link-data="{ id: 6, link: '/notifications', imgSrc: '/Heart.svg' }"
      data-allow-mismatch
      size="small"
    />
    <div :class="$style.userInfoWrapper">
      <p :class="$style.text">Пользователь</p>
      <p :class="$style.userName">{{ userName }}</p>
    </div>
    <NuxtImg src="/Alex.jpg" :class="$style.userImg" />
  </div>
</template>

<script setup>
import NavLink from '~/components/common/NavLink.vue';

defineOptions({
  name: 'TheNavigationMenu',
});
const userName = 'Алексей Гришкин';
</script>

<style lang="scss" module>
.TheHeader {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 7.6rem;
  padding: 1.1rem;
  border-bottom: 0.1rem solid $grey;
  background-color: $white;
  gap: 3rem;
}

.userInfoWrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .text {
    font-size: 1.6rem;
    line-height: 2rem;
  }

  .userName {
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.6rem;
  }
}

.userImg {
  width: 5.6rem;
  height: 5.6rem;
  object-fit: cover;
  border-radius: 50%;
}
</style>
