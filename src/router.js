import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/user",
      name: "user",
      //component: Home
      component: () =>
      import(/* webpackChunkName: "about" */ "./views/User.vue")
    },
    {
      path: "/mail",
      name: "mail",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Mail.vue")
    },
    {
      path: "/log",
      name: "log",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Log.vue")
    },
    {
      path: "/message",
      name: "message",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Message.vue")
    }
  ]
});
