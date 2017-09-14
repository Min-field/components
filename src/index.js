import Vue from 'vue';
import Router from 'vue-router';
import routes from './router-config.js';
import app from './app.vue';

Vue.use(Router);

const router = new Router({
    routes
})
const App = new Vue({
    router,
    render: h => h(app)
}).$mount('#app');
