<template>
  <div class="audio-player">
    <Aplayer
      v-if="playlist.length !== 0"
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
import Aplayer from 'vue-aplayer'
export default {
  components: {
    Aplayer
  },
  computed: {
    playlist () {
      return this.$store.getters['localDB/playlist/query']().all()
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
  .audio-player {
    overflow: hidden;
    .aplayer {
      margin: 0;
    }
  }
</style>
