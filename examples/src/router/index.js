import Vue from 'vue'
import VueRouter from 'vue-router'
import { closeAllPopups } from 'vue-human/suites/popup/storage'

const defaultTitle = document.title

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      component: resolve => { require(['../components/dashboard/layout'], resolve) },
      children: [
        {
          path: '/',
          name: 'homepage',
          component: resolve => { require(['../components/home'], resolve) }
        },
        {
          path: '/button',
          name: 'button',
          component: resolve => { require(['../components/button'], resolve) }
        },
        {
          path: '/icon',
          name: 'icon',
          component: resolve => { require(['../components/icon'], resolve) }
        },
        {
          path: '/counter',
          name: 'counter',
          component: resolve => { require(['../components/counter'], resolve) }
        },
        {
          path: '/scroller',
          name: 'scroller',
          component: resolve => { require(['../components/scroller'], resolve) }
        },
        {
          path: '/column',
          name: 'column',
          component: resolve => { require(['../components/column'], resolve) }
        },
        {
          path: '/popup',
          name: 'popup',
          component: resolve => { require(['../components/popup'], resolve) }
        },
        {
          path: '/paginate',
          name: 'paginate',
          component: resolve => { require(['../components/paginate'], resolve) }
        },
        {
          path: '/cell',
          name: 'cell',
          component: resolve => { require(['../components/cell'], resolve) }
        },
        {
          path: '/image',
          name: 'image',
          component: resolve => { require(['../components/image'], resolve) }
        },
        {
          path: '/input',
          name: 'input',
          component: resolve => { require(['../components/input'], resolve) }
        },
        {
          path: '/form',
          name: 'form',
          component: resolve => { require(['../components/form'], resolve) }
        },
        {
          path: '/modal',
          name: 'modal',
          component: resolve => { require(['../components/modal'], resolve) }
        },
        {
          path: '/check',
          name: 'check',
          component: resolve => { require(['../components/check'], resolve) }
        },
        {
          path: '/carousel',
          name: 'carousel',
          component: resolve => { require(['../components/carousel'], resolve) }
        },
        {
          path: '/container',
          name: 'container',
          component: resolve => { require(['../components/container'], resolve) }
        },
        {
          path: '/message',
          name: 'message',
          component: resolve => { require(['../components/message'], resolve) }
        },
        {
          path: '/confirm',
          name: 'confirm',
          component: resolve => { require(['../components/confirm'], resolve) }
        },
        {
          path: '/alert',
          name: 'alert',
          component: resolve => { require(['../components/alert'], resolve) }
        },
        {
          path: '/loading-mask',
          name: 'loadingMask',
          component: resolve => { require(['../components/loadingMask'], resolve) }
        },
        {
          path: '/action-sheet',
          name: 'actionSheet',
          component: resolve => { require(['../components/actionSheet'], resolve) }
        },
        // {
        //   path: '/dashboard',
        //   name: 'dashboard',
        //   component: resolve => { require(['../components/dashboard'], resolve) }
        // },
        {
          path: '/datetime',
          name: 'datetime',
          component: resolve => { require(['../components/datetime'], resolve) }
        },
        {
          path: '/radio',
          name: 'radio',
          component: resolve => { require(['../components/radio'], resolve) }
        },
        {
          path: '/select',
          name: 'select',
          component: resolve => { require(['../components/select'], resolve) }
        },
        {
          path: '/switch',
          name: 'switch',
          component: resolve => { require(['../components/switch'], resolve) }
        },
        {
          path: '/textarea',
          name: 'textarea',
          component: resolve => { require(['../components/textarea'], resolve) }
        },
        {
          path: '/tag',
          name: 'tag',
          component: resolve => { require(['../components/tag'], resolve) }
        },
        {
          path: '/search-bar',
          name: 'searchBar',
          component: resolve => { require(['../components/searchBar'], resolve) }
        },
        {
          path: '/rate',
          name: 'rate',
          component: resolve => { require(['../components/rate'], resolve) }
        },
        {
          path: '/tab-bar',
          name: 'tabBar',
          component: resolve => { require(['../components/tabBar'], resolve) }
        },
        {
          path: '/nav-bar',
          name: 'navBar',
          component: resolve => { require(['../components/navBar'], resolve) }
        },
        {
          path: '/menu',
          name: 'menu',
          component: resolve => { require(['../components/menu'], resolve) }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  closeAllPopups()
  next()
})

router.afterEach(route => {
  require(['../components/base/menu'], resolve => {
    const menu = resolve.default
    let title = defaultTitle

    if (route.name) {
      menu.forEach(item => {
        item.children.forEach(item => {
          if (item.push && item.push.name && item.push.name === route.name) {
            title = item.small
          }
        })
      })
    }

    document.title = title
  })
})

export default router
