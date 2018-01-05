import Vue from 'vue'
import App from './App'
import axios from 'axios'//vue处理ajax

Vue.prototype.$ajax=axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
