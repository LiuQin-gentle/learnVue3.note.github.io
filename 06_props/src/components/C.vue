<script setup>
// 在script中，可以使用useAttrs获取透传过来的属性
import { useAttrs } from 'vue';
console.log(useAttrs());
</script>

<script>
export default {
    inheritAttrs:false //关闭自动透传，但是还可以手动透传
}
</script>

<template>
    <div class="box1">我是box1</div>
    <div class="box2" :class="$attrs.class" :style="$attrs.style">我是box2</div>
    <div :="$attrs">我是div</div>

    <!-- 在模板中，可以通过$attrs来访问透传过来的属性，
     可以手动指定透传过来的属性要添加到哪些元素 -->
</template> 