//创建一个路由器，并暴露出去

//第一步：引入createRouter
import { createRouter, createWebHistory } from "vue-router";
//引入一个一个可能要呈现的组件
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import News from "@/components/News.vue";

//第二步：创建路由器
const router = createRouter({
  history: createWebHistory(),//路由器的工作模式
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    { 
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/news',
      name: 'news', 
      component: News
    },
  ]
})

//第三步：暴露出去
export default router


