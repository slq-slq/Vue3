import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user';
let useUserStore = defineStore('User', {
    // 其他配置...
    state: () => {
        return {
            username: "",
        }
    },
    actions: {
        async userLogin(data) {
            let result = await reqLogin(data)
            if (result.code == 200) {
                console.log(result.token);
                return 'ok'
            }
            else {
                return Promise.reject(new Error(result.message))
            }
        }
    }
})

export default useUserStore;