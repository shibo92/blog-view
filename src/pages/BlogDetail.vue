<template>
  <div>
    <div class="title" v-html="blogDetail.title"></div>
    <div class="content" v-html="blogDetail.content"></div>
  </div>
</template>

<script>
  import {Fetch} from '@/assets/js/http'

  export default {
    data() {
      return {
        blogDetail: {}
      }
    },
    created() {
      this.getBlogDetail();
    },
    methods: {
      getBlogDetail() {
        let requestParams = {
          categoryId: this.$route.params.categoryId,
          blogId: this.$route.params.blogId
        }
        Fetch(this.$httpConfig.blog, requestParams, "GET").then((res) => {
          this.blogDetail = res.data.data;
        })
      }
    }
  }
</script>
<style>
  .title {
    font-size:30px;
    margin-left:15%;
  }
</style>
