import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueKinesis from "vue-kinesis"

Vue.config.productionTip = false

Vue.use(VueKinesis);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});