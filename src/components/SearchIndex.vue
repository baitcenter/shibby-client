<template>
  <div class="search-container">
    <input class="transp-form" type="text" v-model="searchInput" placeholder="Search...">
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

        <h2 class="result-title">
          <router-link v-bind:to="{ name: 'file', params: { id: result.$id } }">
            {{ result.title }}
          </router-link>
        </h2>
        <Markdown>{{ result.description | truncate(50, '...') }}</Markdown>
        <ul class="tag-list">
          <li title="Add to Tag Filter" v-for="tag in result.tags" :key="tag.id" @click="pushToTagFilter(tag)">{{ tag }}</li>
        </ul>
        <button class="btn transp-btn"
          :href="result.sourceUrl">
          Go to source
        </button>
        <button class="btn transp-btn"
          @click="addToPlaylist(result)">
          Add to Playlist
        </button>
        <VRating :max="5" :value="0" :initial="0"/>
      </article>

      </div>
    </section>
  </div>
</template>

<script>
import Markdown from 'vue-markdown'
import VRating from 'v-rating'
import Playlist from '@/models/Playlist'
const filterOptions = {
  keys: ['tags'],
  threshold: 0
}
export default {
  components: {
    Markdown,
    VRating
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
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
    transition: all 0.15s ease-in-out;
    li {
      color: #eee;
      margin: 0 1rem 0 0;
      span {
        font-weight: bold;
        cursor: pointer;
        &:hover {
          color: #333;
        }
      }
    }
  }
  .tag-list {
    li {
      cursor: pointer;
    }
  }

  .result-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    padding: 1em;
  }
  .result-title {
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
  // .search-container {
  //   max-width: 47.5em;
  // }
</style>
