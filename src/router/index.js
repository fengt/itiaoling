import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Nav from '@/components/Nav'
import FootWrap from '@/components/FootWrap'
import Solution from '@/components/Solution'
import About from '@/components/About'
import ddhy from '@/components/products/ddhy'
import feiyu from '@/components/products/feiyu'
import fengyun from '@/components/products/fengyun'
import huashifu from '@/components/products/huashifu'
import jisong from '@/components/products/jisong'
import xingxiao from '@/components/products/xingxiao'

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
      path: '/feiyu',
      name: 'feiyu',
      component: feiyu
    },
    {
      path: '/fengyun',
      name: 'fengyun',
      component: fengyun
    },
    {
      path: '/huashifu',
      name: 'huashifu',
      component: huashifu
    },
    {
      path: '/jisong',
      name: 'jisong',
      component: jisong
    },
    {
      path: '/xingxiao',
      name: 'xingxiao',
      component: xingxiao
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
