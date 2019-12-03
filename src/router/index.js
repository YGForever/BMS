import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login'

Vue.use(Router)

//解决导航栏重复点击报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

export default new Router({
  mode: 'history',
  routes: [
    {
      //登录
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        keepAlive: false
      }
    },

    {
      path: '/base',
      component: () => import('../views/admin/base/base'),
      name: '基地管理',
      meta: {
        keepAlive: true
      }
    },
    {
      //基地
      path: '/base/list',
      component: () => import('../views/admin/base/base/list'),
      meta: {
        keepAlive: true
      }
    },
    {
      //活动
      path: '/activity',
      component: () => import('../views/admin/activity/activitys'),
      meta: {
        keepAlive: true
      }
    },
   
    {
      name: '404',
      path: '/404',
      component: () => import('@/views/notFound.vue')
      },
      {
      path: '*', // 此处需特别注意至于最底部
      redirect: '/404'
      }

  ],

})
