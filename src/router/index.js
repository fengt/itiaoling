import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Nav from '@/components/Nav'

Vue.use(Router)
Vue.component('Nav', Nav)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
