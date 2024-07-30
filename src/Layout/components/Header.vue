<template>
    <div class="header">
        <!-- 图标 -->
        <el-icon size="25" @click="isCollapse = !isCollapse">
            <Expand v-show="isCollapse" />
            <Fold v-show="!isCollapse" />
        </el-icon>
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="/">promotion management</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 下拉菜单 -->
         <div class="a-dropdown-link" >
            <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent style="display: flex; align-items: center;">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
              {{ userName }}
              <el-icon class="el-icon--right" size="15"><arrow-down /></el-icon>
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item key="0">
                  <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    个人中心
                  </a>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item>退出登录</a-menu-item>
              </a-menu>
            </template>
        </a-dropdown>
         </div>
        
    </div>
</template>
<script setup lang="ts">
// import { DownOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import { isCollapse } from './isCollapse'
const userName = ref('admin')
// const isCollapse = ref(false)
</script>
<style scoped>
.header{
    display: flex;
    align-items: center;
    height: 50px;
    background-color: #eee;
}
.el-icon {
    margin-right: 17px;
}
.a-dropdown-link {
    border:none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
}

</style>