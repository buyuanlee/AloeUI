import Vue from 'vue'
import App from './App.vue'

import Icon from './components/icon'
import Button from './components/button'

Vue.component('aloe-icon', Icon);
Vue.component('aloe-button',Button);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
