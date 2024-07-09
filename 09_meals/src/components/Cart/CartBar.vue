<script setup>
import { useMealsStore } from "@/store/meals";
import cartBag from "../../assets/bag.png";
import CartDetails from "../Cart/CartDetails.vue";
import Checkout from "../Checkout/Checkout.vue"
import { ref } from "vue";
const meals = useMealsStore();
const showDetails = ref(false);
const showCheckout = ref(false);

</script>
<template>
    <Checkout @close="showCheckout=false" :isShow="showCheckout"></Checkout>
    <CartDetails 
        :isShow="showDetails" 
        @hide="showDetails = false">
    </CartDetails>

    <div class="cart-bar">
        <div class="cart-bag">
            <img :src="cartBag" alt=""/>
            <span v-show="meals.totalCount > 0" 
                class="total-count">
                {{ meals.totalCount }}
            </span>
        </div>
        <div class="total-amount">
            <p v-show="meals.totalCount <= 0" class="no-goods">未选购商品</p>
            <p 
                @click="showDetails = true" 
                class="has-goods">
                {{meals.totalAmount}}
            </p>
        </div>
        <button @click="showCheckout = true" class="checkout-btn">去结算</button>
    </div>
</template>
<style scoped>
.cart-bar{
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
    z-index: 9999;
}

.cart-bag{
    position: absolute;
    width: 100rem;
    bottom: -10rem;
}

.total-count{
    position: absolute;
    right: -20rem;
    width: 40rem;
    height: 40rem;
    text-align: center;
    line-height: 40rem;
    background-color: rgb(208,12,12);
    border-radius: 50%;
    font-size: 30rem;
    font-weight: bold;
    color: white;
}

.total-amount{
    margin-left: 140rem;
    line-height: 100rem;
}
.no-goods, .has-goods{
    color: rgb(148,148,148);
    font-size: 36rem;
    font-weight: bold;
}

.has-goods{
    color: #fff;
}

.has-goods::before{
    content: "￥";
    font-size: 26rem;
}

.checkout-btn{
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