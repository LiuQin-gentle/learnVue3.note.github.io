<script setup>
import MealList from "@/components/Meals/MealList.vue";
import MealsFilter from "./components/MealsFilter/MealsFilter.vue";
import CartBar from "./components/Cart/CartBar.vue";
import { useMealsStore } from "./store/meals";
const meals = useMealsStore();
</script>

<template>
  <MealsFilter></MealsFilter>
  <MealList :desc="true" :meals="meals.filterMeals"></MealList>
  <CartBar></CartBar>
</template>

<style scoped>

</style>
     