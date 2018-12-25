<template>
  <div class="search-container">
    <input class="transp-form" type="text" v-model="searchInput" placeholder="Search...">
    <ul class="filter-list" v-if="tagFilter.length !== 0">
      <li v-if="tagFilter.length > 1" class="clear-filters" @click="clearFilters">Clear all filters</li>
      <li v-for="(tag, index) in tagFilter"
        :key="tag">
        {{ tag }}
        <span @click="removeFromTagFilter(index)">
          <font-awesome-icon :icon="close"></font-awesome-icon></span>
      </li>
    </ul>
    <section class="result-container">
      <article class="result-item" v-for="result in results" :key="result.$id">
        <h2 class="result-title">
          <router-link v-bind:to="{ name: 'file', params: { id: result.$id } }">
            {{ result.title }}
          </router-link>
        </h2>
        <ul v-if="result.tags.length !== 0" class="tag-list">
          <li title="Add to Tag Filter"
            v-for="tag in result.tags"
            :key="tag.id"
            @click="pushToTagFilter(tag)
          ">{{ tag }}</li>
        </ul>
        <p>{{ result.description | truncate(50, '...') }}</p>
        <footer class="result-footer">
          <form :action="result.sourceUrl" target="_blank">
            <input class="btn"
              type="submit"
              value="Go to Source"
            />
          </form>
          <button class="btn"
            @click="addToPlaylist(result)">
            Add to Playlist
          </button>
        </footer>
      </article>
    </section>
  </div>
</template>

<script>
// import Markdown from 'vue-markdown'
import Playlist from '@/models/Playlist'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
const tagFilterOptions = {
  keys: ['tags'],
  tokenize: false,
  // matchAllTokens: true,
  threshold: 0.1
}
export default {
  components: {
    // Markdown,
    FontAwesomeIcon
  },
  data () {
    return {
      searchInput: '',
      tagFilter: [],
      close: faTimes
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
      return this.$store.getters['localDB/soundFiles/query']()
        .search(this.tagFilter, tagFilterOptions)
        .search(this.searchInput)
        .get()
    }
    // allTags () {
    // }
  },
  methods: {
    addToPlaylist (input) {
      console.log(input)
      Playlist.insert({
        data: {
          title: input.title,
          artist: input.uploader,
          src: input.downloadUrl,
          sound_id: input.$id
          // file: input
        }
      })
    },
    pushToTagFilter (str) {
      return this.tagFilter.push(str)
    },
    removeFromTagFilter (index) {
      this.$delete(this.tagFilter, index)
    },
    clearFilters () {
      this.tagFilter = []
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
  @import '../scss/tools';

  .filter-list {
    margin: 0.5rem 0 0 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
    transition: all 0.15s ease-in-out;
    li {
      color: #eee;
      margin: 0 1rem 0 0;
      &.clear-filters {
        cursor: pointer;
      }
      span {
        font-weight: bold;
        cursor: pointer;
        &:hover {
          color: #ff3f34;
        }
      }
    }
  }
  .tag-list {
    padding: 0 -0.25rem;
    li {
      cursor: pointer;
    }
  }

  .result-container {
    // margin: -2.5rem 0 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    padding: 0 1em;
    form {
      display: inline;
    }
  }
  .result-item {
    width: 100%;
    // margin-bottom: -1.5rem;
    &:first-of-type {
      .result-title {
        margin-top: 0;
      }
    }
  }
  .result-title {
    margin-top: 1rem;
    font-size: 2em;
    a {
      text-decoration: none;
      color: $font-color;
      &:hover {
        color: $font-color;
      }
      &:visited {
        color: $font-color;
      }
    }
  }
  .result-footer {
    margin: 0.75rem -0.5rem 0;
  }
  // .search-container {
  //   max-width: 47.5em;
  // }
</style>
