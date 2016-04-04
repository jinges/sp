import Vue from 'Vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueTouch from 'vue-touch'

import RouterMap from './router'
import Directive from './directive'
import './assets/style/style.scss'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueTouch)

Object.keys(Directive).forEach(function(k){
	Vue.directive(k, Directive[k]);
})

var router = new VueRouter({
	hashbang: true,
	saveScrollPosition: true
})

RouterMap(router);

var App = Vue.extend()
router.start(App, 'html')