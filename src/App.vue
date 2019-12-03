<template>
  <div id="app">
    <menus ref = "menus"></menus>
  </div>
</template>
<script>
import Vue from 'vue'
import menus from '@/components/menu.vue'
export default {
  components: {
      'menus': menus
    },
  name: 'App',
   data: function () {
     return{

     }

    },
    methods:{
    }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
