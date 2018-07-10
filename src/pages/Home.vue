<template>
  <div>
    <el-row>
      <el-col :span="10" :offset="7">
        <img class="banner" src="../assets/img/banner-color-yellow.png"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5" :offset="1">
        <left-bar @category="getCategoryIdFromLeftBar"></left-bar>
      </el-col>
      <el-col :span="18">
        <router-view></router-view>
        <!--<blog-list :blogList="this.blogList"></blog-list>-->
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import TopMenu from "../components/TopMenu.vue"
  import LeftBar from "../components/LeftBar.vue"
//  import BlogList from "../pages/BlogList.vue"

  export default {
    name: 'Home',
    data() {
      return {
        blogList: null,
        categoryId:null,
      };
    },
    components: {TopMenu, LeftBar},
    methods: {
      // category is get by child components(leftBar.vue)
      getCategoryIdFromLeftBar(category) {
        // change router url to blogList.vue
        this.$router.push('/categories/'+category+'/blogs');
      }
    }
  }
</script>
<style>
  .el-row {
    margin-bottom: 20px;
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .banner{
    width: 100%;
    height: 100%;
  }
</style>
