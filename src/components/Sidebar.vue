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
    </nav>
  </section>
</template>

<script>
import Playlist from '@/models/Playlist'
export default {
  components: {

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // height: 100%;
  // width: 100%;
  color: #eee;
  // background: linear-gradient($light-angle, #414345, #232526);
  grid-column: 1 / 4;
  grid-row: 2 / 3;
  z-index: 1;
  .nav {
  margin: 1rem 0 0 0;
  padding: 0 1em;
  border-right: 1px solid #eee;
    ul {
      // display: flex;
      // flex-direction: column;
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    li {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      line-height: 2.5rem;
    }
    a {
      border-bottom: 1px solid #eee;
      width: min-content;
      text-decoration: none;
    }
  }
  .audio-player {
    align-self: flex-end;
    width: 100%;
    .aplayer {
      margin: 0;
    }
  }
}
</style>
