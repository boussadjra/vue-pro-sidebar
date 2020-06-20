import Vue from 'vue'
import App from './App.vue'
import VueComp from '@vue/composition-api'
Vue.config.productionTip = false
import router from './routes';
import store from './store';

Vue.use(VueComp)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
