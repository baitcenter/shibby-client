<template>
  <div class="app">
    <Topbar />
    <Sidebar />
    <router-view v-bar/>
    <background />
  </div>
</template>

<style lang="scss">
@import 'scss/tools';

.app {
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: min-content;
  background-size: 200%;
  background-image: linear-gradient($light-angle, rgba(254,135,195, 0.8) 0%, rgba(130,141,254, 0.8) 50%, rgba(109,88,243, 0.8) 100%);
  transition: 600ms ease;
  overflow: hidden;
  height: 100vh;

  &:hover {
    background-position: 80% 0; // We only move the background position
  }
}

.content {
  grid-area: "Content";
}
</style>

<script>
// import DBservice from '@/services/dbService'
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import background from '@/components/common/background'
import SoundFile from '@/models/SoundFile'
export default {
  components: {
    background,
    Sidebar,
    Topbar
  },
  async created () {
    try {
      await this.fetchLocaldDB().then(res => {
        this.$store.dispatch('localDB/soundFiles/create', { data: res.sounds })
        // console.log(res)
      })
    } catch (err) {
      console.error(err)
    }
    // this.fetchSounds()
  },
  methods: {
    async fetchLocaldDB () {
      // let response = DBservice.fetchFiles()
      let response = await SoundFile.$fetch()
      // console.log(response)
      return response
      // this.sounds = response.data.sounds
    }
  }
}
</script>
