<template>
  <div class="search-input">
    <input
      class="transp-form"
      placeholder="Search Files"
      type="text"
    />
    <font-awesome-icon @click.prevent="console.log('Button works')" icon="search" />
  </div>
</template>

<style lang="scss">
  .search-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
    color: #eee;
    text-shadow: 1px 1px 1px #3335;
      font-size: 1.75rem;
    }
  }
</style>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faSearch)
export default {
  name: 'SearchInput'
}
</script>
