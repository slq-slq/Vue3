<template>
    <div class="login">
        <el-form class="login-form" :model="loginForm" :rules="loginRules" ref="loginForms">
            <h3 class="title">湖南科技大学 数据中台</h3>
            <el-form-item prop="username">
                <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="账号">
                    <template #prefix>
                        <User style="width: 1em; height: 1em; margin-right: 8px" />
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="loginForm.password" type="password" auto-complete="off" placeholder="密码"
                    @keyup.enter="handleLogin">
                    <template #prefix>
                        <Lock style="width: 1em; height: 1em; margin-right: 8px" />
                    </template>
                </el-input>
            </el-form-item>
            <el-checkbox v-model:value="loginForm.rememberMe" style="margin: 0px 0px 25px 0px">记住密码</el-checkbox>

            <el-form-item style="width: 100%">
                <el-button :loading="loading" type="primary" style="width: 100%" @click="handleLogin">
                    登录
                </el-button>
                <div style="float: right" v-if="register">
                    <router-link class="link-type" :to="'/register'">立即注册</router-link>
                </div>
            </el-form-item>

        </el-form>
        <!--  底部  -->
        <div class="el-login-footer">
            <span>米斯卡,莫斯卡,米老鼠</span>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { reqLogin } from '../api/user';
import { ElNotification } from 'element-plus';
import useUserStore from '../store/modules/user';
import { useRouter, useRoute } from "vue-router";

let $router = useRouter()
let $route = useRoute()

let codeUrl = ref("")
let loginForm = ref({
    username: "admin",
    password: "admin123",
    rememberMe: false,
    code: "",
    uuid: ""
})
let loginForms = ref()
let loading = ref(false)
let captchaOnOff = ref(true)
let register = ref(true)
let userStore = useUserStore()

//校验表单
let loginRules = {
    username: [
        { required: true, trigger: "blur", message: "请输入您的账号" },
        { min: 2, max: 20, message: '用户账号长度必须介于 2 和 20 之间', trigger: 'blur' }
    ],
    password: [
        { required: true, trigger: "blur", message: "请输入您的密码" },
        { min: 5, max: 20, message: '用户密码长度必须介于 5 和 20 之间', trigger: 'blur' }
    ]
}

//登录
const handleLogin = () => {
    loginForms.value.validate(async(valid) => {
        if (!valid) return;
        loading.value = true
        try {
            await userStore.userLogin(loginForm.value)
            loading.value = false

            $router.push({path:'/'})

            ElNotification({
                type: 'success',
                message: "欢迎回来",
                title: `Hi! 你好`
            })
        } catch(error) {
            console.log(error);
            loading.value = false
            ElNotification({
                type: 'error',
                message: error.message
            })
        }
    })
}
</script>

<style scoped lang="scss">
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('../assets/images/login-background.jpg');
    background-size: cover;
}

.title {
    margin: 0px auto 30px auto;
    text-align: center;
    font-size: 20px;
    font-weight: bold
}

.login-form {
    border-radius: 6px;
    width: 400px;
    padding: 25px 25px 5px 25px;
    background-color: #fff;

    .el-input {
        height: 38px;

        input {
            color: #ffffff;
            height: 38px;
        }
    }

    .input-icon {
        height: 39px;
        width: 14px;
        margin-left: 2px;
    }
}

.login-tip {
    font-size: 13px;
    text-align: center;
}

.login-code {
    width: 33%;
    height: 38px;
    float: right;

    img {
        cursor: pointer;
        vertical-align: middle;
    }
}

.el-login-footer {
    height: 40px;
    line-height: 40px;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-family: Arial;
    font-size: 12px;
    letter-spacing: 1px;
}

.login-code-img {
    height: 38px;
}

.el-textarea__inner,
.el-input__inner {
    background: transparent;
}
</style>