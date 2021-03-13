import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Projects from "./components/Projects.vue";
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
