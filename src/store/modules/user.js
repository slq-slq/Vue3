import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user';
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '../../utils/token';
let useUserStore = defineStore('User', {
    // 其他配置...
    state: () => {
        return {
            username: "沈礼谦",
            token:""
        }
    },
    actions: {
        async userLogin(data) {
            let result = await reqLogin(data)
            if (result.code == 200) {
                SET_TOKEN(result.token);
                this.token = result.token
                return 'ok'
            }
            else {
                return Promise.reject(new Error(result.message))
            }
        },

    }
})

export default useUserStore;