import Vue from 'vue'
import App from './App.vue'

import Icon from './components/icon'
import Button from './components/button'
import ButtonGroup from './components/button-group'

Vue.component('aloe-icon', Icon);
Vue.component('aloe-button', Button);
Vue.component('aloe-button-group', ButtonGroup);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
