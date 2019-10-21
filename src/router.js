/*
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-09-28 17:54:07
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-21 15:29:21
 */
import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import index from './views/index/index.vue'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '首页',
      component: index
    },
    {
      path: '/login',
      name: '登录',
      component: () => import('./views/login/login.vue')
    },
    {
      path: '/regist',
      name: '注册',
      component: () => import('./views/regist/regist.vue')
    },
    {
      path: '/forget',
      name: '忘记密码',
      component: () => import('./views/forget/forget.vue')
    },
    {
      path: '/naifen',
      name: '奶粉专区',
      component: () => import('./views/naifen/naifen.vue')
    },
    {
      path: '/sou',
      name: 'sou',
      component: () => import('./views/sou/sou.vue')
    },
    {
      path: '/fenlei',
      name: '分类',
      component: () => import('./views/fenlei/fenlei.vue')
    },
    {
      path: '/shopcar',
      name: '购物车空',
      component: () => import('./views/shopcar/shopcar.vue')
    },
    {
      path: '/shopche',
      name: '购物车有',
      component: () => import('./views/shopcar/shopche.vue')
    },
    {
      path: '/ceshi',
      name: '测试',
      component: () => import('./views/ceshi/ceshi.vue')
    },
    {
      path: '/xbannerlist',
      name: 'xbannerlist',
      component: () => import('./views/index/xbannerlist.vue')
    },
    {
      path: '/renjian',
      name: 'renjian',
      component: () => import('./views/active/renjian.vue')
    },
    {
      path: '/goodxq',
      name: 'goodxq',
      component: () => import('./views/good/goodxq.vue')
    },
    {
      path: '/pingjia',
      name: 'pingjia',
      component: () => import('./views/pingjia/pingjia.vue')
    },
    {
      path: '/dingdan',
      name: '我的订单',
      component: () => import('./views/dingdan/dingdan.vue')
    },
    {
      path: '/daifu',
      name: '发起代付请求',
      component: () => import('./views/dingdan/daifu.vue')
    },
    {
      path: '/ddxq',
      name: '订单详情',
      component: () => import('./views/dingdan/ddxq.vue')
    },
    {
      path: '/zhifu',
      name: '支付',
      component: () => import('./views/dingdan/zhifu.vue')
    },
    {
      path: '/tuihuan',
      name: '退换',
      component: () => import('./views/shouhou/tuihuan.vue')
    },
    {
      path: '/pjsh',
      name: '评价售后服务',
      component: () => import('./views/shouhou/pingjia.vue')
    },
    {
      path: '/pjfw',
      name: '评价服务',
      component: () => import('./views/shouhou/pjfw.vue')
    },
    {
      path: '/shlx',
      name: '退换售后',
      component: () => import('./views/shouhou/shlx.vue')
    },
    {
      path: '/thsh',
      name: '退换/售后',
      component: () => import('./views/shouhou/thsh.vue')
    },
    {
      path: '/tkxq',
      name: '退款详情',
      component: () => import('./views/shouhou/tkxq.vue')
    },
    {
      path: '/xsls',
      name: '协商历史',
      component: () => import('./views/shouhou/xsls.vue')
    },
    {
      path: '/shrz',
      name: '协商历史',
      component: () => import('./views/shouhou/shrz.vue')
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: () => import('./views/denglu/denglu.vue')
    },
    {
      path: "/zujian",
      name: "zujian",
      component: () => import('./components/gou.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/index/About.vue')
    // }
  ]
})
export default router