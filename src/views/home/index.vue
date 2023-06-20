<script setup lang="ts">
import tab from './components/tab.vue';
const title = '123123'
const clickBtn = ()=>{
  console.log('我被执行了')
}
</script>

<template>
    <div>123123</div>
    <tab :title="title" @btn="clickBtn"></tab>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
