<template>
  <div class="user">
    <!-- 左侧 -->
      <div class="left">
        <el-form-item>
            <el-input v-model="formInline.user" placeholder="请输入部门名称" clearable />
            大学生就业创业平台<br>
            业务中台<br>
            数据中台<br>
            信息服务<br>
            成果转化<br>
        </el-form-item>
      </div>
    <!-- 右侧 -->
      <div class="right">
        <!-- 搜索框 -->
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="用户名称">
                <el-input v-model="formInline.user" placeholder="请输入用户名称" clearable />
              </el-form-item>
              <el-form-item label="手机号码">
                <el-input v-model="formInline.user" placeholder="请输入手机号码" clearable />
              </el-form-item>
              <el-form-item label="用户状态">
                <el-select
                  v-model="formInline.region"
                  placeholder="Activity zone"
                  clearable
                >
                  <el-option label="正常" value="nomal" />
                  <el-option label="停用" value="top" />
                </el-select>
              </el-form-item>
              <br>
              <el-form-item label="创建时间">
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
            style="width: 80px;"
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
  </div>
</template>
  
<script lang="ts" setup>
import { DeleteFilled, Download, Edit, Plus ,Upload} from '@element-plus/icons-vue';
import { reactive } from 'vue'
import Table from './table.vue';

const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}
const buttons = [
  { type: 'primary', text: '新建' , icon:Plus},
  { type: 'success', text: '修改' ,icon: Edit},
  { type: 'danger', text: '删除' ,icon:DeleteFilled},
  { type: 'info', text: '导入' ,icon:Upload},
  { type: 'warning', text: '导出' ,icon: Download},
  
] as const
</script>
  
<style>
.user{
  display: flex;
}
.left{
    width: 200px;
    margin: 0 10px;
}
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>