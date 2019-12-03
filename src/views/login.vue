<template>
    <!-- <div class="login bl-c-flex-c"> -->
    <div class="content1">
        <!-- <el-row v-show="false"></el-row> -->
        <div class="login-info">
            <h1>后台管理系统</h1>
            <div class="info-list">
                <h2>用户登录</h2>
                <p>欢迎登录学生后台管理系统</p>
                <div class="box1">
                     <i class="iconfont iconuser"></i>
                    <input type="text" name=""  v-model="username">
                </div>
                <div class="box1">
                    <i class="iconfont iconpassword"></i>
                    <input type="password" name=""  v-model="password">
                </div>
                <div class="info-pass">
                    <p  class="p_flex" ><input id="remember"  type="checkbox" v-model="ischecked"> 记住密码</p>
                    <p class="color">忘记密码？</p>
                </div>
                <button class="footer" @click="get_login()">登录</button>
            </div>
        </div>

    </div>
</template>
<script>
import Vue from 'vue'
import {get_login} from "@/API/login";
import toast from '../components/toast'
import store from '@/store/index';
export default {
    components:{
            toast
        },
    data () {
        return {
            ischecked:false,
            username:'',
            password:'',
            access_token:'',
            refresh_token:''
        }
    },
    mounted () {

    },
    methods:{
        get_login(){
            let params={
                username:'admin_'+this.username,
                password:this.password,
            };
            get_login(params).then(res=>{
                console.log(res)
                if(res.data!=null){
                    this.$message({
                        type:'success',
                        message:'登录成功！',
                        duration:1000,
                        onClose:()=>{
                            if(this.ischecked){
                               this.remember();
                               this.username=localStorage.getItem("user");
                               this.password=localStorage.getItem("password")
                            }
                            this.$store.commit('setToken',res.data.access_token);
                            this.$parent.menu();
                            this.$router.push({path: '/activity'})
                        }
                    })
                }
                else{
                        this.$message({
                        type:'error',
                        message:'用户名或密码错误！',
                    })
                }
            }).catch(error=>{
                console.log(error)
            })
        },
        remember(){
            // console.log(localStorage.setItem("user","username"));
            // console.log(this.username);
            let user=this.username;
            // console.log(this.password);
            let password=this.password;
            localStorage.setItem("user",this.username);
            localStorage.setItem("password",this.password);
            console.log(localStorage.getItem("user"));
        }

    }

}
</script>

<style scoped lang="scss">
@import '@/assets/style/base.scss';
   .content1{
       height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        // background: #638096;
        background-image: linear-gradient(#638096, #9198e5);

        .login-info{
            // padding: 1rem 1.3rem;
            // background: #fff;
            // border-radius: 5px;
             >h1{
                 text-align: center;
                color: $c-w;
                font-size: .3rem;
                padding-bottom:.3rem;
            }
           @at-root .info-list{
                padding: .8rem 1.2rem;
                background: #fff;
                border-radius: $c-bdr;
                display: flex;
                align-items: center;
                flex-direction: column;
                 >h2{
                     color: $btn-primary;
                     font-size: .24rem;
                      margin-bottom:.15rem;
                 }
                 >p{
                     color: $btn-primary;
                     font-size: .16rem;
                     margin-bottom:.1rem;
                 }
                 .box1{
                     border: $border-dark;
                     border-radius: $c-bdr;
                     margin-bottom: .2rem;
                     >input{
                         border: none;
                         outline: none;
                     }
                 }
                 .info-pass{
                     width: 2.2rem;
                     display: flex;
                     justify-content: space-between;
                     margin-bottom: .2rem;
                     .p_flex{
                         display: flex;
                         align-items: center;
                         >input{
                             display: inline;
                             margin-right: .05rem;
                             border: none;
                             border: $border-dark;
                         }
                     }
                     .color{
                         color:$btn-primary;
                     }
                 }
                 .footer{
                     @include btn-prmary();
                 }
            }
        }

   }

</style>
