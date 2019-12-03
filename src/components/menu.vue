<template>
<div>
    <div v-if="$route.meta.keepAlive">
        <headers></headers>
        <el-row class="tac" >
        <el-col :span="4" class="nav">
            <el-menu style="width:200px;min-height: 100vh;"
            background-color="#fff"
            text-color="#000"
            active-text-color="#000"
            :default-active="activeIndex"
            router
            >
            <!-- <NavMenu :navMenus="menuData"></NavMenu> -->
            </el-menu>
        </el-col>
        <router-view></router-view>
        </el-row>
    </div>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
</div>

</template>

<script>
import Vue from 'vue'
import NavMenu from "@/components/NavMenu.vue";
import headers from '@/components/header.vue';
import {get_menu} from "@/API/login";
export default {
  components: {
    NavMenu: NavMenu
  },
  components: {
      'headers':headers,
      'NavMenu': NavMenu
    },
  name: 'App',
  mounted () {
     this.menu();
  },
    methods : {
        menu(){
            // console.log("menu中的方法")
            // console.log('菜单列表')
            // console.log(get_menu())
            get_menu().then(res=>{
                console.log(res);
            }).catch (err => {
                console.log(err);
            })
        }
    },
   data: function () {
      return {
        activeIndex: 'aa',

      //   menuData: [
      //   {
      //     //一级
      //     entity: {
      //       name: "/activity",
      //       icon: "el-icon-message",
      //       alias: "活动列表"
      //     }
      //   },

      //   {
      //     //一级
      //     entity: {
      //       name:'',
      //       icon: "el-icon-message",
      //       alias: "基地"
      //     },
      //     //二级
      //     childs: [
      //       {
      //         entity: {
      //           name: "/base/list",
      //           icon: "el-icon-loading",
      //           alias: "基地列表",
      //         }
      //       },
      //       {
      //         entity: {
      //           name: "/base",
      //           icon: "el-icon-bell",
      //           alias: "基地详情",
      //           //  value: { path: "/base2/list" }
      //         }
      //       },
      //       {
      //         entity: {
      //           name: "menuManage",
      //           icon: "el-icon-edit",
      //           alias: "菜单管理",
      //           value: "/system/menu"
      //         }
      //       },
      //       {
      //         entity: {
      //           name: "groupManage",
      //           icon: "el-icon-mobile-phone\r\n",
      //           alias: "分组管理",
      //           value: "/system/group"
      //         }
      //       }
      //     ]
      //   },
      //   {
      //     //一级
      //     entity: {
      //       name: "",
      //       icon: "el-icon-news",
      //       alias: "三级菜单"
      //     },
      //     //二级
      //     childs: [
      //       {
      //         entity: {
      //           name: "accountManage",
      //           icon: "el-icon-phone-outline\r\n",
      //           alias: "帐号管理",
      //           value: ""
      //         },
      //         //三级
      //         childs: [
      //           {
      //             entity: {
      //               name: "emailManage",
      //               icon: "el-icon-sold-out\r\n",
      //               alias: "邮箱管理",
      //               value: "/content/email"
      //             }
      //           },
      //           {
      //             entity: {
      //               name: "passManage",
      //               icon: "el-icon-service\r\n",
      //               alias: "密码管理",

      //               value: "/content/pass"
      //             }
      //           }
      //         ]
      //       },
      //       {
      //         entity: {
      //           name: "integralManage",
      //           icon: "el-icon-picture",
      //           alias: "积分管理",

      //           value: "/user/integral"
      //         }
      //       }
      //     ]
      //   },
      //   {
      //     //一级
      //     entity: {
      //       name: "contentManage",
      //       icon: "el-icon-rank",
      //       alias: "四级菜单"
      //     },
      //     //er级
      //     childs: [
      //       {
      //         entity: {
      //           name: "classifyManage2",
      //           icon: "el-icon-printer",
      //           alias: "分类管理"
      //         },

      //       }
      //     ]
      //   }
      // ]

      };
    },


}
</script>
