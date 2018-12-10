<template>
  <div class="add-file">
    <form class="search-form" @submit.prevent="fetchFile">
      <input
        class="transp-form"
        type="text"
        placeholder="Soundgasm URL"
        v-model="soundgasmUrl">
      <input class="btn transp-btn" type="submit" value="Submit"/>
    </form>
    <div class="result">
      <h1>{{ sound.title }}</h1>
      <p>{{ sound.description }}</p>
      <ul class="tag-list">
        <li v-for="tag in sound.tags" :key="tag">{{ tag }}</li>
      </ul>
      <button class="transp-btn" v-if="sound.sourceUrl != null"
      v-on:click="addFile()">Index File</button>
    </div>
  </div>
</template>

<script>
import Scraper from '@/services/scraper'
import SoundFile from '@//models/SoundFile'

export default {
  data () {
    return {
      soundgasmUrl: '',
      sound: {}
    }
  },
  methods: {
    async addFile () {
      await SoundFile.$create({
        data: {
          title: this.sound.title,
          description: this.sound.description,
          uploader: this.sound.uploader,
          downloadUrl: this.sound.downloadUrl,
          localFileUrl: this.sound.localFileUrl,
          sourceUrl: this.sound.sourceUrl,
          trackLength: this.sound.trackLength,
          tags: this.sound.tags
        }
      })
    },
    async fetchFile (params) {
      const response = await Scraper.scrapeFile({
        params: {
          soundgasmUrl: this.soundgasmUrl
        }
      })
      this.sound = response.data
    }
  }
}

</script>

<style lang="scss">
  .search-form {
    display: flex;
    flex-direction: row;
  }
</style>
