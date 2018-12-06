import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import User from "./views/User.vue";
import Login from "./views/Login.vue";
import About from "./views/About.vue";

Vue.use(Router);
var loggedin = false
const router = new Router({
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
      meta: { requiresAuth: true },
      beforeEnter: (to, from, next) => {
        if (loggedin) {
          next()
        } else {
          next({ path: '/Login' })
        }
      }
    },
    {
      path: "/",
      name: "Home",
      component: Home
    },

    {
      path: "/user/:id",
      name: "User",
      component: User,
      meta: { requiresAuth: true }
    },

  ]
})

// router.beforeResolve((to, from, next) => {
//   console.log(to)
//   if (to.meta.requiresAuth) {
//     // const authUser = JSON.parse(window.localStorage.getItem('authUser'))
//     console.log("auth")
//     var authUser = false
//     if (authUser==true) {
//       next()
//       console.log('pass')
//     } else {
//       next({ path: '/' })
//     }
//   }
//   next()
// })

export default router



