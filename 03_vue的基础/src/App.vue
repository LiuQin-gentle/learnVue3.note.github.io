<script setup>
import { reactive } from 'vue';
import { ref } from 'vue';
import {$ref} from "vue/macros"

/* 
  reactive()
    返回一个对象的响应代理(深层响应代理)
    也可以使用shallowReactive()创建一个浅层响应式对象
    缺点：只能返回对象的响应式代理，不能处理原始值

  ref()
    接收一个任意值，并返回它的响应式代理
*/
  const stu = reactive({
    name:"孙悟空",
    age:18,
    gender:"男"
  });
  //console.log(stu);

  //ref在生成响应式代理时，它是将值包装为了一个对象，0 --> {value:0}
  //访问ref对象时，必须通过 对象.value 来访问其中的值
  //在模板中，ref对象会被自动解包
  //let count = ref(0);//生成一个0的响应式代理
  //console.log(count.value);

  //vue提供了一个语法糖，使得ref对象在script标签中也可以自动解包
  //$是一个实验性的，需要在vite插件中做一些配置 reactivityTransform:true
  let count = $ref(1);
  console.log(count);

  //count = 10; //改变量只会影响到变量自己，在js中，无法实现对一个变量的代理
  function fn() {
    count++;
  }
</script>

<template>
  <h1>组合式API</h1>
  <h2>{{ stu.name }}---{{ stu.age }}---{{ stu.gender }}</h2>
  <h2 @click="fn">{{ count }}</h2>
</template>