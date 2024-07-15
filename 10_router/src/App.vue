<script setup lang="ts">
  import {RouterView, RouterLink} from 'vue-router';
</script>

<template>
  <div class="app">
    <h2 class="title">路由测试</h2>
    <!-- 导航区 -->
     <div class="navigate">
      <!-- 
        两种写法：
        1. 字符串写法
        2. 对象写法
          （1）name
          （2）path
      -->
        <RouterLink to="/home" active-class="active">首页</RouterLink>
        <RouterLink :to="{name:'news'}" active-class="active">新闻</RouterLink>
        <RouterLink :to="{path:'/about'}" active-class="active">关于</RouterLink>
     </div>

     <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>

  </div>
</template>

<style scoped>
  .title{
    height: 60px;
    line-height: 60px;
    text-align: center;
    word-spacing: 5px;
    margin:30px 0;
    background-color: goldenrod;
    border-radius: 10px;
    color:white;
  }

  .navigate{
    display: flex;
    justify-content: space-around;
    margin: 0 20px;
  }

  .navigate a{
    display: block;
    text-align: center;
    width: 90px;
    height: 40px;
    line-height: 40px;
    text-decoration: none;
    font-size: 18px;
    background-color: #999;
    color:white;
    border-radius: 10px;
  }

  .navigate a.active{
    background-color: yellowgreen;
  }

  .main-content{
    margin: 0 auto;
    margin-top:30px;
    width: 90%;
    height: 400px;
    border: 1px solid;
  }
</style>
