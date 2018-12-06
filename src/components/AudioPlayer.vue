<template>
  <div class="audio-player">
    <audio :src="playlist.file.downloadUrl" ref="player"></audio>
    <av-waveform ref-link="player">
    </av-waveform>
  </div>
</template>
<script>

// import Playlist from '@/models/Playlist'
export default {
  components: {

  },
  computed: {
    playlist () {
      return this.$store.getters['localDB/playlist/query']().with('soundFiles').orderBy('id', 'asc').find(1)
      // return Playlist.query().with('soundFiles').get()
    }
  },
  methods: {

  }
}
</script>
