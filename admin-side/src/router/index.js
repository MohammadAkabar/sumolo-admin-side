import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import TableRent from '../components/TableRent.vue'
import TableAssets from '../components/TableAssets.vue'
import AddAssets from '../views/AddAssets.vue';
import EditAssets from '../views/EditAssets.vue';
import AddRequest from '../views/AddRequest.vue';
import Dashboard from '../views/Dashboard.vue';
import Log from '../components/TableLog.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/rent',
      component:TableRent
    },
    {
      path: '/assets',
      component:TableAssets,
      meta: {
        title: 'Welcome to the vehicle'
      }
    },
    {
      path: '/AddAssets',
      component:  AddAssets
    },
    {
      path: '/editAssets/:id',
      component:  EditAssets
    },
    {
      path: '/addRequest',
      component: AddRequest
    },
    {
      path: '/',
      component:Dashboard,
      meta: {
        title: 'Welcome to the dashboard'
      }
    },
    {
      path:'/log',
      component:Log
    }
  ]
})  
                  //to Url, from url,next url
router.beforeEach((to,_,next)=>{ //navguard
  const isLogin = !!localStorage.getItem('access_token');
  const title = to.meta.title

  if (title) {
    document.title = title
  }else{
    document.title = 'PT Nikel'
  }


  if(isLogin && to.path === '/login'){
    next('/')
  } else if(!isLogin && to.path !=='/login'){
    next('/login')
  }
   else{
    next()
  }
})

export default router
