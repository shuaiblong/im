/*
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-09-28 17:54:07
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-21 09:01:20
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入vant
import Vant from 'vant';
// 引入rem自适应文件
import 'lib-flexible/flexible'
// 引入axios
import axios from 'axios'
import './assets/iconfont/iconfont.css'
//真机调试
//  import Vconsole from 'vconsole'
//  let vConsole = new Vconsole()
//  export default vConsole
// 滑动插件
// import VueTouch from 'vue-touch'
// Vue.use(VueTouch, {name: 'v-touch'})
// VueTouch.config.swipe = {
//    threshold: 100 //手指左右滑动距离
// }
// session使用
axios.defaults.withCredentials = true;
Vue.prototype.axios = axios;
axios.defaults.baseURL = 'http://192.168.0.32:5500/';
Vue.use(Vant);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
