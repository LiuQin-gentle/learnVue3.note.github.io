<script setup>
import { inject } from 'vue';

/* import { ref } from 'vue';

const count = ref(0);

function increament(){
    count.value++;
} */

/* 
    状态管理
        - 状态（state）
            - 应用当中的数据就是状态
            - 状态即数据
        - 视图（view）
            - 视图来呈现数据，用户通过视图访问数据
        - 交互（actions）
            - 用户的操作
            - 状态会根据用户在视图中的操作发生变化

    - 提升状态
        - 当有多个组件需要使用到同一个state时，可以将state提升到这些组件共同的祖先组件中声明，
            这样一来，所有这些组件都可以通过祖先组件来访问到这个state
*/
//const {count, increament} = inject("count");

import {useCountStore} from "../store/countStore";
const countStore = useCountStore();
</script>

<template>
    <h3>ComponentA - 
    {{ countStore.count }} - 
    {{ countStore.double }}
    <button @click="countStore.increament">点击</button>
    </h3>
</template>