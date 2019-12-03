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
             <NavMenu :navMenus="menuData"></NavMenu>
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
            get_menu().then(res=>{
              this.menuData=this.formatData(res);
              console.log(this.menuData);
            }).catch (err => {
                console.log(err);
            })
        },
        formatData(data){
            let save=[];
            data.forEach((item)=>{
                let big={};
                big.entity={};
                big.entity.alias=item.text;
                big.entity.icon=item.icon;
                big.entity.name=item.viewURI;
                if(item.children!=null&&item.children.length>0){
                    big.childs=this.formatData(item.children);
                }
                save.push(big);
            })
            return save;
        }
    },
   data: function () {
      return {
          activeIndex: 'aa',
          menuData:[],
      };
    },


}
</script>
