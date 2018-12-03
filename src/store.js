import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMSearch from '@vuex-orm/plugin-search'
import SoundFile from '@/models/SoundFile'

Vue.use(Vuex)
VuexORM.use(VuexORMSearch, {
  // configure default fuse.js options here (see below)
  caseSensitive: false,
  findAllMatches: true,
  keys: ['title', 'description', 'tags']
})

const database = new VuexORM.Database()
database.register(SoundFile, {})

const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
  // state: {
  //   vuexDb: {},
  //   playlist: []
  // },
  // mutations: {
  //   change (state, vuexDb) {
  //     state.vuexDb = vuexDb
  //   },
  //   addToPlaylist (state, playlist) {
  //     state.playlist.push(playlist)
  //   }
  // },
  // getters: {
  //   vuexDb: state => state.vuexDb,
  //   playlist: state => state.playlist
  // },
  // actions: {

  // }
})
export default store
