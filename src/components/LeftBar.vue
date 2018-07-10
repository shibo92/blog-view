<template>
  <el-tree class="left-bar"
           :data="leftBarData"
           :props="defaultProps"
           accordion
           @node-click="handleNodeClick">
  </el-tree>
</template>
<script>
  import {Fetch} from '@/assets/js/http'

  export default {
    data() {
      return {
        leftBarData: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    created() {
      this.getLeftBar()
      this.shoAllBlogs()
    },
    methods: {
      shoAllBlogs(){
        this.$emit('category', 'all');
      },
      handleNodeClick(data) {
        if(data.children.length == 0){
          let categoryId = data.id;
          //send categoryId to parent components(home.vue)
          this.$emit('category', categoryId);
        }
      },
      getLeftBar() {
        Fetch(this.$httpConfig.getLeftBar, '', 'GET').then((res) => {
          this.leftBarData = res.data.data;
        })
      }
    }
  };
</script>
<style>
  .left-bar .el-tree-node__label {
    font-size: 25px;
  }

  .left-bar .el-tree-node {
    margin-bottom: 10px;
  }
</style>
