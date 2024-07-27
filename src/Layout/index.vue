<template>
    <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header style="margin-bottom: 30px;">
            <Header></Header>
        </el-header>
        <el-main>
            <Main></Main>
            
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import Header from './components/Header.vue';
import Aside from './components/Aside.vue';
import Main from './components/Main.vue';
</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
}
</style>