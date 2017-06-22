import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Nav from '@/components/Nav'
import FootWrap from '@/components/FootWrap'
import Solution from '@/components/Solution'
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
      path: '/solution',
      name: 'Solution',
      component: Solution
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
