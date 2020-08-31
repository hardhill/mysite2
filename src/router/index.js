import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Project01 from '../views/Project01.vue'
import NotFound from '../views/404.vue'
import Matterjs01 from "@/views/Matterjs01"
import Matterjs02 from "@/views/Matterjs02"
import P5_01 from "../views/P5_01";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/canvas/p1',
    name: 'Project01',
    component: Project01

  },
    {
      path:'/matterjs/p1',
      name:'Matterjs01',
      component: Matterjs01
    },
    {
      path:'/matterjs/p2',
      name:'Matterjs02',
      component: Matterjs02
    },
    {
      path:'/p5/p1',
      name:'P5_01',
      component: P5_01
    },
    {
      path:'*',
      component: NotFound
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
