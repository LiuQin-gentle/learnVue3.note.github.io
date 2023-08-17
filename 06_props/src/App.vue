<script setup>
  import {ref} from 'vue';
  import MyBox from './components/MyBox.vue';
  import {reactive} from 'vue';
  const count = ref(0);
  const obj = reactive({
    count:0
  })
</script>

<template>
  <div>
    <h1>我是父组件</h1>
    <MyBox :count="count" :obj="obj" max-length="嘻嘻"></MyBox>
    <button @click="obj.count++">点我一下</button>
  </div>
</template>

