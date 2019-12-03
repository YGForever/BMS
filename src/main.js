// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import store from '@/store';
import axios from "axios";


//引入css样式
import './assets/style/base.scss'
import './assets/style/public.scss'
import './assets/style/variables.scss'
import './assets/style/layout.scss'

import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.css'

Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
