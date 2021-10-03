<template>
  <div class="menu-slider">
    <el-menu
      class="el-menu-vertical-demo"
      size="small"
      :default-active="route.path"
      :router="true"
      :unique-opened="true"
      :collapse="isCollapse"
    >
      <MenuItem :menuInfo="menu"></MenuItem>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import { ElMenu } from "element-plus";
import MenuItem from "./MenuItem.vue";
import { useRoute } from "vue-router";

interface IMenuList {
  name: string;
  path?: string;
  icon?: string;
  children?: IMenuList[];
}
const menu = reactive<IMenuList[]>([
  {
    name: "page",
    icon: "iconfont icon-gongzuotai",
    path: "/home",
  },
  {
    name: "Element+",
    icon: "iconfont icon-yewuzu",
    path: "/element",
    children: [
      {
        name: "Button",
        path: "/element/button",
      },
      {
        name: "Icon",
        path: "/element/icon",
      },

      {
        name: "Radio",
        path: "/element/radio",
      },
      {
        name: "inputNumber",
        path: "/element/inputnumber",
      },
    ],
  },
  {
    name: "业务示例",
    icon: "iconfont icon-yewuzu",
    path: "/example",
  },
  {
    name: "Hooks",
    icon: "iconfont icon-yewuzu",
    path: "hooks",
    children: [
      {
        path: "/hooks/useTheme",
        name: "useTheme",
      },
      {
        path: "/hooks/usePagination",
        name: "usePagination",
      },
      {
        path: "/hooks/useValidate",
        name: "useValidate",
      },
      {
        path: "/hooks/useOSComponent",
        name: "useOSComponent",
      },
    ],
  },
]);
const route = useRoute();

const store = useStore();
const isCollapse = computed(() => store.state.setting.isCollapse);
// function select(path: string) {
//   store.commit("MENU_ACTIVE", path);
// }
</script>

<style scoped lang="less">
.menu-slider {
  height: 100%;
  overflow: auto;
}
</style>
