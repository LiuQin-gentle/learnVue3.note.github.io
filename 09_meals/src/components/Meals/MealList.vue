<script setup>
import MealItem from "./MealItem.vue"
import {useMealsStore} from "../../store/meals"
//加载store中的属性
const meals = useMealsStore();
</script>
<template>
    <!-- 所有的汉堡的容器 -->
    <div class="meals">
        <!-- 显示商品信息 -->
        <MealItem v-for="item in meals.data" :meal = item></MealItem>
    </div>
</template>
<style scoped>
.meals{
    height: 100vh;
    padding: 120rem 0;
    overflow: auto;
}
</style>