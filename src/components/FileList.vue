<template>
  <section class="file-list">
    <article class="sound-file-list-item" v-for="sound in sounds" :key="sound.id">
      <h1>{{ sound.title }}</h1>
      <p>{{ sound.description }}</p>
      <ul v-for="tag in sound.tags" :key="tag.id">
        <li>{{ tag }}</li>
      </ul>
    </article>
  </section>
</template>

<script>
import DBservice from '@/services/dbService'
export default {
  name: 'file-list',
  data () {
    return {
      sounds: {}
    }
  },
  mounted () {
    this.fetchSounds()
  },
  methods: {
    async fetchSounds () {
      const response = await DBservice.fetchFiles()
      console.log(response)
      this.sounds = response.data.sounds
    }
  }
}
</script>
