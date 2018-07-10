let remoteHost = ''
if (process.env.NODE_ENV === 'production') {
  remoteHost = 'http://localhost:8889'
} else {
  remoteHost = 'http://localhost:8090'
}
const config = {
  types: remoteHost + '/blogs/types', // 获取博客类型（转载 or 原创）
  getLeftBar: remoteHost + '/blogs/leftbar', // 左侧导航栏,
  categories: remoteHost + '/categories/', // 获取博客类别
  blogs: remoteHost + '/categories/:categoryId/blogs/', // 博客列表
  blog: remoteHost + '/categories/:categoryId/blogs/:blogId', // 博客列表
  saveBlog: remoteHost + '/blogs/', // 博客列表
}
// 需要让外部拿到
export default config
