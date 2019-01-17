<template>
  <section class="router-view">
    <article class="single-file">
      <h2>{{ file.title }}</h2>
      <Markdown>{{ file.description }}</Markdown>
      <ul class="tag-list">
        <li v-for="tag in file.tags" :key="tag">{{ tag }}</li>
      </ul>
      <footer>
        <form :action="file.sourceUrl" target="_blank">
          <input class="btn"
            type="submit"
            value="Go to Source"
          />
        </form>
        <button class="btn"
          @click="addToPlaylist(file)">
          Add to Playlist
        </button>
      </footer>
      <button v-if="hasAuth" lass="btn transp-btn">
        <router-link v-bind:to="{ name: 'edit', params: { id: file.$id } }">
          Edit File
        </router-link>
      </button>
    </article>
  </section>
</template>

<script>
import SoundFile from '@/models/SoundFile'
import Playlist from '@/models/Playlist'
import Markdown from 'vue-markdown'

export default {
  components: {
    Markdown
  },
  computed: {
    file () {
      return SoundFile.find(this.$route.params.id)
    }
  },
  data () {
    return {
      hasAuth: false,
      isEditable: true
    }
  },
  mounted: {

  },
  methods: {
    async updateFile () {
      await SoundFile.$update({
        data: {
          title: this.file.title,
          description: this.file.description,
          uploader: this.file.uploader,
          downloadUrl: this.file.downloadUrl,
          localFileUrl: this.file.localFileUrl,
          sourceUrl: this.file.sourceUrl,
          trackLength: this.file.trackLength,
          tags: this.file.tags
        }
      })
    },
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
    }
  }
}
</script>

<style lang="scss">

  .single-file {
    margin: 0 1rem;
    footer {
      display: flex;
      flex-direction: row;
      margin: 0 -0.5rem;
    }
  }
</style>
