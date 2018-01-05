import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import Search from '@/view/search'
import Lists from '@/view/lists'
import Detail from '@/view/detail'
import axios from 'axios'//vue处理ajax

Vue.prototype.$ajax=axios
Vue.use(Router)

export default new Router({
  routes: [
  	//首页
    {
      path: '/',
      name: 'Index',
      component: Index
      //根据import后的名字
    },
    //搜索
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    //搜索列表
    {
      path: '/lists',
      name: 'Lists',
      component: Lists
    },
    //详情页
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
