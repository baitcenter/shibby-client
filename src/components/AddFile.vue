<template>
  <div class="add-file">
    <form class="search-form" @submit.prevent="fetchFile">
      <input
        type="text"
        placeholder="Soundgasm URL"
        v-model="soundgasmUrl">
      <button class="btn">Submit</button>
    </form>
    <div class="result">
      <h1>{{ sound.title }}</h1>
      <p>{{ sound.description }}</p>
      <p>{{ sound.tags }}</p>
      <!-- <ul v-for="tag in tags">

      </ul> -->
      <button v-if="sound.sourceUrl != null"
      v-on:click="addFile()">Index File</button>
    </div>
  </div>
</template>

<script>
// import soundgasmApi from '@/api/soundgasmApi'
import Scraper from '@/services/scraper'
import DBservice from '@/services/dbService'
// import AutoTagger from '@/services/autoTagger'
// import querystring from 'querystring'
export default {
  data () {
    return {
      soundgasmUrl: 'https://soundgasm.net/u/GateOfIvory/M-Sonnet-No-5',
      // soundgasmUrl: '',
      sound: {}
    }
  },
  // mounted: {
  // },
  methods: {
    async addFile () {
      await DBservice.addFile({
        title: this.sound.title,
        description: this.sound.description,
        uploader: this.sound.uploader,
        downloadUrl: this.sound.downloadUrl,
        localFileUrl: this.sound.localFileUrl,
        sourceUrl: this.sound.sourceUrl,
        trackLength: this.sound.trackLength,
        tags: this.sound.tags
      })
    },
    async fetchFile (params) {
      const response = await Scraper.scrapeFile({
        params: {
          soundgasmUrl: this.soundgasmUrl
        }
      })
      this.sound = response.data
      // this.sound.tags = AutoTagger(this.sound.title)
      console.log(this.soundgasmUrl)
      console.log(this.sound)
    }
  }
}

</script>
