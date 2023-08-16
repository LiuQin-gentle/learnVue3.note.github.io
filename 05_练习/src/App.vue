<script setup>
    import { ref } from 'vue';

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
            <div class="tab-list">
                <div class="tab-item">
                    <!-- 图片 -->
                    <div class="photo">
                        <img src="/images/messi.png" alt="梅西">
                        <span>1</span>
                    </div>
                    <!-- 描述 -->
                    <div class="desc">
                        <span class="name">梅西</span>
                        <div class="hot-bar">
                            <div class="inner">433760热度</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show = "current === 1">
            <!-- 球队 -->
            <div class="tab-list">
                <div class="tab-item">
                    <!-- 图片 -->
                    <div class="photo">
                        <img src="/images/法国.jpg" alt="法国">
                        <span>1</span>
                    </div>
                    <!-- 描述 -->
                    <div class="desc">
                        <span class="name">法国</span>
                        <div class="hot-bar">
                            <div class="inner">333760热度</div>
                        </div>
                    </div>
                </div>
            </div>
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

    .tab-list{
        margin: 20px;
    }

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
        width: 10%;
        white-space: nowrap;
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