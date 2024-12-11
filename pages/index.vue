<template>
  <div>
    <h1>Hello World</h1>
    <NuxtLink to="/about"> about </NuxtLink>
  </div>
</template>

<style lang="scss">
h1 {
  @include Title;

  color: $primary;
}
</style>
