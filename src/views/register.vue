<template>
    <div class="register">
        <el-form :model="registerForm" :rules="registerRules" class="register-form">
            <h3 class="title">数据中台</h3>

            <el-form-item prop="username">
                <el-input v-model="registerForm.username" type="text" auto-complete="off" placeholder="账号">
                    <template #prefix>
                        <User style="width: 1em; height: 1em; margin-right: 8px" />
                    </template>
                </el-input>
            </el-form-item>

            <el-form-item prop="password">
                <el-input v-model="registerForm.password" type="password" auto-complete="off" placeholder="密码"
                    @keyup.enter.native="handleRegister">
                    <template #prefix>
                        <Lock style="width: 1em; height: 1em; margin-right: 8px" />
                    </template>
                </el-input>
            </el-form-item>

            <el-form-item prop="confirmPassword">
                <el-input v-model="registerForm.confirmPassword" type="password" auto-complete="off" placeholder="确认密码"
                    @keyup.enter.native="handleRegister">
                    <template #prefix>
                        <Lock style="width: 1em; height: 1em; margin-right: 8px" />
                    </template>
                </el-input>
            </el-form-item>

            <el-form-item style="width:100%;">
                <el-button :loading="loading" size="medium" type="primary" style="width:100%;"
                    @click.native.prevent="handleRegister">
                    <span v-if="!loading">注 册</span>
                    <span v-else>注 册 中...</span>
                </el-button>
                <div style="float: right;">
                    <router-link class="link-type" :to="'/login'">使用已有账户登录</router-link>
                </div>
            </el-form-item>
        </el-form>

        <div class="el-register-footer">
            <span>云深不知处</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
let codeUrl = ref("")
let registerForm = ref({
    username: "",
    password: "",
    confirmPassword: "",
    code: "",
    uuid: ""
})

let loading = ref(false)
let captchaOnOff = ref(true)

const handleRegister = () => {
    console.log(666666);
}

const equalToPassword = function(rule, value, callback) {
    if (registerForm.value.password !== value) {
        console.log("code error");
        return callback(new Error("两次输入的密码不一致"));
    } else {
        console.log("code error");
        return callback();
    }
};
let registerRules = {
    username: [
        { required: true, trigger: "blur", message: "请输入您的账号" },
        { min: 2, max: 20, message: '用户账号长度必须介于 2 和 20 之间', trigger: 'blur' }
    ],
    password: [
        { required: true, trigger: "blur", message: "请输入您的密码" },
        { min: 5, max: 20, message: '用户密码长度必须介于 5 和 20 之间', trigger: 'blur' }
    ],
    confirmPassword: [
        { required: true, trigger: "blur", message: "请再次输入您的密码" },
        { required: true, validator: equalToPassword, trigger: "blur" }
    ]
}



</script>

<style scoped>
.register {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url("../assets/images/login-background.jpg");
    background-size: cover;
}

.title {
    margin: 0px auto 30px auto;
    text-align: center;
    color: #707070;
}

.register-form {
    border-radius: 6px;
    background: #ffffff;
    width: 400px;
    padding: 25px 25px 5px 25px;

    .el-input {
        height: 38px;

        input {
            height: 38px;
        }
    }

    .input-icon {
        height: 39px;
        width: 14px;
        margin-left: 2px;
    }
}

.register-tip {
    font-size: 13px;
    text-align: center;
    color: #bfbfbf;
}

.register-code {
    width: 33%;
    height: 38px;
    float: right;

    img {
        cursor: pointer;
        vertical-align: middle;
    }
}

.el-register-footer {
    height: 40px;
    line-height: 40px;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: #fff;
    font-family: Arial;
    font-size: 12px;
    letter-spacing: 1px;
}

.register-code-img {
    height: 38px;
}
</style>