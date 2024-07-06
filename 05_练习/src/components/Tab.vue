<script setup>
import { reactive, ref } from 'vue';
//创建一个变量来记录选项卡的状态
const current = ref(0);//0表示球员，1表示球队
</script>
<template>  
    <!-- 选项卡的外部容器 -->
    <div class="tab-wrapper">
      <!-- 选项卡的头部 -->
      <header class="tab-head">
          <!-- 定义两个按钮 -->
          <div @click="current = 0" class="tab-button" :class="{active:current === 0}">热门球员</div>
          <div @click="current = 1" class="tab-button" :class="{active:current === 1}">热门球队</div>
      </header>
      <!-- 选项卡的主体 -->
      <div class="main">
          <!-- v-show 用来设置一个内容是否显示 -->
          <!-- v-show是通过css的style属性来实现隐藏的 -->
          <div v-show = "current === 0">
              <!-- 球员 -->
              <slot name="0"></slot>
          </div>
          <div v-show = "current === 1">
              <!-- 球队 -->
              <slot name="1"></slot>
          </div>
      </div>
    </div>
</template>
<style scoped>
    .tab-wrapper{
        box-sizing: border-box;
        width: 800px;
        padding: 20px;
        background-color: rgb(45, 83, 211);
    }
    .tab-head{
        display: flex;
        border-radius: 10px;
        overflow: hidden;
    }

    .tab-button{
        background-color: #fff;
        font-size: 30px;
        padding: 10px 0;
        text-align: center;
        flex: auto;
        cursor: pointer;
        transition: 0.5s;
    }

    .tab-button:not(.active):hover{
        color: rgb(187, 3, 52);
    }

    .active{
        background-color: rgb(187, 3, 52);
        color: #fff;
    }
</style>