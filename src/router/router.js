import { createRouter, createWebHashHistory } from "vue-router";

import LandingPage from "@/views/LandingPage";
import GetStartedView from "@/views/GetStartedView";
import Homepage from "@/views/HomePage";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Landingspage",
      component: LandingPage,
    },
    {
      path: "/get-started",
      name: "Get Started",
      component: GetStartedView,
    },
    {
      path: "/homepage",
      name: "Homepage",
      component: Homepage,
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});
