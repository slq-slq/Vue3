import request from "../../utils/request";
const API = {
    LOGIN_URL: '/login',
}

//登录接口
export const reqLogin = (data) =>{
    return request.post(API.LOGIN_URL, data)
}

