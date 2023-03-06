import { createRouter, createWebHistory } from "vue-router";
import ContainerLayout from "./ContainerLayout.routes";
const routes = [{ ...ContainerLayout }];
export const router = createRouter({
  history: createWebHistory(), // history: createWebHashHistory(),
  linkActiveClass: "active-link",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});
export default router;
