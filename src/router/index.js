import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'


import Middlewares  from '../middlewares/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      middlwares: [Middlewares.guest]
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      middlwares: [Middlewares.guest]
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      middlwares: [Middlewares.auth]
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
 if (to.meta.middlwares){
   const MIDDLEWARES = Array.isArray(to.meta.middlwares) ? to.meta.middlwares : [to.meta.middlwares]

   const CTX= {
     from,
     next,
     router,
     to
   }
   const NEXT_MIDDLEWARE = nextCheck(CTX, MIDDLEWARES, 0)
   return MIDDLEWARES [0]({...CTX, next: NEXT_MIDDLEWARE})
 }
  next()
})

function nextCheck(context, middlewares, index){
  const NEXT_MIDDLEWARE = middlewares[index]
  if (!NEXT_MIDDLEWARE){
    return context.next
  }

  return  (...parameters) => {
    const nextMiddle = nextCheck(context, middlewares, index + 1)
    NEXT_MIDDLEWARE({...context, next: nextMiddle})
  }
}


export default router
