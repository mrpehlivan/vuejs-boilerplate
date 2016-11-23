// imports
import Vue from 'vue'
import VueRouter from 'vue-router'
import {sync} from 'vuex-router-sync'
import store from './boilerplate/vuex/store'
import setupRouter from './boilerplate/routes'

// components
import App from './boilerplate/components/App'

// vue
Vue.use(VueRouter)

// router
const router = new VueRouter({
    hashbang: true,
    saveScrollPosition: true,
    suppressTransitionError: true
})

setupRouter(router)
sync(store, router)

router.start(Vue.extend(App), '#app');

// for browser compatibility using module.exports
module.exports = {
    version: '1.0.0'
}
