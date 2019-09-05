/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

import './bootstrap';

import Vue from 'vue';

import Routes from '@/js/routes.js';
import App from '@/js/views/App';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

const app = new Vue({
    el: '#app',
    router: Routes,
    render: h => h(App)
});

export default app;
