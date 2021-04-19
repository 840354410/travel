import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/testFirst/:id',
          name: 'TestFirst',
          component: resolve => require(['../pages/home/First.vue'], resolve),
          meta: { title: 'first' },
        },{
          path: '/testSecond',
          name: 'TestSecond',
          component: resolve => require(['../pages/home/Second.vue'], resolve),
          meta: { title: 'second' },
        },{
          path: '/card',
          name: 'Card',
          component: resolve => require(['../pages/home/components/Card.vue'], resolve),
          meta: { title: 'card' },
        },
      ]
    },{
      path: '/detail',
      name: 'Detail',
      component: Detail
    }

  ]
})
