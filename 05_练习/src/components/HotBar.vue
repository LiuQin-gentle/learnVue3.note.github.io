<script setup>
    import {computed} from "vue"; 
    const props = defineProps(["hot", "maxHot"]);
    const hotRate = computed(()=>{
        return props.hot / props.maxHot * 100 + "%";
    })
</script>

<template>
    <div class="hot-bar">
        <div class="inner">{{props.hot}}热度</div>
    </div>
</template>
<style scoped>
.hot-bar{
    background-color: rgba(3, 38, 103);
    border-radius: 50px;
    text-indent: .5em;
}
.inner{ 
    width: v-bind(hotRate);
    background-image: linear-gradient(
        to right, 
        rgba(187, 3, 52) 50%,
        rgba(66, 2, 12));
    border-radius: 50px;
    /* width: 10%; */
    white-space: nowrap;
}
</style>