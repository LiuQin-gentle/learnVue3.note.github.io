<script setup>
import ComponentC from './ComponentC.vue';
import {ref} from "vue";
const isShow = ref(true);
</script>

<template>
    <div>
        <h3>ComponentB</h3>
        <ul>
            <li v-if="isShow"><ComponentC></ComponentC></li>
        </ul>
    </div>
</template>