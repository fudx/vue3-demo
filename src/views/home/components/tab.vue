<script setup lang="ts">
const emit = defineEmits(['btn'])
withDefaults(
  defineProps<{
    // 标题
    title: number | string;
  }>(),
  {
    title: "",
  }
);

const btn = ()=>{
  emit('btn','我是btn')
}
</script>

<template>
  <h1>我是测试{{ title }}</h1>
  <button @click="btn">点击</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
