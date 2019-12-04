import {get,post,login,} from '@/request'

//获取菜单列表
export  function get_menu(){
   return get("api/sys/menu/all" ,{});
   // http://localhost:8080/sys/menu/byAdminId/1
}

//登录接口
export  function get_login(param){
   return login("api/authentication/form",param);
}

/**
 * 
 * @param {*} url 接口地址   xxx/type  type 为admin 或其他
 * @param {*} params 参数
 */
export  function get_user(url,params){
   return get(url,params);
}

/**
 * 
 * @param {*} url 接口地址   xxx/id   id值根据用户获取
 * @param {*} params 参数
 */
//重置密码
export  function rest(url,params){
   return get(url,params);
}
