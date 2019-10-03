import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import coins from './modules/coins.js'
import topcoins from './modules/topcoins.js'

export const store =  new Vuex.Store({
  modules: {
		coins,
        topcoins
	},
	strict: process.env.NODE_ENV !== 'production'
})
