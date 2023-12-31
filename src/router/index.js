// Composables
import { createRouter, createWebHistory } from "vue-router";
import Default from "@/layouts/default/Default.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
const routes = [
  {
    path: "/",
    component: Default,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/auth/login",
        name: "login",
        component: Login,
      },
      {
        path: "/signup",
        name: "signup",
        component: () => import("@/views/SignUp.vue"),
      },
      {
        path: "/attractions",
        name: "attractionlist",
        component: () => import("@/views/AttractionList.vue"),
        props: "true",
      },
      {
        path: "/boardlist",
        name: "boardlist",
        component: () => import("@/views/BoardList.vue"),
      },
      {
        path: "/attractions/:id",
        name: "attractiondetail",
        component: () => import("@/views/AttractionDetail.vue"),
      },
      {
        path: "/boardwrite",
        name: "boardwrite",
        component: () => import("@/views/BoardWrite.vue"),
      },
      {
        path: "/boarddetail/:articleNo",
        name: "boarddetail",
        component: () => import("@/views/BoardDetail.vue"),
      },
      {
        path: "/mypage",
        name: "mypage",
        component: () => import("@/views/MyPage.vue"),
      },
      {
        path: "/follower",
        name: "follower",
        component: () => import("@/views/Follower.vue"),
      },
      {
        path: "/following",
        name: "following",
        component: () => import("@/views/Following.vue"),
      },
      {
        path: "/userpage",
        name: "userpage",
        component: () => import("@/views/UserPage.vue"),
      },
      {
        path: "/beforeedit",
        name: "beforeedit",
        component: () => import("@/views/BeforeEdit.vue"),
      },
      {
        path: "/myinfoedit",
        name: "myinfoedit",
        component: () => import("@/views/MyInfoEdit.vue"),
      },
      {
        path: "/profileChange",
        name: "profileChange",
        component: () => import("@/views/profileImgChange.vue"),
      },
      {
        path: "/signupclear",
        name: "signupclear",
        component: () => import("@/views/SignUpClear.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
