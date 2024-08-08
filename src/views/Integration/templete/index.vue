<template>
    <div class="templete">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="">
              <el-input v-model="formInline.user" placeholder="任务描述" />
            </el-form-item>
            <el-form-item style="width: 200px;">
              <el-select v-model="formInline.region" placeholder="所属项目">
                <el-option label="1" value="1" />
                <el-option label="1" value="1" />
              </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit"><el-icon style="margin-right: 5px;"><Search /></el-icon>搜索</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit"><el-icon style="margin-right: 5px;"><EditPen /></el-icon>添加</el-button>
            </el-form-item>
        </el-form>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
    </el-table>
    <!-- 分页 -->
    <Page></Page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import Page from '../../../components/Pagination/Page.vue';

const formInline = reactive({
  user: '',
  region: '',
})

const onSubmit = () => {
  console.log('submit!')
}

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<style scoped>
.templete{
    margin-left: 10px;
}
</style>