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
        <MealItem v-for="item in meals.filterMeals" :meal = item></MealItem>
        <h2 v-if="meals.filterMeals.length == 0">没有找到指定的商品</h2>
    </div>
</template>
<style scoped>
.meals{
    height: calc(100vh - 120rem);
    overflow: auto;
}

.meals h2{
    font-size: 30rem;
}
</style>