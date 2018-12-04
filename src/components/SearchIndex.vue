<template>
  <div class="router-view">
    <input type="text" v-model="searchInput" placeholder="Search...">
      <article v-for="result in results" :key="result.$id">
        <h2>{{ result.title }}</h2>
        <Markdown>{{ result.description }}</Markdown>
      </article>

  </div>
</template>

<script>
import Markdown from 'vue-markdown'
export default {
  components: {
    Markdown
  },
  data () {
    return {
      searchInput: ''
    }
  },
  computed: {
    results () {
      return this.$store.getters['entities/soundFiles/query']().search(this.searchInput).get()
    }
  }
}
</script>
