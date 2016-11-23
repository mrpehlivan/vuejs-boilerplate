// imports
import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from '../config'

// vue
Vue.use(VueResource)
Vue.http.options.crossOrigin = true;
Vue.http.options.xhr = {withCredentials: true};

// exports
export const testResources = Vue.resource(API_ROOT + 'testurl');

