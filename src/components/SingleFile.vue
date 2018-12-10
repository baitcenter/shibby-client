<template>
  <article>
    <h2>{{ file.title }}</h2>
    <VueMarkdown>{{ file.description }}</VueMarkdown>
  </article>
</template>

<script>
import SoundFile from '@/models/SoundFile'
import VueMarkdown from 'vue-markdown'
export default {
  components: {
    VueMarkdown
  },
  computed: {
    file () {
      let id = this.$route.params.id
      return SoundFile.query(id)
    }
  },
  // data () {
  //   return {
  //     file: {}
  //   }
  // },
  mounted: {

  },
  methods: {

  }
}
</script>
