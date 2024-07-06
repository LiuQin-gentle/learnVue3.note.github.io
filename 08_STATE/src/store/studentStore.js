import { defineStore } from "pinia";
export const useStudentStore = defineStore("student", {
    state: () => ({
        name: "孙悟空",
        age: 18,
        gender: "男",
        skills: ["筋斗云", "金箍棒", "七十二变"]
    }),
    getters: {
        //两种都可以，推荐使用箭头函数
        title: (state) => {
           return "Mr." + state.name;
        },

        double(){
            return this.age * 2;
        }
    },
    actions: {
        //建议使用普通函数，可以用this引用当前state中的属性
        growUp(){
            throw new Error("出错了");
            this.age++;
        }
    }
})