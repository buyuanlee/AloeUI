import Vue from 'vue'
import App from './App.vue'

import Icon from './components/icon'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Row from './components/row'
import Col from './components/col'

Vue.component('aloe-icon', Icon);
Vue.component('aloe-button', Button);
Vue.component('aloe-button-group', ButtonGroup);
Vue.component('aloe-input', Input);
Vue.component('aloe-row', Row);
Vue.component('aloe-col', Col);

Vue.config.productionTip = false;

new Vue({
    data: {
    },
    render: h => h(App)
}).$mount('#app');

