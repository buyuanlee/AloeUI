import Vue from 'vue'
import App from './App.vue'

import Icon from './components/icon'

Vue.component('aloe-icon', Icon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
