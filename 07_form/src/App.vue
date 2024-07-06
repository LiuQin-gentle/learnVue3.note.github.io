<script setup>
import { ref } from 'vue';
import { provide } from 'vue';
import StudentList from './components/StudentList.vue'
import StudentForm from './components/StudentForm.vue'
let STU_ARR = ref([
    {
        num: 1,
        name: "孙悟空",
        age: 18,
        gender: "男",
        address: "花果山"
    },
    {
        num: 2,
        name: "猪八戒",
        age: 19,
        gender: "男",
        address: "高老庄"
    },
    {
        num: 3,
        name: "沙和尚",
        age: 20,
        gender: "男",
        address: "流沙河"
    },
    {
        num: 4,
        name: "唐僧",
        age: 18,
        gender: "男",
        address: "女儿国"
    }
])

function delStu(index){
    STU_ARR.value.splice(index, 1);
}

function addStu(stu){
    const lastId = STU_ARR.value.at(-1)?.num;
    const newNum = !isNaN(lastId) ? lastId + 1 : 1;
    stu.num = newNum;
    STU_ARR.value.push(stu);
}

provide("student", {
    students: STU_ARR,
    delStu,
    addStu
});

window.onload=function(){
  var img = document.getElementById('myImage');
  var width = img.naturalWidth;
  var height = img.naturalHeight;
  var ratio = width / height;
  var div = document.getElementById('myDiv');
  if(ratio > 1){
    div.classList.add('div-style1');
    img.classList.add('img');
  }else{
    img.classList.remove('img');
    img.classList.add('img-style1');
  }
}
</script>

<template>
    <div>
        <!-- <div class="img" id="myDiv">
            <img src="./images/sky.jpeg" id="myImage">
        </div>
        <div class="img" id="myDiv">
            <img src="./images/cloud.jpeg" id="myImage">
        </div> -->
        <div class="img" id="myDiv">
            <img src="./images/cat.jpg" id="myImage">
        </div>
        <StudentList></StudentList>
        <StudentForm></StudentForm>
    </div>
</template>

<style scoped>

 .img{
    width: 400px;
    height: 300px;
    background-color: brown;
    display: flex;
    align-items: center;
 }
 img{
    max-width: 100%;
    height: auto; 
 }

 .div-style1{
    display: flex;
    align-items: center; 
 }

 .img-style1{
    max-height: 100%;
    width: auto;
    display: block;
    margin: 0 auto;
 }
 
</style>
