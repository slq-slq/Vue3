<template>
    <div class="right">
      <!-- 搜索框 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="菜单名称">
              <el-input v-model="formInline.user" placeholder="请输入菜单名称" clearable />
            </el-form-item>
            <el-form-item label="状态">
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
      <MenuTable style="margin-top: 10px;"></MenuTable>
    </div>
</template>

<script lang="ts" setup>
import { Plus ,Sort} from '@element-plus/icons-vue';
import { reactive } from 'vue'
import  MenuTable from '../../../components/system/operlog/menuTable.vue';
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
{ type: 'info', text: '展开/折叠' ,icon:Sort},

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