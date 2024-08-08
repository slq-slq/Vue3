<template>
    <div class="mask">
        <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item lable="脱敏名称">
                <el-input v-model="form.name" placeholder="请输入脱敏名称" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit"><el-icon style="margin-right: 5px;"><Search /></el-icon>搜索</el-button>
            </el-form-item>
            <el-form-item>
              <el-button @click="onSubmit"><el-icon style="margin-right: 5px;"><RefreshLeft /></el-icon>重置</el-button>
            </el-form-item>
        </el-form>
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
        <maskTable></maskTable>
        <!-- 页面 -->
        <Page></Page>
    </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue';
import { reactive } from 'vue';
import Page from '../../../components/Pagination/Page.vue';
import maskTable from '../../../components/dataApi/mask/maskTable.vue';

const form = reactive({
    name:''
})

const onSubmit = () => {
console.log('submit!')
}

const buttons = [
{ type: 'primary', text: '新增' , icon:Plus},
] as const
</script>

<style scoped> 
.mask{
    margin-left: 10px;
}
</style>