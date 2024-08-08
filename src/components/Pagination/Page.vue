<template>
  <div class="example-pagination-block">
    <div class="example-demonstration"></div>
    <el-pagination layout="prev, pager, next" :total="1" />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>
  