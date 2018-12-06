<template>
  <div class="router-view">
    <SearchIndex />
    <AddFile />
    <!-- <AutoTag />
    <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<style lang="scss">
  .router-view {
    // display: grid;
    grid-column: 4 / 17;
    grid-row: 2 / 3;
    z-index: 1;
    width: 100%;
  }
</style>

<script>
import AddFile from '@/components/AddFile'
// import AutoTag from '@/components/AutoTag'
import SearchIndex from '@/components/SearchIndex'

export default {

  name: 'home',
  components: {
    AddFile,
    SearchIndex
    // AutoTag
  }
}
</script>
