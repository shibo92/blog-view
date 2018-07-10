<template>
  <div>
    <vue-editor v-model="content" :editorToolbar="customToolbar"></vue-editor>
  </div>
</template>

<script>
  import {VueEditor} from 'vue2-editor'

  export default {
    data() {
      return {
        content: '<h1>输入内容</h1>',
        customToolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block', 'image'],
          [{'list': 'ordered'}, {'list': 'bullet'}],
          [{'header': [1, 2, 3, 4, 5, 6, false]}],
          [{'color': []}, {'background': []}],
          [{'align': []}]
        ]
      }
    },
    components: {
      VueEditor
    }
  }
</script>
<style scoped>
</style>
