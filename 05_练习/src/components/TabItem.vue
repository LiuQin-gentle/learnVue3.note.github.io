<script setup>
    import { defineProps } from 'vue';

    //创建一个响应式对象
    /*
        子组件中的数据通常不会在子组件中直接定义，这样会导致数据和视图发生耦合
        子组件中的数据通常会在创建组件实例时确定
        父组件可以通过props来将数组传递给子组件

        使用props
            - 先在子组件中定义props
    */
    const props = defineProps(["item"]);
    const item = props.item;
</script>
<template>
    <div class="tab-item">
        <!-- 图片 -->
        <div class="photo">
            <img :src="item.img" :alt="item.name">
            <span>{{item.rate}}</span>
        </div>
        <!-- 描述 -->
        <div class="desc">
            <span class="name">{{item.name}}</span>
            <div class="hot-bar">
                <div class="inner">{{item.hot}}热度</div>
            </div>
        </div>
    </div>
</template>

<style>
    .tab-item{
        display: flex;
    }

    .photo{
        width: 150px;
        background-color: #fff;
        border-radius: 20px;
        overflow: hidden;
        position: relative;
    }
    .photo img{
        width: 100%;
        vertical-align: bottom;
    }
    .photo span{
        background-color: rgb(243, 102, 0);
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

    .desc{
        display: flex;
        flex-flow: column;
        justify-content: space-evenly;
        color: #fff;
        font-size: 30px;
        flex: auto;
        margin-left: 30px;
    }

    .hot-bar{
        background-color: rgba(3, 38, 103);
        border-radius: 50px;
        text-indent: .5em;
    }
    .inner{ 
        background-image: linear-gradient(
            to right, 
            rgba(187, 3, 52) 50%,
            rgba(66, 2, 12));
        border-radius: 50px;
        /* width: 10%; */
        white-space: nowrap;
    }

</style>
