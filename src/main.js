import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false

import router from './router'
import {store} from './store'

store.dispatch('coins/loadAllCoins').then(() => {
        store.dispatch('coins/loadCoinsInfo')
    });

store.dispatch('topcoins/loadCoinsInfo');



Vue.use(new VueSocketIO({
    debug: false,
    connection: 'https://streamer.cryptocompare.com/'
}))

new Vue({
  router,    
  store,
  render: h => h(App)
}).$mount('#app')

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
