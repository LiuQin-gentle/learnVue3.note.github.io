<script setup>
import { provide } from 'vue';
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';
import { ref } from 'vue';
/* const count = ref(0);

const increament = () => {
    count.value++;
}

provide("count", {
    count,
    increament
}) */

</script>
<template>
    <h1>Root</h1>
    <ul>
        <li><ComponentA></ComponentA></li>
        <li><ComponentB></ComponentB></li>
    </ul>
</template>