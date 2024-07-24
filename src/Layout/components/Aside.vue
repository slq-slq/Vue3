<template>
  <el-row class="tac">
    <el-col :span="24">
      <h5 class="mb-2"><el-icon><Menu /></el-icon>数据中台</h5>
      <el-menu
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item>
          <el-icon><HomeFilled /></el-icon>首页
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
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  Box,
  Coin,
  Document,
  Headset,
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
      {
        index: '1',
        title: '系统管理',
        icon: SetUp,
        items: [
          { index: '1-1', title: '用户管理' },
          { index: '1-2', title: '角色管理' },
          { index: '1-3', title: '菜单管理' },
        ],
        submenus: [
          {
            index: '1-4',
            title: '日志管理',
            items: [
              { index: '1-4-1', title: '操作日志' },
              { index: '1-4-2', title: '登录日志' },
            ],
          },
        ],
      },
      {
        index: '2',
        title: '系统监控',
        icon: Headset,
        items: [
          { index: '2-1', title: '定时任务' },
          { index: '2-2', title: '数据监控' },
        ],
      },
      {
        index: '3',
        title: '数据API',
        icon: ScaleToOriginal,
        items: [
          { index: '3-1', title: '数据服务' },
          { index: '3-2', title: '数据脱敏' },
          { index: '3-3', title: 'API日志' },
        ],
      },
      {
        index: '4',
        title: '数据集成',
        icon: Box,
        items: [
          { index: '4-1', title: '调度模板' },
          { index: '4-2', title: '任务批量构建' },
          { index: '4-3', title: '任务构建' },
          { index: '4-4', title: '实例管理' },
          { index: '4-5', title: '执行日志' },
          { index: '4-6', title: '资源监控' },
        ],
      },
      {
        index: '5',
        title: '数据资产',
        icon: Coin,
        items: [
          { index: '5-1', title: '数据源' },
        ],
      },
    ])

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
    }
  },
})
</script>

<style>
.mb-2 {
  width: 200px;
  text-align: center;
  justify-content: center;
  display: flex;
  margin-top: 10%;
  font-size: 120%;
}
</style>
