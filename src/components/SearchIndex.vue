<template>
  <div>
    <input type="text" v-model="searchInput" placeholder="Search...">
    <ul class="filter-list">
      <li v-for="(tag, index) in tagFilter"
        :key="tag">
        {{ tag }}
        <span @click="removeFromTagFilter(index)">X</span>
      </li>
    </ul>
    <section class="result-container">
      <div>

      <article class="result-item" v-for="result in results" :key="result.$id">
        <h3>{{ result.title }}</h3>
        <Markdown>{{ result.description | truncate(50, '...') }}</Markdown>
        <ul class="tag-list">
          <li v-for="tag in result.tags" :key="tag.id" @click="pushToTagFilter(tag)">{{ tag }}</li>
        </ul>
        <button @click="addToPlaylist(result)">Add to Playlist</button>
      </article>

      </div>
    </section>
  </div>
</template>

<script>
import Markdown from 'vue-markdown'
import Playlist from '@/models/Playlist'
const filterOptions = {
  keys: ['tags']
}
export default {
  components: {
    Markdown
  },
  data () {
    return {
      searchInput: '',
      tagFilter: []
    }
  },
  filters: {
    // Cuts string based on characters
    // readMore: function (text, length, suffix) {
    //   return text.substring(0, length) + suffix
    // },
    // Cut strings based on word count
    truncate: (text, val, suffix) => {
      return text.split(' ').splice(0, val).join(' ') + suffix
    }
  },
  computed: {
    results () {
      // return this.$store.getters['localDB/soundFiles/query']().search(this.searchInput).where().get()
      return this.$store.getters['localDB/soundFiles/query']().search(this.tagFilter, filterOptions).search(this.searchInput).get()
    }
    // allTags () {
    // }
  },
  methods: {
    addToPlaylist (input) {
      console.log(input)
      Playlist.insert({
        data: {
          file: input,
          sound_id: input.$id
        }
      })
    },
    pushToTagFilter (str) {
      return this.tagFilter.push(str)
    },
    removeFromTagFilter (index) {
      this.$delete(this.tagFilter, index)
    }
  }
  // , resultTags () {
  //   return this.results.forEach(element => {
  //
  //   })
  // }

}
</script>

<style lang="scss">
  .filter-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
    li {
      margin: 0 1rem 0 0;
      span {
        font-weight: bold;
      }
    }
  }

  .result-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
  }

  .result-item {
    max-width: 37.5em;
  }
</style>
