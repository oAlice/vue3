import Vue from 'vue'
import Router from 'vue-router'
import Home from './view/Home.vue'
import About from './view/About.vue'
import Footer from './view/Footer.vue'

Vue.use(Router)

export default new Router({
 routes:[{
    path:'/',
    name:'home',
    component:Home
      },
      {
          path:'/about',
          name:' about',
          component: About
      },{
          path:'/footer',
          name:'footer',
          component:Footer
      }
  ]


})