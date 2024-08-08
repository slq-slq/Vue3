<template>
    <div class="apilog">
        <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item lable="接口名称">
                <el-input v-model="form.name" placeholder="请输入接口名称" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit"><el-icon style="margin-right: 5px;"><Search /></el-icon>搜索</el-button>
            </el-form-item>
            <el-form-item>
              <el-button @click="onSubmit"><el-icon style="margin-right: 5px;"><RefreshLeft /></el-icon>重置</el-button>
            </el-form-item>
        </el-form>
        <!-- 表格 -->
        <apilogTable></apilogTable>
        <Page></Page>
    </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue';
import { reactive } from 'vue';
import Page from '../../../components/Pagination/Page.vue';
import apilogTable from '../../../components/dataApi/apilog/apilogTable.vue';

const form = reactive({
    name:''
})

const onSubmit = () => {
console.log('submit!')
}

</script>

<style scoped> 
.apilog{
    margin-left: 10px;
}
</style>