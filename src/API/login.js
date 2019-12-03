import {get,post,login} from '@/request'

export  function get_menu(){
   return get("api/sys/menu/all" ,{});
   // http://localhost:8080/sys/menu/byAdminId/1
}
export  function get_login(param){
   return login("api/authentication/form",param);
}

