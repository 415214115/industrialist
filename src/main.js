import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import request from './utils/request'
import api from './utils/api'
import './nprogress' // permission control
Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.prototype.$request = request
Vue.prototype.$api = api

import VueWechatTitle from "vue-wechat-title"
// import './plugins/element.js'
Vue.use(VueWechatTitle)
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
