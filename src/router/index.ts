import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { routerList } from "./modules";
import store from "./../store/index";
import { ElNotification } from "element-plus";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/Login",
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
        title: "Success",
        message: "开始使用吧",
        type: "success",
      });
    }, 2000);
  });
}

// BAD
router.beforeEach(async (to, from, next) => {
  // 是否登录
  if (!(store.state as { user: any }).user.isLogin) {
    const menu = await getMenu();
    (menu as typeof routerList).forEach((item) =>
      router.addRoute("Layout", item)
    );
    store.commit("user/UPDATE_LOGIN", true);
    return next(to.path);
  }
  next();
});

export default router;
