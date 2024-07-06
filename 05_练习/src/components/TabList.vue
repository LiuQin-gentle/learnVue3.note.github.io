<script setup>
import TabItem from "./TabItem.vue";
const props = defineProps(["items", "maxHot"]);
</script>

<template>
    <div class="tab-list">
        <TabItem 
            v-for = "item in props.items"
            :item = "item"
            :max-hot = "props.maxHot">
        </TabItem>
    </div>
        
</template>

<style scoped>
    .tab-list{
        margin: 20px;
    }
</style>
