<template>
  <section class="logo">
    <router-link v-bind:to="{ name: 'home' }">
      <h1 class="logo">Shibbysearch</h1>
    </router-link>
  </section>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss">
@import '../scss/tools';
.logo {
  z-index: 1;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
  h1 {
    margin: 0;
    font-size: 2rem;
  }
}
</style>
