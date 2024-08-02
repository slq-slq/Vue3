<template>
    <div class="header">
        <!-- 图标 -->
        <el-icon size="25" @click="isCollapse = !isCollapse">
            <Expand v-show="isCollapse" />
            <Fold v-show="!isCollapse" />
        </el-icon>
        <!-- 面包屑 -->
        <breadcrumb id="breadcrumb-container" class="breadcrumb-container"/>
        <!-- <top-nav id="topmenu-container" class="topmenu-container" v-if="topNav"/> -->

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
                <a-menu-item><router-link to="/login">退出登录</router-link></a-menu-item>
              </a-menu>
            </template>
        </a-dropdown>
        </div>   
    </div>
</template>
<script setup lang="ts">
import { isCollapse } from './isCollapse'
const userName = ref('admin')
import { ref, reactive, watch, onMounted } from 'vue';
import { RouteLocationMatched } from 'vue-router';
import { useRoute } from 'vue-router';
import Breadcrumb from '../../components/breadcrumb/index.vue'
// import TopNav from '../../components/topnav/index.vue'

const route = useRoute();
const breadList: RouteLocationMatched[] = reactive([]);

const getMatched = () => {
  breadList.length = 0; // 清空数组
  breadList.push(...route.matched); // 添加新的匹配项
};

onMounted(() => {
  getMatched();
});

watch(() => route.path, (newPath, oldPath) => {
  getMatched();
});
</script>
<style scoped>
.header{
    display: flex;
    align-items: center;
    height: 50px;
    background-color:#e9e9eb;
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