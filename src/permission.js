import router from '@/router/index'
import useUserStore from './store/modules/user';
import pinia from './store';
import { GET_TOKEN } from './utils/token';

let userStore = useUserStore(pinia)


router.beforeEach(async (to, from, next) => {

    let username = userStore.username
    let token = GET_TOKEN()

    if (token) {
        if (to.path == '/login') {
            //next({ path: '/' })
            next()
        }
        else {
            if (username) {
                next()
            } else {
                next({path:'/login',query:{redirect:to.path}})
            }
        }
    }
    else {
        if (to.path == '/login') {
            next();
        }
        else {  
            next('/login')
        }
    }
})

router.afterEach((to, from) => {

})