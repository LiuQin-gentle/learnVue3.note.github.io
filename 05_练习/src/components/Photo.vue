<script setup>
    import {computed} from "vue";
    const props = defineProps(["src", "alt", "rate"]);
    const color = computed(()=>{
        //编写判断颜色的代码
        if(props.rate == 1){
            return "rgb(254, 45, 70)";
        }else if(props.rate == 2){
            return "rgb(245, 102, 1)";
        }else{
            return "rgb(247, 169, 1)";
        }
    })
</script>
<template>
    <div class="photo">
        <img class="img" :src="props.src" :alt="props.name">
        <span class="rateSpan" >{{props.rate}}</span>
    </div>
</template>
<style scoped>
    .photo{
        width: 150px;
        background-color: #fff;
        border-radius: 20px;
        overflow: hidden;
        position: relative;
    }
    .img{
        width: 100%;
        vertical-align: bottom;
    }
    .rateSpan{
        background-color: v-bind(color);
        color: #fff;
        font-size: 25px;
        position: absolute;
        top:0;
        left: 0;
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 10px 0 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
    }
</style>