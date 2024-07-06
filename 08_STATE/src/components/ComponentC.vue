<script setup>
/* import { ref } from 'vue';

const count = ref(0);

function increament(){
    count.value++;
} 
 */

// import { inject } from 'vue';
// const {count, increament} = inject("count");

//import {countStore} from "../store/count";

/* import {useCountStore} from "../store/countStore";
const countStore = useCountStore(); */

import { useStudentStore } from '@/store/studentStore';
import { storeToRefs } from 'pinia';
const studentStore = useStudentStore();
const {name, age, title, skills} = storeToRefs(studentStore);
/* 
    store实例本身就是一个reactive对象，可以通过它直接访问state中的数据
    但是如果直接将state中的数据解构出来，那么数据将会丧失响应性

    可以通过storeToRefs()来对store进行解构，它可以将state和getters中的属性解构为ref属性，从而保留其响应性

    state的修改：
    1. 直接修改
    2. actions间接修改
    3. 通过$patch
    4. 通过$patch传函数的形式修改
    5. 直接替换state
    6. 重置state
*/

const clickHandler = () => {
    //mutation.type = patch object
    studentStore.$patch({
        name: "孙小圣",
        age: 20,
        skills:["救命毫毛"]
    })

    /* studentStore.$patch((state) => { 
        state.skills.push("火眼金睛");
    }) */

    //studentStore.$state = {name:"孙小圣"}
} 

/* 
    store的订阅
        - 当store中的state发生变化时，做一些相应的操作
        - store.$subscribe(函数，配置对象) detached为true时，移除组件还可以监听store变化
*/
studentStore.$subscribe(
    (mutation, state) => {
        //mutation 表示修改的信息
        console.log(mutation.payload);

        // if(state.token){
        //     //登录，向本地存储中添加内容
        // }else {
        //     //登出，从本地存储中移除内容
        // }
        console.log("state发生变化了", state.name);

        //使用订阅时不要再回调函数中直接修改state，会造成死循环
    }, 
    {detached: true}
)

//监听actions调用
studentStore.$onAction(({name, store, args, after, onError}) => {
    /* 
        name  调用的action的名字
        store store的实例
        args  action接收到的参数
        after() 可以设置一个回调函数，函数会在action成功调用后触发
        onError() 可以设置一个回调函数，函数会在action调用失败后触发
    */
    after(() => {
        console.log(name + "成功执行！");
    })

    onError((err) => {
        console.log(name + "执行失败！", err);
    })
})
</script>

<template>
    <!-- <h4>ComponentC - 
        {{ countStore.count }} - 
        {{ countStore.double }}
        <button @click="countStore.increament">点击</button>
    </h4> -->
    <h4>ComponentC - 
        {{ name }} - 
        {{ age }} -
        {{ title }} -
        {{ skills }} -
        {{ studentStore.double }}
        <button @click="studentStore.growUp">长大</button>
        <button @click="name='孙大圣'">直接修改</button>
        <button @click="clickHandler">patch修改</button>
        <button @click="studentStore.$reset()">重置</button>
    </h4>
</template>