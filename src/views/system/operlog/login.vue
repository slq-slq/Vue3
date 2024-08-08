<template>
    <!-- 右侧 -->
    <div class="right">
      <!-- 搜索框 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="登录地址">
              <el-input v-model="formInline.user" placeholder="请输入登录地址" clearable />
            </el-form-item>
            <el-form-item label="用户名称">
              <el-input v-model="formInline.user" placeholder="请输入用户名称" clearable />
            </el-form-item>
            <el-form-item label="状态">
              <el-select
                v-model="formInline.region"
                placeholder="登录状态"
                clearable
              >
                <el-option label="成功" value="nomal" />
                <el-option label="失败" value="top" />
              </el-select>
            </el-form-item>
            <br>
            <el-form-item label="登录时间">
              <el-date-picker
                v-model="formInline.date"
                type="date"
                placeholder="开始日期"
                clearable
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit"><el-icon style="margin-right: 5px;"><Search /></el-icon>搜索</el-button>
            </el-form-item>
            <el-form-item>
              <el-button @click="onSubmit"><el-icon style="margin-right: 5px;"><RefreshLeft /></el-icon>重置</el-button>
            </el-form-item>
        </el-form><br>
      <!-- 操作按钮 -->
        <el-button
        :icon="button.icon"
          v-for="button in buttons"
          :key="button.text"
          :type="button.type"
          text
          bg
        >
          {{ button.text }}
        </el-button>
      <!-- 表格 -->
      <Table style="margin-top: 10px;"></Table>
      <Page></Page>
    </div>
  </template>
    
  <script lang="ts" setup>
  import { DeleteFilled, Download, Edit, Plus ,Upload} from '@element-plus/icons-vue';
  import { reactive } from 'vue'
  import Page from '../../../components/Pagination/Page.vue';
  import Table from '../../../components/system/operlog/logtable.vue';
  
  const formInline = reactive({
    user: '',
    region: '',
    date: '',
  })
  
  const onSubmit = () => {
    console.log('submit!')
  }
  const buttons = [
    { type: 'danger', text: '删除' ,icon:DeleteFilled},
    { type: 'danger', text: '清空' ,icon:DeleteFilled},
    { type: 'warning', text: '导出' ,icon: Download},
  ] as const
  </script>
    
  <style scoped>
  .right{
    margin-left: 10px;
  }
  .demo-form-inline .el-input {
    --el-input-width: 220px;
  }
  
  .demo-form-inline .el-select {
    --el-select-width: 200px;
  }
  </style>