import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //这里放全局参数
    demoValue:{},
    token:"",//认证token
    userInfo:"",//用户信息
    userType:"admin",//用户类型 默认admin
  },
  mutations: {
    //这里是set方法
    setDemoValue(state,demoValue){
      state.demoValue = demoValue
    },
    setToken(state,value){
      state.token = localStorage.setItem("Authorization_token",value);
    },
    setUserInfo(state,value){
      state.userInfo=value;
    },
    setUserType(state,value){
      state.userType=value;
    }
  },
  getters: {
    //get方法
    getDemoValue: state => state.demoValue,
    getToken : state => localStorage.getItem("Authorization_token"),
    getUserInfo:state=>state.userInfo,
    getUserType:state=>state.userType,
  },


})
