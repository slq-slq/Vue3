import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs';

export const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login.vue'),
        name: 'login',
        meta: {
            title: '登录',
            hidden: true,
        }
    },
    {
        path: '/register',
        component: () => import('@/views/register.vue'),
        name: 'register',
        meta: {
            title: '注册',
            hidden: true,
        }
    },
    {
        path: '/',
        component: () => import('@/Layout/index.vue'),
        name: 'index',
        meta: {
            title: '首页',
            hidden: true,
        },
        children:[
            {
                path: '/user',
                component:()=>import('@/views/system/user/index.vue')
            }  
        ]
    },
]