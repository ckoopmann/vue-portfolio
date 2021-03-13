import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import Projects from "./views/Projects.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/projects",
      component: Projects,
    },
  ],
});
export default router;
