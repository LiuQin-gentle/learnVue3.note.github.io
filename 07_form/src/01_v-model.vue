<script setup>
import { ref } from 'vue';
const text = ref("");
const bool = ref("是");
const hobbies = ref([]);
const gender = ref('女');
const friend = ref('请选择');
</script>

<template>
  <form>
    <!-- 
        v-mode修饰符：
        .lazy 使用change来处理数据
        .trim 去除前后的空格
        .number 将数据转换为数值
    -->
    <div>
        信息：<input v-model="text" type="text">
    </div>
    <div> 
        是否：<input v-model="bool" type="checkbox" true-value="是" false-value="否">
    </div>
    <div> 
        爱好：
        <input v-model="hobbies" type="checkbox" name="hobbies" value="足球">足球
        <input v-model="hobbies" type="checkbox" name="hobbies" value="篮球">蓝球
        <input v-model="hobbies" type="checkbox" name="hobbies" value="羽毛球">羽毛球
        <input v-model="hobbies" type="checkbox" name="hobbies" value="乒乓球">乒乓球
    </div>
    <div>
        性别：
        <input v-model="gender" type="radio" name="gender" value="男">男
        <input v-model="gender" type="radio" name="gender" value="女">女
    </div>
    朋友：
    <select v-model="friend">
        <option value="请选择" disabled>请选择</option>
        <option>孙悟空</option>
        <option>猪八戒</option>
        <option>沙和尚</option>
    </select>
  </form>
</template>

<style scoped>

</style>
