<template>
  <el-table
    :data="this.blogList"
    class="blogListTable" @row-click="viewBlog">
    <el-table-column
      prop="title">
    </el-table-column>
  </el-table>
</template>

<script>
  import {Fetch} from '@/assets/js/http'

  export default {
    data() {
      return {
        blogList: []
      }
    },
    created() {
      this.getCategoryIdFromUrl()
    },
    watch: {
      // 需要监听路由变化
      '$route'(to, from) {
        this.getCategoryIdFromUrl()
      }
    },
    methods: {
      getCategoryIdFromUrl() {
        let requestParams = {
          categoryId: this.$route.params.categoryId
        }
        this.getBlogList(requestParams);
      },
      getBlogList(requestParams){
        // get blogList by categoryId
        Fetch(this.$httpConfig.blogs, requestParams, "GET").then((res) => {
          this.blogList = res.data.data;
        })
      },
      viewBlog(row) {
        // change router path to blogDetail.vue
        this.$router.push('/categories/' + row.categoryId + '/blogs/' + row.id)
      }
    }
  }
</script>
<style>
  .blogListTable {
    width: 100%;
    font-size:30px;
    margin-top:-15px;
  }

  .blogListTable th {
    display: none;
  }

  .blogListTable td{
    height: 50px;
  }

  .blogListTable .cell {
    line-height: 50px;
  }
</style>
