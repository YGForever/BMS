import Vue from 'vue'
import Vuex from 'vuex'
import QS from 'qs';
import md5 from 'js-md5';
// import store from "./store/index"
import axios from "axios"
import store from "./store"
import {Message} from 'element-ui'
import router from './router'
Vue.use(Vuex)


//导入 store

let Base64 = require('js-base64').Base64;
const Axios = axios.create({

  // baseURL:"http://localhost:8082", // api 的 base_url

  timeout: 10000,

  responseType: 'json',

  withCredentials: false, //携带cookie

  headers: {

    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;application/json',

    // 'Content-Type': 'application/json;charset=utf-8

    // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    // 'deviceId':store.state.deviceTd,

  }

})

//请求拦截器
Axios.interceptors.request.use(config => {
  config.data = QS.stringify(config.data) //参数格式化
  config.headers.authorization='Basic '+Base64.encode('internet_plus:internet_plus');
  return config
},err => {

})

//响应拦截
Axios.interceptors.response.use(
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */

  response => {
    // console.log(request)
    // request.Headers.access_token=store.state.token;
    const res = response.data;
    return response.data;
  },
  error => {
    if(error.response.status==401){
      Message({
        message: '请登录！',
        type: 'error',
        duration: 2 * 1000,
        onClose:()=>{
          router.push({path: '/'});
        }
      })
      return Promise.reject(error)
    }
    console.log(error);
    console.log('err' + error) // for debug
    Message({
     message: '操作失败！',
     type: 'error',
     duration: 5 * 1000,
    })
    store.dispatch('setLoading', false)
    return Promise.reject(error)
  }

)
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params){
  params.access_token=store.getters.getToken;
  return new Promise((resolve, reject) =>{
    Axios.get(url, {
      params: params
    }).then(res => {
      resolve(res);
    }).catch(err =>{
      reject(err.data)
    })
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  params.access_token=store.getters.getToken;
  // req = requests.post(url, data=values_json)
  return new Promise((resolve, reject) => {
    console.log(params)
    Axios.post(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err =>{
        reject(err.data)
      })
  });

}


/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function login(url, params) {
  // req = requests.post(url, data=values_json)
  return new Promise((resolve, reject) => {
    console.log(params)
    Axios.post(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err =>{
        reject(err.data)
      })
  });

}

