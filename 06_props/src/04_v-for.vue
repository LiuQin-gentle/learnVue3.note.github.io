<script setup>
import {ref} from 'vue';
const arr = ref(["孙悟空", "猪八戒", "沙和尚", "唐僧"]);
const arr2 = ref([
  {
    id:1,
    name:"孙悟空",
    age:18
  },
  {
    id:2,
    name:"孙悟空",
    age:18
  },
  {
    id:3,
    name:"孙悟空",
    age:18
  },
])
</script>

<template>
  <button @click="arr.push('白骨精')">点我一下</button>
  <ul>
    <li v-for="name in arr">{{name}}</li>
  </ul>

  <ul>
    <li v-for="(name, index) in arr">{{index}}-{{name}}</li>
  </ul>
</template>

