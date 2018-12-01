<template>
  <section class="topbar">
    <h1 class="logo">Shibby</h1>
    <SearchInput />
  </section>
</template>

<script>
import SearchInput from '@/components/SearchInput'

export default {
  components: {
    SearchInput
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
}
</style>
