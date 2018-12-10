<template>
  <section class="topbar">
    <h1 class="logo">Shibbysearch</h1>
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
.topbar {
  padding: 0 1em;
  grid-row: 1 / 2;
  grid-column: 1 / 17;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient($light-angle, #ffdde1, #ee9ca7);
  h1 {
    margin: 0;
    font-size: 2rem;
  }
}
</style>
