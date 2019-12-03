<template>
  <div class="content">
    <!-- <h3>活动列表</h3> -->
    <!-- <div class="serch"> -->
      <!-- <div class="btn-select"> -->
      <title-list  content="活动列表"></title-list>
      <div>
        <el-form ref="form" :model="form" label-width="80px" style="height:100%;display:flex;flex-wrap:wrap">
          <template>
              <el-form-item label="活动名称">
                <el-input v-model=" form.inputs"></el-input>
              </el-form-item>
          </template>
          <template>
             <el-form-item label="活动区域" prop="region">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
          </template>
          <template>
              <el-form-item label="活动时间">
                <el-col :span="10">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="10">
                  <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" >查询</el-button>
              </el-form-item>
          </template>
        </el-form>
      </div> 
      <div class="page_list"> 
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
          <el-table-column
            label="操作"
            width="130">
            <template slot-scope="scope">
              <el-button size="mini" type="text" @click="edit(null,'新增')"><i class="iconfont icon-add"></i></el-button>
              <el-button type="text" size="small" @click="edit(1,'编辑')"><i class="iconfont iconicon_edit"></i></el-button>
              <el-button type="text"  size="mini" ><i class="iconfont  icon-delete"></i></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
       <div class="page">
        <!-- <span class="demonstration">完整功能</span> -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="12">
        </el-pagination>
      </div>
      <div class="fade" v-show="fade_show"> 
        <div class="fade_info_max">
          <div class="fade_title">
            <!-- <div v-show="show_edit">编辑</div> -->
            <div >{{title}}</div>
            <div v-on:click="closes()"><i class="iconfont icon-close"></i></div>
            
          </div>
          <ul class="info_list">
            <li>
              <label for="">活动名称：</label>
              <input type="text">
            </li>
            <li>
              <label for="">活动时间：</label>
              <input type="text">
            </li>
            <li>
              <label for="">日期：</label>
              <input type="text">
            </li>
          </ul>
          <div class="fade_footer">
            <button class="prmary" >保存</button>
            <button class="default">取消</button>
          </div>
        </div>
      </div>
  </div>

</template>

<script>
import Vue from 'vue'
import titlelist from '@/components/titlelist.vue'  
  export default {
    components: {
      'title-list':titlelist
    }, 
    props:{
      content:'活动列表'
    },


     data: function () {
      return {
        title:"编辑",
        fade_show: false,//弹窗是否显示
        show_edit: false,//编辑
        show_add: false,//新增
        form:{
          input: 'input框',
          inputs: '',
          data1: '',
          data2: '',
          region: '',
        },
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        , {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        // , {
        //   date: '2016-05-06',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // },
        // , {
        //   date: '2016-05-06',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // },
        // , {
        //   date: '2016-05-06',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // },
        , {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        currentPage4: 4,//分页

        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          value1:''
        }
      };
    },
    mounted () {
      // console.log(1236547899)
    },
    methods:{
      change(e) {
        this.$forceUpdate()
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      //编辑
      edit(id,title){
        this.fade_show = true;
        this.show_edit = false;
        this.title = title;
      },
      //弹窗关闭
      closes(){
        this.fade_show = false;
      }

    }
  }
</script>
<style scoped lang="scss">
@import '@/assets/style/base.scss';
.prmary{
  margin-right: .1rem;
  @include btn-prmary();
}

.default{
   @include btn-default()
}


</style>