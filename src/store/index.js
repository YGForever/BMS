import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //这里放全局参数
    demoValue:{},
    token:"",
  },
  mutations: {
    //这里是set方法
    setDemoValue(state,demoValue){
      state.demoValue = demoValue
    },
    setToken(state,value){
      state.token = sessionStorage.setItem("Authorization_token",value);
    }
  },
  getters: {
    //get方法
    getDemoValue: state => state.demoValue,
    getToken : state => sessionStorage.getItem("Authorization_token"),
  },


})
