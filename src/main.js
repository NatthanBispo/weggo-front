import './plugins';

import Vue from 'vue';
import App from './App.vue';
import i18n from './plugins/i18n';
import store from './store';
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = false

new Vue({
  i18n,
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
