import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import SalesIndex from "../views/SalesIndex.vue";
import SalesNew from "../views/SalesNew.vue";
import SalesShow from "../views/SalesShow.vue";
import SalesEdit from "..//views/SalesEdit.vue";
// import

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
  },
  {
    path: "/sales/new",
    name: "sales-new",
    component: SalesNew,
  },
  {
    path: "/sales",
    name: "sales-index",
    component: SalesIndex,
  },
  {
    path: "/sales/:id",
    name: "sales-show",
    component: SalesShow,
  },
  {
    path: "/sales/:id/edit",
    name: "sales-edit",
    component: SalesEdit,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
