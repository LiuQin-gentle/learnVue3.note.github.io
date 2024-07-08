<script setup>
    import Mask from './Mask.vue'
    import {defineProps} from 'vue'; 
    import {defineEmits} from 'vue';
    const props = defineProps(["msg"]);
    const emits = defineEmits(["ok", "hide"]);
</script>

<template>
    <Mask>
        <div class="dialog">
            <p class="msg">{{ props.msg }}</p>
            <div class="btn">
                <button @click="$emit('hide')" class="cancel">取消</button>
                <button 
                    @click="() => {
                        $emit('ok')
                        $emit('hide')
                    }" 
                    class="ok">
                    确认
                </button>
            </div>
        </div>
    </Mask>
</template>

<style scoped>
.dialog{
    position: absolute;
    width: 700rem;
    height: 400rem;
    left: 0;
    right: 0;
    top: 250rem;
    background-color: white;
    border-radius: 40rem;
    margin: 0 auto;
}

.msg{
    height: 300rem;
    font-size: 40rem;
    text-align: center;
    line-height: 260rem;
}

.btn{
    display: flex;
    justify-content: space-around;
}

button{
    width: 300rem;
    height: 80rem;
    border: 1px solid #000;
    background-color: white;
    border-radius: 40rem;
    font-size: 32rem;
}

.ok{
    border: none;
    background-color: rgb(248,188,0);
}
</style>