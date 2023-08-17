<script setup>
/*
    父组件可以通过props来向子组件传递数据
    注意：父组件传递给子组件的props都是只读的，无法修改
*/
    import {defineProps} from 'vue';
    //const props = defineProps(["count", "obj"]);
    const props = defineProps({
        count: Number,
        obj: Object,
        isCheck: Boolean,
        maxLength: {
            type: String,
            required: true,
            default: "哈哈",
            validator(value){
                return value !== "嘻嘻";
            }
        }
    })
</script>
<template>
    <div>
        <h2>我是子组件,{{ props.obj.count}}</h2>

        <!-- 尽量不要这样写，不要在子组件修改父组件的数据 -->
        <button @click="props.obj.count++">MB的按钮</button>
        <hr>
    </div>
</template>

<style scoped>
    div{
        color: tomato;
    }
</style>