<template>
  <section class="sidebar">
    <nav class="nav">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/files">Files</router-link>
          </li>
        </ul>
       <AudioPlayer />
    </nav>
  </section>
</template>

<script>
import AudioPlayer from '@/components/AudioPlayer'
import Playlist from '@/models/Playlist'
export default {
  components: {
    AudioPlayer
  },
  computed: {
    playlist () {
      return Playlist.query()
        .withAll().get()
    }
  }
}
</script>

<style lang="scss">
@import '../scss/tools';
.sidebar {
  // height: 100%;
  // width: 100%;
  color: #eee;
  background: linear-gradient($light-angle, #414345, #232526);
  grid-column: 1 / 4;
  grid-row: 2 / 3;
  z-index: 1;
  .nav {
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    li {
      line-height: 2.5rem;
      border-bottom: 1px solid #eee;
    }
    a {
      text-decoration: none;
    }
  }
}
</style>
