<script setup>
import { inject, ref } from 'vue';
//const emits = defineEmits(["addStu"]);
const addStu = inject("student").addStu;
const newStu = ref({
    name: "",
    age: 1,
    gender: "男",
    address: ""
});
function addStudent(){
    //对象进行浅复制，如果直接传响应式数据，会出现问题
    //emits("addStu", Object.assign({}, newStu.value));
    
    addStu(Object.assign({}, newStu.value)); 
    newStu.value.name = "";
    newStu.value.age = 1;
    newStu.value.gender = "男";
    newStu.value.name = "";
}
</script>
<template>
    <form @submit.prevent="addStudent">
        <div> 
            姓名：<input type="text" v-model="newStu.name">
        </div>
        <div> 
            年龄：<input type="number" v-model="newStu.age" min="1">
        </div>
        <div> 
            性别：
            <input type="radio" v-model="newStu.gender" name="gender" value="男">男
            <input type="radio" v-model="newStu.gender" name="gender" value="女">女
        </div>
        <div> 
            地址：<input type="text" v-model="newStu.address">
        </div>
        <button>添加</button>
    </form>
</template>