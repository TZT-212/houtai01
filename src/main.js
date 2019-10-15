import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue的配置项
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
