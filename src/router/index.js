import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HomePage.vue";
import RoomDetel from "../components/RoomDetel.vue";
import Admin from "../views/AdminPageHome.vue";
import BookingpageDet from "../components/BookintDetile.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      children: [
        {
          path: "/admin/RoomDetel/:id",
          component: RoomDetel,
          name: "admin/RoomDetel",
        },
      ],
    },
    {
      path: "/admin/addRoom",
      name: "addpage",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AdminpageAddRoom.vue"),
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/RegisterView.vue"),
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Bookingpage",
      name: "Bookingpage",
      component: () => import("../components/Bookingpage.vue"),
      children: [
        {
          path: "/Bookingpage/:id",
          component: BookingpageDet,
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../components/Page404.vue"),
    },
    {
      path: "/BooKintDetal",
      component: () => import("../components/BookintDetile.vue"),
    },
    {
      name: "Profile",
      path: "/Profile",
      component: () => import("../components/ProFile.vue"),
    },
    {
      name: "History",
      path: "/History",
      component: () => import("../components/History.vue"),
    },
  ],
});

export default router;
