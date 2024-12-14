<template>
  <div :class="$style.Container">
    <LayoutTheNavigationMenu />
    <div :class="$style.mainContent">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="scss" module>
.Container {
  display: flex;
}

.mainContent {
  width: 100%;
  padding: 3rem;
}
</style>
