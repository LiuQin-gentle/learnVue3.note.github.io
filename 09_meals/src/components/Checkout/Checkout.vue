<script setup>
import { useMealsStore } from "@/store/meals";
import Counter from "../UI/Counter.vue";
const props = defineProps(["isShow"]);
const emits = defineEmits(["close"]);
const meals = useMealsStore();
</script>

<template>
  <div v-show="props.isShow" class="checkout">
    <div class="close">
      <i @click="$emit('close')" class="ri-close-fill"></i>
    </div> 
    <div class="details">
      <div class="header">
        <p>餐品详情</p>
      </div>

      <div class="list">
        <div class="meal" v-for="meal in meals.cartMeals">
          <div class="img">
            <img :src="meal.img" :alt="meal.title" />
          </div>

          <div class="info">
            <div class="desc">
              <h2>{{ meal.title }}</h2>
            </div>

            <div class="price-btn">
              <Counter :meal="meal"></Counter>
              <span class="price">{{ meal.price * meal.count }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>合计￥{{ meals.totalAmount }}</footer>
    <div class="bar">
      <div class="total-amount">
        <p class="has-goods">
          合计￥{{ meals.totalAmount }}
        </p>
      </div>
      <button class="pay-btn">去支付</button>
    </div>
  </div>
</template>

<style scoped>
.checkout {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(240, 240, 240);
  z-index: 99999;
  overflow: auto;
  padding-bottom: 160rem;
}

.close {
  height: 80rem;
  font-size: 45rem;
  display: flex;
  align-items: center;
}

.details {
  width: 700rem;
  overflow: auto;
  border-radius: 40rem;
  margin: 0 auto;
  background-color: white;
}

.details .header {
  padding: 10rem 20rem;
  font-size: 36rem;
  height: 120rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c7c6c6;
}

.meal {
  height: 200rem;
  align-items: center;
  border-bottom: 1px #c7c6c6 solid;
  display: flex;
  padding: 0 20rem;
}

.img {
  width: 180rem;
}

.info {
  width: 450rem;
  margin-left: 10rem;
}

.info h2 {
  color: #000;
  font-size: 32rem;
  font-weight: bold;
}

.info p {
  color: #9f9f9f;
  font-size: 24rem;
}

.price-btn {
  display: flex;
  margin-top: 40rem;
  justify-content: space-between;
}

.price {
  display: flex;
  font-size: 30rem;
  font-weight: bold;
}

.price::before {
  content: "￥";
}

footer {
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 40rem;
  width: 700rem;
  height: 130rem;
  background-color: white;
  border-radius: 20rem;
  font-size: 30rem;
  font-weight: bold;
  margin: 0 auto;
}

.bar{
    width: 710rem;
    height: 100rem;
    background-color: rgb(58,58,58);
    position: fixed;
    bottom: 40rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    font-size: 35rem;
    border-radius: 60rem;
}

.total-amount{
    margin-left: 40rem;
    line-height: 100rem;
}

.has-goods{
    color: rgb(148,148,148);
    font-size: 36rem;
    font-weight: bold;
    color: #fff;
}

.pay-btn{
    position: absolute;
    top:0;
    right:0;
    width: 200rem;
    height: 100%;
    border-radius: 60rem;
    background-color: rgb(248,188,0);
    font-size: 36rem;
}
</style>