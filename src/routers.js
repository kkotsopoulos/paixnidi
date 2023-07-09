import HomePage from "./components/Home.vue";
import SignIn from "./components/SignIn.vue";
import NewRegister from "./components/register.vue";
import DrawPage from "./components/DrawPage.vue";
import DrawHistory from "./components/DrawPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    component: HomePage,
    path: "/home-page",
  },
  {
    name: "SignIn",
    component: SignIn,
    path: "/",
  },
  {
    name: "Register",
    component: NewRegister,
    path: "/register",
  },
  {
    name: "DrawPage",
    component: DrawPage,
    path: "/draw-page",
  },
  {
    name: "DrawHistory",
    component: DrawHistory,
    path: "/draw-history",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
