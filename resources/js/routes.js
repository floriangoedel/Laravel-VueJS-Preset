import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/js/components/Home';

Vue.use(VueRouter);

// routes: [] beinhaltet alle zu erreichenden Routen als Objekte (bsp: {path: '/', name: 'home', component: Home})
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
});

export default router;
