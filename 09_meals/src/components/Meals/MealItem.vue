<script setup>
import {defineProps} from 'vue';
import Counter from '../UI/Counter.vue';
const props = defineProps(["meal"]);
const meal = props.meal;

</script>
<template>
    <div class="meal">
        <div class="img">
            <img :src= meal.img :alt=meal.title>
        </div>

        <div class="info">
            <div class="desc">
                <h2>{{ meal.title }}</h2>
                <p>{{ meal.desc }}</p>
            </div>

            <div class="price-btn"> 
                <span class="price">{{ meal.price }}</span>
                <Counter></Counter>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .meal{
        height: 280rem;
        align-items: center;
        border-bottom: 1px #999 solid;
        display: flex;
        padding: 0 20rem;
    }

    .img{
        width: 200rem;
    }

    .info{
        width: 450rem;
        margin-left: 10rem;
    }

    .info h2{
        color: #000;
        font-size: 32rem;
        font-weight: bold;
    }

    .info p{
        color: #9f9f9f;
        font-size: 24rem;

    }

    .price-btn{
        display: flex;
        margin-top:40rem;
        justify-content: space-between;
    }

    .price{
        display: flex;
        font-size: 30rem;
        font-weight: bold;
    }

    .price::before{
        content: "￥";
    }
</style>