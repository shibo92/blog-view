<template>
  <div class="custom-tree-container">
    <div class="block">
      <p>使用 render-content</p>
      <el-tree
        :data="categoryTreeDate"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
        :render-content="renderContent">
      </el-tree>
    </div>
    <el-button type="primary" plain @click="this.saveCategories">提交</el-button>

  </div>
</template>

<script>
  /** @jsx React.DOM */
  import {Fetch} from '@/assets/js/http'

  export default {
    data() {
      return {
        categoryTreeDate: [],
        updateCategoryTreeDate: [],
        removeCategoryTreeDate: [],
        saveCategoryTreeDate: [],
      }
    },
    created() {
      Fetch(this.$httpConfig.getLeftBar, '', 'GET').then((res) => {
        let categoryList = res.data.data;
        this.categoryTreeDate = JSON.parse(JSON.stringify(categoryList))
//        this.updateCategoryTreeDate = JSON.parse(JSON.stringify(categoryList))
      })
    },
    methods: {
      append(data) {
        const newChild = { id:this.get32UUID(), pid:data.id, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
        this.saveCategoryTreeDate.push(newChild)
      },
      remove(node, data) {
        this.removeCategoryTreeDate.push(data);
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
      renderContent(h, { node, data, store }) {
        return (
          <span class="custom-tree-node">
            <span>{node.label}</span>
            <span>
              <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
              <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
            </span>
          </span>
        );
      },
      saveCategories(){
        let requestParams = {
          saveCategoryJson: this.saveCategoryTreeDate,
          updateCategoryJson: this.updateCategoryTreeDate,
          removeCategoryJson: this.removeCategoryTreeDate
        }
        Fetch(this.$httpConfig.categories, requestParams, 'POST').then((res) => {
          if (res.data.code == '00') {
            alert("保存成功")
          } else {
            alert(res.data.message)
          }
        })
      }
    }
  };
</script>

<style>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
