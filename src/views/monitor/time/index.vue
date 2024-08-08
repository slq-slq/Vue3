<template>
    <div class="right">
      <!-- 搜索框 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="任务名称">
              <el-input v-model="formInline.user" placeholder="请输入任务名称" clearable />
            </el-form-item>
            <el-form-item label="任务组名">
              <el-input v-model="formInline.user" placeholder="请输入任务组名" clearable />
            </el-form-item>
            <el-form-item label="任务状态">
              <el-select
                v-model="formInline.region"
                placeholder="Activity zone"
                clearable
              >
                <el-option label="正常" value="nomal" />
                <el-option label="停用" value="top" />
              </el-select>
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
      <TimeTable style="margin-top: 10px;"></TimeTable>
      <Page></Page>
    </div>
</template>

<script lang="ts" setup>
import { DeleteFilled, Download, Edit, Operation, Plus ,Upload} from '@element-plus/icons-vue';
import { reactive } from 'vue'
import Page from '../../../components/Pagination/Page.vue';
import TimeTable from '../../../components/monitor/timeTable.vue';
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
{ type: 'warning', text: '导出' ,icon: Download},
{ type: 'info', text: '日志' ,icon:Operation},

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
--el-select-width: 220px;
}
</style>