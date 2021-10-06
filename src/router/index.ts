import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { routerList } from "./modules";
import store from "./../store/index";
import { ElNotification } from "element-plus";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/index.vue"),
  },
  {
    path: "/",
    name: "Layout",
    component: () => import("../views/Layout.vue"),
    redirect: () => "/element/button",
    children: [],
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404/index.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../views/404/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

function getMenu() {
  ElNotification({
    title: "请稍等...",
    message: "路由注册中",
    type: "info",
  });
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve(routerList);
      ElNotification({
        title: "注册成功",
        message: "开始使用吧",
        type: "success",
      });
    }, 2000);
  });
}

const whiteList: Array<string> = ["/login", "/404"];

router.beforeEach(async (to, from, next) => {
  // 允许白名单成员
  if (whiteList.includes(to.path)) {
    return next();
  }
  // 未登录请去注册路由
  else if (!(store.state as { user: any }).user.isLogin) {
    const menu = await getMenu();
    (menu as typeof routerList).forEach((item) =>
      router.addRoute("Layout", item)
    );
    store.commit("user/UPDATE_LOGIN", true);
    return next(to.path);
  } else if ((store.state as { user: any }).user.isLogin) {
    return next();
  }
  //
  next();
});

export default router;
