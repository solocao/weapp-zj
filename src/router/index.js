// 首个路由为首页
module.exports = [{
  path: 'pages/index/main',
  name: 'Index',
  config: {
    navigationBarTitleText: '首页',
    // 引入UI组件，后面会讲到
    usingComponents: {
      'i-button': '../../../static/iview/button/index',
      'wux-avatar': '../../../static/wux/avatar/index'
    }
  }
},
{
  path: 'pages/counter/main',
  name: 'Counter',
  config: {
    navigationBarTitleText: '来了'
    // 引入UI组件，后面会讲到
    // usingComponents: {
    //   'zan-button': '../dist/btn/index'
    // }
  }
}]
