<template>
  <el-scrollbar>
      <el-menu
       :collapse="isCollapse"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        router
        unique-opened
      >
      <a href="/" class="logo">
        <img src="../../assets/vue.svg">
        <h1>数据中台</h1>
      </a>
        <el-menu-item index="/">
          <el-icon><HomeFilled /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-sub-menu
          v-for="menu in menus"
          :key="menu.index"
          :index="menu.index"
        >
          <template #title>
            <el-icon><component :is="menu.icon" /></el-icon>
            <span>{{ menu.title }}</span>
          </template>
          <el-menu-item
            v-for="item in menu.items"
            :key="item.index"
            :index="item.index"
          >
            {{ item.title }}
          </el-menu-item>
          <el-sub-menu
            v-for="submenu in menu.submenus"
            :key="submenu.index"
            :index="submenu.index"
          >
            <template #title>{{ submenu.title }}</template>
            <el-menu-item
              v-for="subitem in submenu.items"
              :key="subitem.index"
              :index="subitem.index"
            >
              {{ subitem.title }}
            </el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  Box,
  Coin,
  Document,
  Headset,
  HomeFilled,
  Menu as IconMenu,
  Location,
  ScaleToOriginal,
  Setting,
  SetUp,
} from '@element-plus/icons-vue'

export default defineComponent({
  setup() {
    const defaultActive = ref('2')
    const menus = ref([
      // {
      //   index:'1',
      //   title:'首页',
      //   icon: HomeFilled,
      //   items: [
      //     { index: '/', title:'首页' },
      //   ]
      // },
      {
        index: '2',
        title: '系统管理',
        icon: SetUp,
        items: [
          { index: '/system/user', title: '用户管理' },
          { index: '/system/role', title: '角色管理' },
          { index: '/system/menu', title: '菜单管理' },
        ],
        submenus: [
          {
            index: '2-4',
            title: '日志管理',
            items: [
              { index: '/system/operlog/operator', title: '操作日志' },
              { index: '/system/operlog/login', title: '登录日志' },
            ],
          },
        ],
      },
      {
        index: '3',
        title: '系统监控',
        icon: Headset,
        items: [
          { index: '/monitor/time', title: '定时任务' },
          { index: '/monitor/data', title: '数据监控' },
        ],
      },
      {
        index: '4',
        title: '数据API',
        icon: ScaleToOriginal,
        items: [
          { index: '/dataapi/server', title: '数据服务' },
          { index: '/dataapi/mask', title: '数据脱敏' },
          { index: '/dataapi/apilog', title: 'API日志' },
        ],
      },
      {
        index: '5',
        title: '数据集成',
        icon: Box,
        items: [
          { index: '/integration/templete', title: '调度模板' },
          { index: '/integration/batching', title: '任务批量构建' },
          { index: '/integration/creation', title: '任务构建' },
          { index: '/integration/management', title: '实例管理' },
          { index: '/integration/executionlog', title: '执行日志' },
          { index: '/integration/monitor', title: '资源监控' },
        ],
      },
      {
        index: '6',
        title: '数据资产',
        icon: Coin,
        items: [
          { index: '/dataassets/datasource', title: '数据源' },
        ],
      },
    ])
    const isCollapse=ref(false)
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }

    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }

    return {
      defaultActive,
      menus,
      handleOpen,
      handleClose,
      isCollapse,
    }
  },
})
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo{
  width: 200px;
  height: 100vh;
}
.el-menu {
  &.el-menu--collapse{
    width: 60px;
    & h1{
      display: none;
    }
  }
}
.logo{
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  text-decoration: none;
  color: black;
  height: 40px;
  text-align: center;
  padding-top: 10%;
  h1{
    font-size:26px,
    
  }
  img{
    width: 30px;
    height: 30px;
  }
}
</style>