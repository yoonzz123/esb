import { createRouter, createWebHistory } from "vue-router";
import ErrorPage from "@/components/ErrorPage.vue";
import HomePage from "@/components/HomePage.vue";
import TestPage from "@/components/TestPage.vue";
import VexFlowPage from "@/components/VexFlowPage.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: "/test", name: "Test", component: TestPage },
    { path: "/vexFlow", name: "VexFlow", component: VexFlowPage },

    {
      path: "/:pathMatch(.*)",
      name: "not-found",
      component: ErrorPage,
    },
  ],
});

export default router;
