// keepAlive: false 缓存页面 true 缓存页面
export const APP_ROUTE = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      componentName: '首页',
      keepAlive: false
    }
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      componentName: '首页',
      keepAlive: false
    },
    component: resolve => { require(['../pages/home.vue'], resolve) }
  },
  {
    path: '/item/:id/:name',
    name: 'item',
    meta: {
      componentName: '列表',
      keepAlive: false
    },
    component: resolve => { require(['../pages/item.vue'], resolve) }
  },
  {
    path: '/about/:id',
    name: 'about',
    meta: {
      componentName: '关于',
      keepAlive: true
    },
    component: resolve => { require(['../pages/about.vue'], resolve) }
  },
  {
    path: '/form',
    name: 'form',
    meta: {
      componentName: '表单校验',
      keepAlive: true
    },
    component: resolve => { require(['../pages/form.vue'], resolve) }
  },
  {
    path: '/list',
    name: 'list',
    redirect: '/list/scroll_list',
    meta: {
      componentName: '装潢',
      keepAlive: true
    },
    component: resolve => { require(['../pages/list.vue'], resolve) },
    children: [
      {
        path: '/list/scroll_list',
        name: 'scroll_list',
        meta: {
          componentName: '装潢',
          keepAlive: false
        },
        component: resolve => { require(['../pages/scroll_list.vue'], resolve) }
      },
      {
        path: '/list/wa_gong',
        name: 'wa_gong',
        meta: {
          componentName: '装潢',
          keepAlive: false
        },
        component: resolve => { require(['../pages/wa_gong.vue'], resolve) }
      },
      {
        path: '/list/zhuang_huang',
        name: 'zhuang_huang',
        meta: {
          componentName: '装潢',
          keepAlive: false
        },
        component: resolve => { require(['../pages/zhuang_huang.vue'], resolve) }
      }
    ]
  },
  {
    path: '/test',
    name: 'test',
    meta: {
      componentName: '上拉加载',
      keepAlive: false
    },
    component: resolve => { require(['../pages/test.vue'], resolve) }
  }
]
