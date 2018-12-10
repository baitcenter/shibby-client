import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/addfile',
      name: 'addfile',
      // route level code-splitting
      // this generates a separate chunk (addfile.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "addfile" */ './views/AddFile.vue')
    },
    {
      path: '/file/:id',
      name: 'file',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "singlefile" */ './components/SingleFile.vue')
    }
  ]
})
