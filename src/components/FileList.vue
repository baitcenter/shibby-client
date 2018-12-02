<template>
  <section class="file-list">
    <article class="sound-file-list-item" v-for="sound in sounds" :key="sound.id">
      <h1>{{ sound.title }}</h1>
      <p>{{ sound.description }}</p>
      <ul class="tag-list">
        <li v-for="tag in sound.tags" :key="tag.id">{{ tag }}</li>
      </ul>
      <button v-on:click="pushToPlaylist()">Add to Playlist</button>
    </article>
  </section>
</template>

<style lang="scss">
  .tag-list {
    padding: 0;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    flex-wrap: wrap;
    align-content: center;
    // justify-content: center;
    li {
      font-size: 0.75rem;
      background: #eee5;
      border: 1px solid #ccc7;
      border-radius: 3px;
      margin: 0.25rem 0.25rem;
      padding: 0.25rem;
      height: min-content;
    }
  }
</style>

<script>
import DBservice from '@/services/dbService'
export default {
  name: 'file-list',
  data () {
    return {
      sounds: {},
      sound: {}
    }
  },
  beforeMount () {
    this.fetchSounds()
  },
  mounted () {
    this.sounds = this.$store.getters.vuexDb
  },
  methods: {
    async fetchSounds () {
      const response = await DBservice.fetchFiles()
      console.log(response)
      this.$store.commit('change', response.data.sounds)
      this.$router.push({ name: 'home' })
      // this.sounds = response.data.sounds
    },
    pustToPlaylist () {
      this.$store.commit('addToPlaylist', this.sound)
    }
  }
}
</script>
