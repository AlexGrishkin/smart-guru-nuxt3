<template>
  <div :class="$style.logoWrapper">
    <nuxt-img src="/logo.svg" :class="$style.imgLogo" />
    <nuxt-img src="/SmartGuru.svg" :class="$style.imgLogo" />
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" module>
.logoWrapper {
  display: grid;
  grid-template-columns: 8.9rem 15.7rem;
  grid-template-rows: 1fr;
  align-items: start;
  gap: 1.3rem;
  width: 100%;
  height: 8.4rem;
  margin-bottom: 5rem;

  @include respond-to(desktop) {
    height: 6.4rem;
    grid-template-columns: 6.7rem 11.9rem;
  }
}

.imgLogo {
  display: flex;
  align-items: start;
  width: 100%;
  height: 100%;
}
</style>
