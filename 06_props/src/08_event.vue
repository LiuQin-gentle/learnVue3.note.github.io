<script setup>
function handler(text){
  alert(text)
}
</script>

<template>
  <!-- 
    事件修饰符
    .stop  停止事件的传播
    .capture  在捕获阶段触发事件
    .prevent  取消默认行为
    .self  只有事件由自身触发时才会有效
    .once  绑定一个一次性的事件
    .passive  主要用于提升滚动事件的性能（先滚动，后触发事件，不常用）
  -->
   <div class="box1"  @click.capture="handler('box1')">
    <div class="box2" @click="handler('box2')">
      <div class="box3" @click.capture="handler('box3')"></div>
    </div>
   </div>
</template>

<style scoped>
.box1{
  width: 200px;
  height: 200px;
  background-color: aquamarine;
}
.box2{
  width: 100px;
  height: 100px;
  background-color: brown;
}
.box3{
  width: 50px;
  height: 50px;
  background-color: pink;
}
</style>