import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMSearch from '@vuex-orm/plugin-search'
Vue.use(Vuex)

VuexORM.use(VuexORMSearch, {
  // configure default fuse.js options here (see below)
})
export default new Vuex.Store({
  state: {
    vuexDb: {},
    playlist: []
  },
  mutations: {
    change (state, vuexDb) {
      state.vuexDb = vuexDb
    },
    addToPlaylist (state, playlist) {
      state.playlist.push(playlist)
    }
  },
  getters: {
    vuexDb: state => state.vuexDb,
    playlist: state => state.playlist
  },
  actions: {

  }
})
