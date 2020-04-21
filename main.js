import Vue from 'vue'
import App from './App'
import { HttpRequest } from './utils/HttpRequest'

Vue.config.productionTip = false
Vue.prototype.$request = HttpRequest //挂载到Vue的原型链上,所有Vue组件都能访问到
App.mpType = 'app'

Vue.filter('dateFormate', function (value) {
	const date = new Date(value);
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	return year + "-" + month + '-' + day;
});
const app = new Vue({
	...App
})
app.$mount()
