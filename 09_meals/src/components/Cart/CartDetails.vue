<script setup>
import Mask from "../UI/Mask.vue";
import Dialog from "../UI/Dialog.vue"
import MealList from "../Meals/MealList.vue";
import { useMealsStore } from "@/store/meals";
import { ref } from "vue";
const meals = useMealsStore();
const showDialog = ref(false);
const msg = "确认清空购物车吗?"

const emits = defineEmits();
const okHandler = () => {
    /*
        ① 把购物车清空 
        ② 关闭对话框 Dialog
        ③ 关闭CartDetails 
    */
    meals.clearCart();
    // showDialog.value = false;
    emits('hide');
}
</script>

<template>
    
  <Mask style="z-index: 999;">
    <Dialog 
        @ok = "okHandler"
        :is-show = "showDialog"
        @hide = "showDialog = false"
        :msg = "msg"
        ></Dialog>
    <div class="cart-details">
      <div class="header">
        <h2>餐品详情</h2>
        <a 
            @click="showDialog = true" 
            href="javascript:;">
            <i class="ri-delete-bin-line"></i>
            清空购物车
        </a>
      </div>
      <MealList :desc="false" :meals="meals.cartMeals"></MealList>
    </div>
  </Mask>
</template>

<style scoped>
.cart-details {
  width: 750rem;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  overflow: auto;
  border-top-left-radius: 40rem;
  border-top-right-radius: 40rem;
}

.meals{
    height: auto;
    max-height: calc(280rem * 4);
}

.header{
    display: flex;
    justify-content: space-between;
    padding: 20rem 40rem;
}

.header h2{
    font-size: 35rem;
}

.header a{
    display: flex;
    align-items: center;
    font-size: 30rem;
    color: #9f9f9f;
}

.header i{
    margin-right: 10rem;
}
</style>