import Vue from 'vue'
import App from './App'
import {
	HttpRequest
} from './utils/HttpRequest'

Vue.config.productionTip = false
Vue.prototype.$request = HttpRequest //挂载到Vue的原型链上,所有Vue组件都能访问到
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
