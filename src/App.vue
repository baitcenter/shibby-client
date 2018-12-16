<template>
  <div class="app">
    <Navigation />
    <Logo />
    <router-view />
    <AudioPlayer />
    <background />
  </div>
</template>

<style lang="scss">
@import 'scss/tools';

.app {
  background-size: 200%;
  // background-image: linear-gradient($light-angle, rgba(254,135,195, 0.8) 0%, rgba(130,141,254, 0.8) 50%, rgba(109,88,243, 0.8) 100%);
  background-image: linear-gradient(($light-angle - 180), #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%); // Slightly better contrast
  transition: 600ms ease;
  overflow: hidden scroll;
  height: 100vh;
  &:hover {
    background-position: 80% 0; // We only move the background position
  }
}

</style>

<script>
// import DBservice from '@/services/dbService'
import Navigation from '@/components/Navigation'
import Logo from '@/components/Logo'
import background from '@/components/common/background'
import AudioPlayer from '@/components/AudioPlayer'
import SoundFile from '@/models/SoundFile'
export default {
  components: {
    background,
    Navigation,
    AudioPlayer,
    Logo
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
  },
  methods: {
    async fetchLocaldDB () {
      let response = await SoundFile.$fetch()
      return response
      // this.sounds = response.data.sounds
    }
  }
}
</script>
