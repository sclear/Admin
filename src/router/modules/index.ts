export const routerList = [
  {
    path: "/element/button",
    name: "Button",
    component: () => import("@/views/element/button/index.vue"),
  },
  {
    path: "/element/icon",
    name: "Icon",
    component: () => import("@/views/element/Icon/index.vue"),
  },
  {
    path: "/element/radio",
    name: "Radio",
    component: () => import("@/views/element/radio/index.vue"),
  },
  {
    path: "/element/inputnumber",
    name: "InputNumber",
    component: () => import("@/views/element/inputNumber/index.vue"),
  },
  {
    path: "/hooks/useTheme",
    name: "useTheme",
    component: () => import("@/views/hooks/useTheme.vue"),
  },
  {
    path: "/hooks/usePagination",
    name: "usePagination",
    component: () => import("@/views/hooks/usePagination.vue"),
  },
  {
    path: "/hooks/useValidate",
    name: "useValidate",
    component: () => import("@/views/hooks/useValidate.vue"),
  },
  {
    path: "/hooks/useOSComponent",
    name: "useOSComponent",
    component: () => import("@/views/hooks/useOSComponent.vue"),
  },
  {
    path: "/example",
    name: "Example",
    component: () => import("@/views/example/index.vue"),
  },
];
