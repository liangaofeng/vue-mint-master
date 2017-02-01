import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
import MintUI from 'mint-ui'
import FastClick from 'fastclick'

import filters from './filters';
import routes from './routers';

import {Fetch,FetchList} from './libs/fetchData';
import {LocationService} from './libs/LocationService';

import 'mint-ui/lib/style.css'
import './assets/scss/common.scss';
import './assets/scss/app.scss';
import './assets/scss/popup.scss';


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(MintUI)


$.ajaxSettings.crossDomain = true;

Vue.http.options.root = process.env.NODE_ENV === 'development' ? 'https://shdev.cunpiao.com/api/v1/xiaoji' : 'https://cpdev.cunpiao.com/M'
Vue.http.options.emulateJSON = true

Vue.prototype.Fetch= function(action, data){
     return new Fetch(action, data)
}
Vue.prototype.FetchList= function(action, data){
     return new FetchList(action, data)
}

// 实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

// 实例化VueRouter
const router = new VueRouter({
    routes
});

// 路由跳转中间验证
router.beforeEach((to, from, next) => {
    document.title = to.meta.title||'小鸡充值'
    next() // 确保一定要调用 next()
});

new Vue({
    router
}).$mount('#app');

//系统定位功能
new LocationService().getLocation();

FastClick.attach(document.body);


