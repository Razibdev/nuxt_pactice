import { createWebHistory, createRouter } from "vue-router";
import TheHome from "@/views/TheHome.vue";
import TheAbout from "@/views/TheAbout.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: TheHome,
  },
  {
    path: "/about",
    name: "About",
    component: TheAbout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
