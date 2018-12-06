import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import User from "./views/User.vue";
import Login from "./views/Login.vue";
import About from "./views/About.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/about",
      name: "about",
      component: About,
      meta: { requiresAuth: true }
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      //   import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/",
      name: "Home",
      component: Home,
     
        // called when the route that renders this component is about to
        // be navigated away from.
        // has access to `this` component instance.
      
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: { requiresAuth: false }
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



