import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import TopCoins from '~/pages/TopCoins'
import AllCoins from '~/pages/AllCoins'

let routes = [
    {
      path: '/',
      redirect: '/topcoins'    
    },
    {
        name: 'topcoins',
        path: '/topcoins',
        component: TopCoins
    },
    {
        name: 'allcoins',
        path: '/allcoins',
        component: AllCoins
    }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
