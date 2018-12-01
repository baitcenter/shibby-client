<template>
  <div class="app">
    <Topbar />
    <Sidebar />
    <background />
    <router-view />
  </div>
</template>

<style lang="scss">
@import 'scss/tools';
body {
  margin: 0;
  padding: 0;
}
.app {
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: min-content;
  background-size: 200%;
  background-image: linear-gradient($light-angle, rgba(254,135,195, 0.8) 0%, rgba(130,141,254, 0.8) 50%, rgba(109,88,243, 0.8) 100%);
  transition: 600ms ease;
  height: 100vh;

  &:hover {
    background-position: 80% 0; // We only move the background position
  }
}

.content {
  grid-area: "Content";
}
</style>

<script>
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import background from '@/components/common/background'
export default {
  components: {
    background,
    Sidebar,
    Topbar
  }
}
</script>
