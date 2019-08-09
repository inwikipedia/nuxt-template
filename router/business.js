// 商城相关页面路由列表
const Business = function (resolve) {
  // 1: dir.   地址
  // 2: name.  路由名称
  // 3: title. 文档标题
  const r = (dir, name, title) => {
    return {
      name,
      path: `/${name}`,
      alias: `${name === 'index' ? '/' : ''}`,
      component: resolve(__dirname, `../pages/${dir}.vue`),
      meta: {
        title
      }
    }
  }
  return [
    r('Login/index', 'index', '登录'),
    r('Upload/upload', 'upload', '上传')
  ]
}
export default Business
