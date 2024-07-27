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
    },
    {
        path:'/system',
        component:() => import('@/Layout/index.vue'),
        name:'system',
        meta:{
            title:'系统管理'
        },
        children:[
            {
                path:'/system/user',
                component:() => import('@/views/System/user/index.vue'),
                name:'User',
                meta:{
                    title:'用户管理',
                }
            },
            {
                path:'/system/role',
                component:() => import('@/views/System/role/index.vue'),
                name:'Role',
                meta:{
                    title:'角色管理',
                }
            },
            {
                path:'/system/menu',
                component:() => import('@/views/System/menu/index.vue'),
                name:'Menu',
                meta:{
                    title:'菜单管理',
                }
            },
            {
                path:'/system/operlog',
                component:() => import('@/views/System/Operlog/index.vue'),
                name:'Operlog',
                meta:{
                    title:'日志管理',
                },
                children:[
                    {
                        path:'/login',
                        component:() => import('@/views/System/Operlog/login.vue'),
                    },
                    {
                        path:'/operator',
                        component:() => import('@/views/System/Operlog/operater.vue'),
                    }
                ]
            }
        ]
    },
    {
        path:'/monitor',
        component:() => import('@/Layout/index.vue'),
        name:'Monitor',
        meta:{
            title:'系统监控'
        },
        children:[
            {
                path:'/monitor/data',
                component:() => import('@/views/monitor/data/index.vue'),
                name:'Data',
                meta:{
                    title:'数据监控',
                }
            },
            {
                path:'/monitor/time',
                component:() => import('@/views/monitor/time/index.vue'),
                name:'Time',
                meta:{
                    title:'定时任务',
                }
            },
        ]
    },
    {
        path:'/dataapi',
        component:() => import('@/Layout/index.vue'),
        name:'dataapi',
        meta:{
            title:'系统管理'
        },
        children:[
            {
                path:'/dataapi/apilog',
                component:() => import('@/views/dataapi/apiLog/index.vue'),
                name:'ApiLog',
                meta:{
                    title:'API日志',
                }
            },
            {
                path:'/dataapi/mask',
                component:() => import('@/views/dataapi/mask/index.vue'),
                name:'Mask',
                meta:{
                    title:'数据脱敏',
                }
            },
            {
                path:'/dataapi/server',
                component:() => import('@/views/dataapi/server/index.vue'),
                name:'Server',
                meta:{
                    title:'数据服务',
                }
            },
            
        ]
    },
    {
        path:'/integration',
        component:() => import('@/Layout/index.vue'),
        name:'integration',
        meta:{
            title:'数据集成'
        },
        children:[
            {
                path:'/integration/batching',
                component:() => import('@/views/itegration/batching/index.vue'),
                name:'batching',
                meta:{
                    title:'任务批量管理',
                }
            },
            {
                path:'/integration/creation',
                component:() => import('@/views/integration/creation/index.vue'),
                name:'creation',
                meta:{
                    title:'任务构建',
                }
            },
            {
                path:'/integration/executioning',
                component:() => import('@/views/integration/executioning/index.vue'),
                name:'executioning',
                meta:{
                    title:'执行日志',
                }
            },
            {
                path:'/integration/management',
                component:() => import('@/views/integration/management/index.vue'),
                name:'management',
                meta:{
                    title:'实例管理',
                }
            },
            {
                path:'/integration/monitor',
                component:() => import('@/views/integration/monitor/index.vue'),
                name:'inmonitor',
                meta:{
                    title:'资源监控',
                }
            },
            {
                path:'/integration/templete',
                component:() => import('@/views/integration/templete/index.vue'),
                name:'templete',
                meta:{
                    title:'调度模板',
                }
            },
            
        ]
    },
    {
        path:'/dataassets',
        component:() => import('@/Layout/index.vue'),
        name:'dataassets',
        meta:{
            title:'数据资产'
        },
        children:[
            {
                path:'/dataassets/datasource',
                component:() => import('@/views/dataassets/dataSource/index.vue'),
                name:'datasource',
                meta:{
                    title:'数据源',
                }
            }
        ]
    }
]