import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/loading-icon',
      name: 'loadingIcon',
      component: resolve => { require(['../components/loadingIcon'], resolve) }
    }
  ]
})

export default router
