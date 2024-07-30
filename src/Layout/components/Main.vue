<template>
    <!-- <router-link to="/hello">Hello</router-link> -->
    <router-view v-slot="{ Component }">
        <transition>
            <component :is="Component" />
        </transition>
    </router-view>
</template>
<script setup>


</script>
<style scoped>
* {
    /* padding-top: 60px; */
    padding-left: 10px;
}
</style>
