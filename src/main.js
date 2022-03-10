import Vue from 'vue';
import App from './App.vue';
import JiuGeCharts from './index';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(JiuGeCharts);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
