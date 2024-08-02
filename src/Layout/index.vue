<template>
    <div class="common-layout">
    <el-container>
      <!-- <el-aside> -->
        <Aside></Aside>
      <!-- </el-aside> -->
      <el-container>
        <el-header>
            <Header></Header>
        </el-header>
        <el-main>
          <router-view v-slot="{ Component }">
            <transition>
                <component :is="Component" />
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import Header from './components/Header.vue';
import Aside from './components/Aside.vue';
// import Main from './components/Main.vue';
</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
}
el-main{
  /* padding-left: 10px; */
}
</style>