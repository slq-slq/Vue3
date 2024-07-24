<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import SvgIcon from '@/components/SvgIcon/index.vue';
import Login from '@/views/login.vue'
import Register from './views/register.vue';
import request from './utils/request';
import {ref} from 'vue'


</script>

<template setup>
    <router-view></router-view>
</template>

<style scoped>

</style>
