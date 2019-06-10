import Vue from "vue";
import Router from "vue-router";
import Root from "./components/Root.vue";
import Login from "./components/Login.vue";
import { IonicVueRouter } from "@ionic/vue";

Vue.use(IonicVueRouter);
// Vue.use(Router)

const router = new IonicVueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Root",
      component: Root
      // beforeEnter: (to, from, next) => {
      //   console.log(localStorage.getItem('username'))
      //   if (localStorage.getItem('username'))
      //     next()
      //   next('Login')
      // }
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});
router.beforeEach((to, from, next) => {
  console.table({ to, from, next });
  console.log(localStorage.getItem("username"));
  if (!localStorage.getItem("username") && to.name != "Login") {
    next("login");
  }
  next();
});

export default router;
