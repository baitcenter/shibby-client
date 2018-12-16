<template>
  <section class="navigation">
    <nav class="nav">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/addfile">Add File</router-link>
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
.navigation {
  color: #eee;
  .nav {
  display: flex;
  flex-direction: row;
  margin: 1rem 0 0 0;
  padding: 0 1em;
  @include respond(tablet) {
    flex-direction: row-reverse;
  }
    ul {
      display: flex;
      flex-direction: row;
      margin: 0;
      padding: 0;
      list-style-type: none;
      @include respond(tablet) {
        flex-direction: column;
        border-right: 1px solid #eee9;
      }
    }
    li {
      margin: 0 0.5rem;
      padding: 0.25rem 0.5rem;
      display: flex;
      flex-direction: row;
      line-height: 2.5rem;
      transition: 0.25s ease-in-out;
      @include respond(tablet) {
        flex-direction: row-reverse;
        &:hover {
          padding-right: 1.25rem;
        }
      }
    }
    a {
      border-bottom: 1px solid #eee;
      width: min-content;
      color: inherit;
      white-space: nowrap;
      text-decoration: none;
      &.router-link-exact-active {
        font-weight: bold;
        border-bottom: 2px solid #eee;
      }
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
