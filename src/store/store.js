import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import VuexORMSearch from '@vuex-orm/plugin-search'
import database from '@/store/database'

Vue.use(Vuex)
VuexORM.use(VuexORMSearch, {
  // configure default fuse.js options here (see below)
  shouldSort: true,
  tokenize: true,
  caseSensitive: false,
  findAllMatches: true,
  keys: ['title', 'description', 'tags']
})

VuexORM.use(VuexORMAxios, {
  database,
  http: {
    baseURL: 'https://shibbysearch.site/api',
    url: '/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
})

const store = new Vuex.Store({
  plugins: [VuexORM.install(database, { namespace: 'localDB' })]
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
