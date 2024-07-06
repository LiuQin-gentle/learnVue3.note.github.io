 //引入defineStore()
 import { defineStore } from "pinia";
import { computed } from "vue";
import { ref } from "vue";

 //通过函数来创建store
 //defineStore("store的id"， 配置对象)
 //配置对象：state，是一个函数，将需要由pinia维护的数据对象以对象的形式返回
 export const useCountStore = defineStore("count", {
    //数据
    state: () => ({
        count:100,
        name: "孙悟空",
        age: 18,
        gender: "男",
    }),
    //计算属性
    getters: {
        double: (state) => state.count * 2
    },

    //方法 
    actions: {
        increament(){
            this.count++;
        }
    }

 })

// export const useCountStore = defineStore("count", () => {
//     //定义数据
//     const count = ref(50);
//     const name = "孙悟空";
//     const double = computed(() => count.value * 2);
//     function increament() {
//         count.value++;
//     }
//     return {count, name, double, increament};
// })