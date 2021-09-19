<template>
  <div class="menu-slider">
    <el-menu
      class="el-menu-vertical-demo"
      size="small"
      @select="select"
      :default-active="activeMenu"
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

interface IMenuList {
  name: string;
  path: string;
  icon?: string;
  children?: IMenuList[];
}
const menu = reactive<IMenuList[]>([
  {
    name: "page",
    icon: "el-icon-Box",
    path: "/home",
  },
  {
    name: "Element+",
    icon: "el-icon-Basketball",
    path: "/element",
    children: [
      {
        name: "基础",
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
        ],
      },
      {
        name: "表单",
        path: "/form",
        children: [
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
        name: "Button",
        path: "/home",
      },
      {
        name: "Link",
        path: "/home",
      },
    ],
  },
  {
    name: "业务示例",
    icon: "el-icon-Box",
    path: "/example",
  },
]);

const store = useStore();
const isCollapse = computed(() => store.state.setting.isCollapse);
const activeMenu = computed(() => store.state.setting.activeMenu);
function select(path: string) {
  store.commit("MENU_ACTIVE", path);
}
</script>

<style scoped lang="less">
.menu-slider {
  height: 100%;
  overflow: auto;
}
</style>
