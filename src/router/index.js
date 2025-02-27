import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from './routes'

let router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
    //滚动行为
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
});

export default router