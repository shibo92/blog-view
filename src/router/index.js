import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import {routePath} from '@/router/routePath'

const Home = r => require.ensure([], () => r(require('@/pages/Home.vue')), 'Home')
const NewBlog = r => require.ensure([], () => r(require('@/pages/NewBlog.vue')), 'NewBlog')
const NewCategory = r => require.ensure([], () => r(require('@/pages/NewCategory.vue')), 'Category')
const BlogDetail = r => require.ensure([], () => r(require('@/pages/BlogDetail.vue')), 'BlogDetail')
const BlogList = r => require.ensure([], () => r(require('@/pages/BlogList.vue')), 'BlogList')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: routePath.BlogDetail,
          name: 'BlogDetail',
          component: BlogDetail
        },
        {
          path: routePath.BlogList,
          name: 'BlogList',
          component: BlogList
        }
      ]
    },
    {
      path: routePath.NewBlog,
      name: 'NewBlog',
      component: NewBlog
    },
    {
      path: routePath.NewCategories,
      name: 'NewCategories',
      component: NewCategory
    },
  ]
})
