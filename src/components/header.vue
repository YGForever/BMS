<template>
    <div class="header">
      <div class="header-name">学生后台管理系统</div>
      <!-- <div class="header-info class"> -->
        <!-- <p>欢迎您!</p>
        <i class="iconfont icon-info"></i>
        <i class="iconfont icon-up class_a" ></i>
        <div class="info-show">
          <div><a href="">个人中心</a></div>
          <div><a href="">退出</a></div>
        </div> -->
        <ul class="header-info ">
          <li class="search"><a><i class="iconfont iconsousuo"></i></a></li>
          <li class="notice"><a><i class="iconfont icontongzhi"></i><span>12</span></a></li>
          <li class="email"><a><i class="iconfont iconemail" ></i><span>12</span></a></li>
          <!-- <li class="header-info class">
            <div class="user" @click="get_user()">
              <img src="@/assets/images/user.jpg">
              <span>user</span>
            </div>
            <ul class="user_list" >
                <li>修改密码</li>
                <li>重置密码</li>
                <li>绑定邮箱</li>
            </ul>
          </li> -->
          <li class="header-info class">
            <div class="user" @click="get_user()">
              <img src="@/assets/images/user.jpg">
              <span>user</span>
            </div>
            <div class="info-show">
              <div @click="get_update()"><a href="">修改密码</a></div>
              <div @click="get_rest()"><a href="">重置密码</a></div>
              <div @click="get_bind()"><a href="">绑定邮箱</a></div>
            </div>
          </li>

          <li class="loginout"><a><i class="iconfont iconloginOut" ></i></a></li>
        </ul>
      <!-- </div> -->
    </div>
</template>
<script>
export default {
    mounted(){
      console.log('用户信息')
    },
    data(){

      return{
        // show:false
      }

    },
   methods:{
    //  get_user(){
       
    //    this.show = true;
    //    console.log(this.show)

    //  }

   }

}
</script>