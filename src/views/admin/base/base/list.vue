<template>
   <div class="content1 bl-w-flex-c">
       <div class="info">
           <div class="name">
               <label for="" @click="get_password()">{{name}}</label>
               <input type="text" v-model="password" >
               <div>{{title}}</div>
           </div>
           <button @click="add(2, 5, 3)">登录</button>
           <button @click="timeout(20000)">返回</button>
           <!-- <button @click="loadImageAsync('@/assets/images/logo.png')">加载</button> -->
           <button @click="loadImageAsync('错误图片')">加载</button> 
           <button @click="get_tarage()">测试</button>

       </div>
        <h2>vue过滤器:</h2>
    <!-- 局部过滤器 -->
    <p><b>{{ 1575010446 | formatDate }}</b></p>
    <!-- 全局过滤器 -->
    <!-- <b><b>{{ 1533527037000 | formatDate }}</b></p> -->
    </div> 
    
</template>
<script >
export default {
    filters: {
      /* 格式化时间戳 */
      formatDate (val) {
        const date = new Date(val);
        const year = date.getFullYear();
        const month = date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
        const day = date.getDate() > 9 ? date.getDate() + 1 : `0${date.getDate() + 1}`;
        const hours = date.getHours()>9 ? date.getHours()+1 : `0${date.getHours() + 1}`;
        const minutes = date.getMinutes()>9 ? date.getMinutes()+1 : `0${date.getMinutes() + 1}`;
        const second = date.getSeconds()>9 ? date.getSeconds()+1 : `0${date.getSeconds() + 1}`
        return `${year}-${month}-${day} ${hours}:${minutes}:${second}`;
        console.log(val);
      }
    },
    data () {
        return {
            name:'昵称：',
            title:'123',
            password:'',
            
        }
    },
    methods: {
            async test3() {
                return "33";
            },
            add(...values){
            let sum = 0;

            for (var val of values) {
                sum += val;
            }
            console.log(sum)
            return sum;
            },
            timeout(ms) {
                return new Promise((resolve, reject) => {
                    setTimeout(resolve, ms, 'done');
                    // console.log('成功')
                });
            },
            loadImageAsync(url) {
            return new Promise(function(resolve, reject) {
                const image = new Image();

                image.onload = function() {
                resolve(image);
                };

                image.onerror = function() {
                // reject(new Error('Could not load image at ' + url));
                reject(new Error('Could not load image at ' + url));
                };
                image.src =url;

                // image.src ='@/assets/images/logo.png';
            });
            },
            get_password(){
                // this = that,
               this.title = this.name+this.password
            },
            get_tarage(){
            const target = { a: 1, b: 1 };
            const source1 = { b: 6, c: 7 };
            const source2 = { c: 9 };
            Object.assign(source2,target, source1,);
            // console.log(source2);
            const v1 = 'abc';
            const v2 = true;
            const v3 = 10;
            const obj = Object.assign({}, v2, v1, v3);
            // console.log(obj);
            
            // let obj1 = {a: 1};
            // let obj2 = {b: 2}; 
            // let obj3 = {};
            // obj3.name = '张三';
            // obj3[obj1] = "天空";
            // obj3[obj2] = '大海';
            // console.log(obj3);//{name: "张三", [object Object]: "大海"}
            // console.log(obj3.toString());
            // console.log(obj1.toString());
            // console.log(obj2.toString());
            // console.log(obj1.toString() === obj2.toString());

            let obj1 = {a: 1}, obj2 = {b: 2};
            const  map = new Map([
                ['name', '张三'],
                ['age', 18],
                ['sex', '男'],
                [obj1, '今天天气很好'],
                [obj2, '适合敲代码'],
                [[1,2], 'hhh']
            ]);
            map.forEach((item)=>{
                // console.log(item[0]);
            })
            // console.log(map);
            // console.log(map.size);

             // set和get
            map.set('friends', ['赵六', '力气']).set(['dog'], '小花');
            // console.log(map);
                                // Array(8)
                                // 0:{"" => "张三"}
                                // 1:{"age" => 18}
                                // 2:{"sex" => "男"}
                                // 3:{Object => "今天天气很好"}
                                // 4:{Object => "适合敲代码"}
                                // 5:{Array(2) => "hhh"}
                                // 6:{"friends" => Array(2)}
                                // 7:{Array(1) => "小花"}
                                // length:8
            // console.log(map.get('name'));//undefined
            // console.log(map.get(obj1));//今天天气很好
            // console.log(map.keys());//键
            // console.log(map.values());//值
            // console.log(map.entries())//键值对
            //遍历
            map.forEach(function (value, index) {
            // console.log(index + ':' + value);
         })

         function sum(num1 = 20, num2 = 10) {
            console.log(num1 + num2);
            }
            sum();//30
            // sum(10, 30);//40
            }

        },
    mounted() {
        console.info(this.test3())
        this.test3().then(result=>{
            console.info(`我輸出了${result}`)
        });
        console.info("我在你後面");

    }


}
</script>>



<style lang="scss">
.content1{
    height:100vh;
}
    .info{
        padding:.6rem;
        background: #fff;
        border-radius: 5px;
        text-align: center;
        .name{
            >label{
                display: inline-block;
                font-size: 18px;
            }
            >input{
                display: inline;
                height: 30px;
                margin-right: .05rem;
                border: none;
                border: 1px solid $c-bd-dark; 
                border-radius: 3px;
            }
        }
        >button{
            margin-top:20px;
            width: auto; 
            padding: 6px;
            outline: none ;
            border: none;
            border-radius: 3px;
            background: #2189FF;
            // margin-right: .1rem;
            color: #fff;
            &:hover{
                background: rgba(33, 137, 255, 0.7);
            }
        }
    }

</style>