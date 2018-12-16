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
  margin: 0 1rem;
  z-index: 1;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  @include respond(tablet) {
    justify-content: flex-start;
  }
  a {
    text-decoration: none;
  }
  h1 {
    margin: 0;
    font-size: 2rem;
  }
}
</style>
