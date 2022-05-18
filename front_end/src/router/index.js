import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Login',
      component: () => import('@/components/Home'),
      hidden: true,
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/components/Home'),
      hidden: true,
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login'),
      hidden: true,
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('@/components/NotFound'),
      hidden: true,
    },
    {
      path: '/students',
      name: 'Students',
      redirect: '/students/list',
      iconClass: 'fas fa-book-reader',
      component: () => import('@/components/Students'),
      children: [
        {
          path: '/students/list',
          name: 'StuList',
          iconClass: 'fas fa-address-book',
          component: () => import('@/components/students/StuList')
        },
        {
          path: '/students/work',
          name: 'WorkList',
          iconClass: 'fas fa-network-wired',
          component: () => import('@/components/students/WorkList')
        },
        {
          path: '/students/info',
          name: 'StuInfo',
          iconClass: 'fas fa-address-card',
          component: () => import('@/components/students/StuInformation')
        },
        {
          path: '/students/attendance',
          name: 'AttendanceMannage',
          iconClass: 'fas fa-pager',
          component: () => import('@/components/students/AttendanceMannage')
        },
      ]
    },
    {
      path: '/dataAnalysis',
      name: 'DataAnalysis',
      iconClass: 'fas fa-pager',
      component: () => import('@/components/Students'),
      children: [
        {
          path: '/dataAnalysis/dataoverview',
          name: 'DataOverView',
          iconClass: 'fas fa-address-book',
          component: () => import('@/components/dataAnalysis/DataOverView')
        },
        {
          path: '/dataAnalysis/mapData',
          name: 'MapData',
          iconClass: 'fas fa-address-book',
          component: () => import('@/components/dataAnalysis/MapData')
        },
        {
          path: '/dataAnalysis/chinaMap',
          name: 'ChinaMap',
          iconClass: 'fas fa-address-book',
          component: () => import('@/components/dataAnalysis/ChinaMap')
        },
      ]
    },
  ],
  mode: 'history',
  
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("username")) {
      next("/students");
    } else {
      next("/login");
    }
  },
})


