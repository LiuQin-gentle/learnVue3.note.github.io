<script setup>
import { inject } from 'vue';
const {students, delStu} = inject("student");
const delStuhandler = (index) => {
    if(confirm("该操作不可恢复，请确认！")){
        //删除当前学生
        //emits("delStu", index);
        delStu(index);
    }
}
</script>
<template>
    <tbody>
            <tr v-for="(stu, index) in students">
                <td>{{ stu.num }}</td>
                <td>{{ stu.name }}</td>
                <td>{{ stu.age }}</td>
                <td>{{ stu.gender }}</td>
                <td>{{ stu.address }}</td>
                <td>
                    <a href="#" @click.prevent="delStuhandler(index)">删除</a>
                </td>
            </tr>
        </tbody>
</template>
<style scoped>
    td{
        border: 1px solid black;
        font-size: 24px;

    }
</style>