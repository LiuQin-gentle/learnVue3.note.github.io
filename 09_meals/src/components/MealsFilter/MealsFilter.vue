<template>
    <div class="filter">
        <div class="filter-inner">
            <i class="ri-search-line"></i>
            <input class="fliter-input" placeholder="请输入关键字">
        </div> 
    </div>
</template>
<style scoped>
    .filter{
        padding: 20rem 40rem;
        border-bottom: 1px solid #e6e6e6;
    }

    .filter-inner{
        height: 80rem;
        display: flex;
        align-items: center;
        position: relative;
    }

    .fliter-input{
        background-color: rgb(242,242,242);
        border: none;
        width: 100%;
        height: 100%;
        border-radius: 40rem;
        padding: 0 60rem 0 80rem;
    }

    .filter-inner i {
        color: rgb(184,184,184);
        font-size: 30rem;
        position: absolute;
        left: 30rem;
    }
</style>