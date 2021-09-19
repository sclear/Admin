import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/index.vue"),
  },
  {
    path: "/element",
    name: "Element",
    component: () => import("../views/Layout.vue"),
    redirect: () => "/element/button",
    children: [
      {
        path: "button",
        name: "Button",
        component: () => import("@/views/element/button/index.vue"),
      },
      {
        path: "icon",
        name: "Icon",
        component: () => import("@/views/element/Icon/index.vue"),
      },
      {
        path: "radio",
        name: "Radio",
        component: () => import("@/views/element/radio/index.vue"),
      },
      {
        path: "inputnumber",
        name: "InputNumber",
        component: () => import("@/views/element/inputNumber/index.vue"),
      },
      {
        path: "/example",
        name: "Example",
        component: () => import("@/views/example/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
