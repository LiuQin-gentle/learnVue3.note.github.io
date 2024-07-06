<script setup>
import MyButton from "./components/MyButton.vue";
</script>

<template>
    <MyButton>
      <template v-slot:text>
        我是一个按钮
      </template>
      <template #text2>
        随便写点什么
      </template>
    </MyButton>
</template>

