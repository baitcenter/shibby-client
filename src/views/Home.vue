<template>
  <div class="router-view">
    <SearchIndex />
    <!-- <AutoTag />
    <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<style lang="scss">

</style>

<script>
// import AutoTag from '@/components/AutoTag'
import SearchIndex from '@/components/SearchIndex'

export default {

  name: 'home',
  components: {
    SearchIndex
    // AutoTag
  }
}
</script>
