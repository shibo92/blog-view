<template>
  <div>
    <el-row class="top-margin-20">
      <el-col :span="3" :offset="4">
        <el-select v-model="blog.type" placeholder="类型">
          <el-option v-for="item in blogTypes" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="3">
        <el-select v-model="blog.categoryId" placeholder="分类">
          <el-option v-for="item in blogCategory" :key="item.id" :label="item.content" :value="item.id">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="10">
        <el-input v-model="blog.title" placeholder="标题"></el-input>
      </el-col>
    </el-row>
    <el-row class="top-margin-20">
      <el-col :span="16" :offset="4">
        <vue-editor v-model="blog.content" ref="blogContext"></vue-editor>
      </el-col>
      <el-col :span="3"/>
    </el-row>
    <div style="text-align:center" class="top-margin-20">
      <el-button type="primary" @click="submit">提交</el-button>
    </div>
  </div>
</template>
<script>
  import {Fetch} from '@/assets/js/http'
  import vueEditor from "../components/VueEditor.vue"

  export default {
    data() {
      return {
        blogTypes: [],
        blogCategory:[],
        blog: {
          type: null,
          categoryId: null,
          title: null,
          label: null,
          content: null
        },
      }
    },
    created() {
      this.getBlogTypes()
      this.getCategory()
    },
    /*watch: {
      blog: {
        handler: function (newVal) {
        },
        deep: true
      }
    },*/
    components: {vueEditor},
    methods: {
      getBlogTypes() {
        Fetch(this.$httpConfig.types, '', "GET").then((res) => {
          this.blogTypes = res.data.data
        })
      },
      getCategory() {
        Fetch(this.$httpConfig.categories, '', "GET").then((res) => {
          this.blogCategory = res.data.data
        })
      },
      submit() {
        this.blog.content = this.$refs.blogContext.content;
        Fetch(this.$httpConfig.saveBlog, this.blog, "POST").then((res) => {
          let resultData = res.data
          if (resultData.code == '00') {
            alert("保存成功")
          } else {
            alert(res.data.message)
          }
        })
      }
    },
  }
</script>

<style scoped="">
  .top-margin-20 {
    margin-top: 20px
  }
</style>
