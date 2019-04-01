import Vue from 'vue'
import App from './App.vue'

import plugin from './plugin'
import Icon from './components/icon'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Row from './components/row'
import Col from './components/col'
import Layout from './components/layout'
import Header from './components/header'
import Footer from './components/footer'
import Aside from './components/aside'
import Main from './components/main'
import Toast from './components/toast'

Vue.use(plugin);
Vue.component('aloe-icon', Icon);
Vue.component('aloe-button', Button);
Vue.component('aloe-button-group', ButtonGroup);
Vue.component('aloe-input', Input);
Vue.component('aloe-row', Row);
Vue.component('aloe-col', Col);
Vue.component('aloe-layout',Layout);
Vue.component('aloe-header',Header);
Vue.component('aloe-footer',Footer);
Vue.component('aloe-aside',Aside);
Vue.component('aloe-main',Main);
Vue.component('aloe-toast', Toast);

Vue.config.productionTip = false;

new Vue({
    data: {
    },
    created(){
        this.$toast()
    },
    methods:{
        showToast(){
            this.$toast('我是一个Toast')
        }
    },
    render: h => h(App)
}).$mount('#app');

