<template>
  <div class="add-file">
    <form class="search-form" @submit.prevent="scrapeFile">
      <input
        class="transp-form"
        type="text"
        placeholder="Soundgasm URL"
        v-model="soundgasmUrl">
      <input class="btn" type="submit" value="Scrape"/>
    </form>
    <div class="result" v-if="sound.sourceUrl != undefined">
      <p>Title:</p>
      <textarea-autosize v-model="sound.title"></textarea-autosize>
      <p>Description, feel free to use Markdown</p>
      <section class="description">
       <textarea-autosize class="markdown-input" v-model="sound.description"></textarea-autosize>
       <Markdown :source="sound.description"></Markdown>
      </section>
      <p>Tags:</p>
      <ul class="filter-list">
        <li v-for="(tag, index) in sound.tags" :key="tag">
          {{ tag }}
          <span @click="removeTag(index)"><font-awesome-icon :icon="removeIcon"></font-awesome-icon></span>
        </li>
      </ul>
      <input type="text" placeholder="Add new tag" v-model="newTag" @submit="sound.tags.push(newTag)">
      <!-- <ul class="tag-list">
        <li v-for="tag in sound.tags" :key="tag">{{ tag }}</li>
      </ul> -->
      <button class="btn"
        v-if="sound.sourceUrl != null"
        v-on:click="addFile()">
        Add File
      </button>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Markdown from 'vue-markdown'
import Scraper from '@/services/scraper'
import SoundFile from '@//models/SoundFile'

export default {
  components: {
    Markdown,
    FontAwesomeIcon
  },
  data () {
    return {
      soundgasmUrl: '',
      sound: {},
      newTag: '',
      removeIcon: faTimes
    }
  },
  methods: {
    async addFile () {
      await SoundFile.$create({
        data: {
          title: this.sound.title,
          description: this.sound.description,
          uploader: this.sound.uploader,
          sourceUrl: this.sound.sourceUrl,
          downloadUrl: this.sound.downloadUrl,
          localFileUrl: this.sound.localFileUrl,
          tags: this.sound.tags,
          trackLength: this.sound.trackLength
        }
      })
    },
    async scrapeFile (params) {
      const response = await Scraper.scrapeFile({
        params: {
          soundgasmUrl: this.soundgasmUrl
        },
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      this.sound = response.data
    },
    removeTag (index) {

    }
  }
}

</script>

<style lang="scss">
@import '../scss/tools';
  .search-form {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .result {
    padding: 0 1rem;
    .description {
      display: flex;
      flex-direction: column;
      @include respond(tablet) {
        flex-direction: row;
        .markdown-input{
          min-width: 22em;
          max-width: 50%;
        }
      }
      textarea {
        margin: 0 1rem 0 0;
      }
      div *:first-child {
        margin-top: 0;
      }
    }
    textarea {
      color: inherit;
      background: transparent;
    }
  }
</style>
