import Vue from 'vue'
import Router from 'vue-router'
import Login from "../views/Login";
import sindex from "../views/sindex";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'sindex',
      component: sindex
    }

  ]
})
