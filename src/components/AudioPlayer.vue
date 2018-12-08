<template>
  <div class="audio-player">
      <!-- <vue-audio
      :file="playlist.file.downloadUrl"
      ref="player"
      ></vue-audio> -->
    <!-- <av-waveform ref-link="player">
    </av-waveform> -->
    <Aplayer
       :list="playlist"
       autoplay="true"
      :music="{
        src: playlist.src,
        artist: playlist.artist,
        title: playlist.title
      }"
    />
  </div>
</template>

<script>
// import Playlist from '@/models/Playlist'
import Aplayer from 'vue-aplayer'
// import VueAudio from 'vue-audio'
export default {
  components: {
    Aplayer
    // VueAudio
  },
  computed: {
    playlist () {
      return this.$store.getters['localDB/playlist/query']().all()
      // return Playlist.query().with('soundFiles').get()
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
  .audio-player {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
</style>
