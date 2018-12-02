<template>
  <Aplayer autoplay
    :music="{
      title: 'secret base~君がくれたもの~',
      artist: 'Silent Siren',
      src: this.playlist.sound.downloadUrl,
      pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
    }"
  />
</template>
<script>
import Aplayer from 'vue-aplayer'
export default {
  components: {
    Aplayer
  },
  data () {
    return {
      playlist: this.$store.getters.playlist
    }
  },
  methods: {

  }
}
</script>
