<script setup>
const stu = {
    name: "孙悟空",
    age: 18,
    gender: "男"
}

</script>

<template>
    <div>
        <h1><slot name="s1"></slot></h1>
        <div>
            <slot 
                name="s2" 
                :stuName="stu.name"
                :age="stu.age"
                :gender="stu.gender"
                :stu="stu">
            </slot>
        </div>
    </div>
</template>