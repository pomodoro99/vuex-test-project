import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AxiosView from '../views/AxiosView.vue'
import Store from '@/store' //store/의 index.js 를 가져옴

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/info',
    name: 'info',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      title: 'About'
    }
  },
  {
    path: '/axios',
    name: 'axios',
    component: AxiosView,
    meta: {
      title: 'Blog검색'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach(function (to, from) {

  //Store.state.title = to.meta.title;    //meta의 title값을 가져와서 store에 저장
  Store.commit('setTitle', to.meta.title);    //store에서 mutations 사용시

})

export default router
