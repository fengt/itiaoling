import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Nav from '@/components/Nav'
import FootWrap from '@/components/FootWrap'
import About from '@/components/About'

Vue.use(Router)
Vue.component('Nav', Nav)
Vue.component('FootWrap', FootWrap)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
