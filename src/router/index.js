import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Nav from '@/components/Nav'
import FootWrap from '@/components/FootWrap'
import Solution from '@/components/Solution'
import About from '@/components/About'
import ddhy from '@/components/products/ddhy'

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
      path: '/ddhy',
      name: 'ddhy',
      component: ddhy
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
