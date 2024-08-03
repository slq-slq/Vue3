<template>
    <!-- 右侧 -->
    <div class="right">
      <!-- 搜索框 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="系统模块">
              <el-input v-model="formInline.user" placeholder="请输入系统模块" clearable />
            </el-form-item>
            <el-form-item label="操作人员">
              <el-input v-model="formInline.user" placeholder="请输入操作人员" clearable />
            </el-form-item>
            <el-form-item label="类型">
              <el-select
                v-model="formInline.region"
                placeholder="操作类型"
                clearable
              >
                <el-option label="新增" value="nomal" />
                <el-option label="修改" value="top" />
                <el-option label="删除" value="delete" />
                <el-option label="授权" value="shouquan" />
                <el-option label="导出" value="export" />
                <el-option label="导入" value="import" />
                <el-option label="强退" value="" />
                <el-option label="生成代码" value="nomal" />
                <el-option label="清空数据" value="nomal" />
              </el-select>
            </el-form-item>
            <br>
            <el-form-item label="用户状态">
              <el-select
                v-model="formInline.region"
                placeholder="请选择"
                clearable
              >
                <el-option label="正常" value="nomal" />
                <el-option label="停用" value="top" />
              </el-select>
            </el-form-item>
            <el-form-item label="操作时间">
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
    </div>
  </template>
    
  <script lang="ts" setup>
  import { DeleteFilled, Download, Edit, Plus ,Upload} from '@element-plus/icons-vue';
  import { reactive } from 'vue'
  import Table from './components/opertable.vue';
  
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
    padding-left: 10px;
  }
  .demo-form-inline .el-input {
    --el-input-width: 220px;
  }
  
  .demo-form-inline .el-select {
    --el-select-width: 200px;
  }
  </style>