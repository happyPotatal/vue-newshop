import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/global.css'
import {Button,Form,FormItem,Input,Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入字体图标
import '@/assets/fonts/iconfont.css'
//axios
import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http=axios


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message=Message

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
