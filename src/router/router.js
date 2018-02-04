
export const APP_ROUTE = [
  {
    path: '/',
    name: '首页',
    component: resolve => { require(['../pages/home.vue'], resolve) }
  },
  {
    path: '/item/:id/:name',
    name: '列表',
    component: resolve => { require(['../pages/item.vue'], resolve) }
  },
  {
    path: '/about/:id',
    name: '关于',
    component: resolve => { require(['../pages/about.vue'], resolve) }
  }
]
