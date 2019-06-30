import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/hi1'
import Hi2 from '@/components/hi2'
import Params from '@/components/params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default:HelloWorld,
        left:Hi1,
        right:Hi2
      }
    },
    {
      path: '/Hi',
      components: {
        default:Hi,
        left:Hi2,
        right:Hi1
      },
    },
    {
      path:'/params/:newsId/:newsTitle',
      component:Params
    },
    {
      path:'*',
      component:Error
   }
  ]
})
