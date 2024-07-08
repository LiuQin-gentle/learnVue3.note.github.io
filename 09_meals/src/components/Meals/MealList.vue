<script setup>
import MealItem from "./MealItem.vue"
import {useMealsStore} from "../../store/meals"

//加载store中的数据
const props = defineProps(["meals"]);
</script>
<template>
    <!-- 所有的汉堡的容器 -->
    <div class="meals">
        <!-- 显示商品信息 -->
        <MealItem 
            :desc="$attrs.desc" 
            v-for="item in props.meals" 
            :meal = item>
        </MealItem>
        <h2 v-if="!props.meals || props.meals.length == 0">
            没有找到指定的商品
        </h2>
    </div>
</template>
<style scoped>
.meals{
    height: calc(100vh - 120rem);
    overflow: auto;
    padding-bottom: 160rem;
}

.meals h2{
    font-size: 30rem;
}
</style>