import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件
import home from './views/home.vue'
import what from './views/what.vue'
import how from './views/how.vue'
import why from './views/why.vue'
import who from './views/who.vue'
import gallery from './views/gallery.vue'

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter)

// 2. 定义路由
// 每个路由应该映射一个组件。
const routes = [
  {
    path: '/',
    component: home,
  },
  {
    path: '/what',
    component: what,
  },
  {
    path: '/how',
    component: how,
  },
  {
    path: '/why',
    component: why,
  },
  {
    path: '/who',
    component: who,
  },
  {
    path: '/gallery',
    component: gallery,
  },
  // 重定向，因为首次进入页面时，它的路径是 ‘/’。
  {
    path: '/',
    redirect: '/'
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
  linkActiveClass: 'active' // 默认值: "router-link-active",全局配置 <router-link> 的默认“激活 class 类名”
})

export default router
