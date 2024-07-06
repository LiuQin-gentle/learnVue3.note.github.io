<script setup>
import SlotDemo from "./components/SlotDemo.vue";
import A from "./components/A.vue";
</script>

<template>
    <SlotDemo>
      
      <template v-slot:s1>
          我是h1
      </template>
    
      <template v-slot:s2="{stuName, age, gender, stu}">
        <A :name="stu.name"></A>
      </template>
      
    </SlotDemo>
</template>

