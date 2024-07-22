export const constantRoutes = [
  {
      path: '/login',
      component: () => import('@/views/login.vue'),
      name: 'login',
      meta:{
          title:'登录',
          hidden:true,
      }
  },
  {
    path: '/index',
    component: () => import('@/Layout/index.vue'),
    name: 'index',
    meta:{
        title:'首页',
        hidden:true,
    }
},
]