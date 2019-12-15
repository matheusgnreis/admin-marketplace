import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import EcDynamicField from '../src/components/EcDynamicField.vue'

Vue.use(Antd)

Vue.config.productionTip = false

Vue.component('teste-object', EcDynamicField)

new Vue({
  router,
  render: h => h(App)
}).$mount('#admin-marketplace')
