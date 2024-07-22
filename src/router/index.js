import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/Layout'
// 公共路由
export const constantRoutes = [
    {
      path: '/login',
      component: () => import('@/views/login'),
      hidden: true
    },
    {
      path: '/index',
      component: Layout,
      redirect: 'index',
      children: [
        {
          path: 'index',
          component: () => import('@/Layout/index'),
          name: 'Index',
          meta: { title: '首页', icon: 'dashboard', affix: true }
        }
      ]
    },
  ]
  // 防止连续点击多次路由报错
  let routerPush = Router.prototype.push;
  Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(err => err)
  }
  
  export default new Router({
    mode: 'history', // 去掉url中的#
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })
  