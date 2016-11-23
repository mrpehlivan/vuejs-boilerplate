// imports
import Vue from 'vue'
import Vuex from 'vuex'
import middlewares from './middlewares'
import example from './modules/example'

// vuex
const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)
Vue.config.debug = debug
Vue.config.warnExpressionErrors = false

// exports
export default new Vuex.Store({
	modules: {
		example
	},
	strict: debug,
	middlewares
})
