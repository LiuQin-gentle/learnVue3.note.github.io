<script setup>
import {ref} from 'vue';
let count = ref(0);
function handler(event){
  alert("被点击了");
  console.log(event);
}
</script>

<template>
  <div>
    <!-- 为元素绑定事件，用 v-on 或 @click -->
    <h3>{{ count }}</h3>
    <button @click="count++">
      事件处理器
    </button>
    <!-- 如何区分：
      检查事件的值是否是合法的js标识符或属性访问路径，
      若是，就是方法事件处理器
      若不是，就是内联事件处理器 
    -->
    <button @click="handler">方法事件处理器</button>

    <button @click="handler($event)">内联事件处理器</button>

    <!-- @click.stop 表示阻止事件冒泡 -->
  </div> 
</template>

