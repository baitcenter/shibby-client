<template>
  <article class="edit-file">
    <form class="edit-form">
      <label for="title">Title</label>
      <input name="title" type="text" v-model="file.title">
      <label>Description, feel free to use <a href="https://daringfireball.net/projects/markdown/syntax" target="_blank">Markdown</a> syntax</label>
      <textarea-autosize v-model="file.description"></textarea-autosize>
      <label>Tags</label>
      <ul class="filter-list">
        <li v-for="tag in file.tags" :key="tag">
          {{ tag }}
          <span @click="removeFromTagFilter(index)"><font-awesome-icon :icon="close"></font-awesome-icon></span>
        </li>
      </ul>
      <input type="text" placeholder="Add new tag" v-model="newTag" @submit.prevent="file.tags.push(newTag)">
      <button class="btn transp-btn" @click.prevent="updateFile()">Update</button>
      <button class="btn transp-btn" @click.prevent="reScrape()">Rescrape</button>
    </form>
  </article>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import SoundFile from '@/models/SoundFile'
import Scraper from '@/services/scraper'
export default {
  components: {
    FontAwesomeIcon
  },
  computed: {
    file () {
      return SoundFile.find(this.$route.params.id)
    }
  },
  data () {
    return {
      isEditable: true,
      close: faTimes,
      newTag: ''
    }
  },
  methods: {
    async updateFile () {
      await SoundFile.$update({
        params: {
          id: this.file.id
        },
        data: {
          title: this.file.title,
          description: this.file.description,
          trackLength: this.file.trackLength,
          sourceUrl: this.file.sourceUrl,
          downloadUrl: this.file.downloadUrl,
          uploader: this.file.uploader,
          tags: this.file.tags
        }
      }).then(
        this.$router.push({ name: 'file', params: { id: this.file.id } })
      )
    },
    async reScrape (params) {
      const response = await Scraper.scrapeFile({
        params: {
          soundgasmUrl: this.file.sourceUrl
        }
      })
      console.log(response.data)
      this.file = response.data
    }
  }
}
</script>

<style lang="scss">
  // .edit-file {
  // }
  .edit-form {
    color: #eee;
    padding: 0 1rem;
    textarea {
      font-family: 'Courier New', Courier, monospace;
      background: transparent;
      display: flex;
    }
  }
</style>
