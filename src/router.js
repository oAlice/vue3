import Vue from 'vue'
import Router from 'vue-router'
import Home from './view/Home.vue'
import About from './view/About.vue'
import Footer from './view/Footer.vue'
import Detail from './components/Detail.vue'

Vue.use(Router)

export default new Router({
    routes:[{
    path:'/',
    name:'home',
    component:Home
      },
      {
          path:'/About/:fenlei',
          name:' about',
          component: About
      },{
        path:'/detail/:id',
        name:'detail',
        component:Detail
    },{
          path:'/Footer',
          name:'footer',
          component:Footer
      }
  ]


})