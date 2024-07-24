<template>
    <div class="header">
        <div class="p">
            <p style="color: #bdc3d0;">
                <el-icon size="25px"><Fold /></el-icon>
                <span>数据中控平台</span>
            </p>
            <div class="user">
                <img style="height: 40px;width: 40px;border-radius:50%;" src="../../assets/images/login-background.jpg" alt="">
                <span>用户名</span>
            </div>
        </div>
        <div class="bread">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
                <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>
<style scoped>
.header {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding-bottom: 5px;
    background-color: #ffffff;
    border-bottom: solid 1px #dcdfe6;
}

.p {
    display: flex;
    justify-content: space-between; /* 两端对齐 */
    align-items: center; /* 垂直居中对齐 */
    padding-left: 10px;
}

.p p {
    display: flex; 
    align-items: center; 
    color: #bdc3d0;
}

.p p .el-icon {
    margin-right: 10px;
}
.bread {
    margin-bottom: 5px;
    padding-left: 10px;
}
.user {
    display: flex;
    align-items: center; /* 确保所有子元素垂直居中对齐 */
    padding: 10px;
}

.user img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px; /* 添加一些间距 */
}

.user span {
    /* 这里可以添加一些样式，例如字体大小 */
}
</style>