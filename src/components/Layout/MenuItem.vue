<template>
  <template v-for="item in menuInfo" :key="item.name">
    <el-sub-menu v-if="item.children" :index="item.path">
      <template #title>
        <i class="menu-icon" :class="item.icon"></i>
        <span>{{ item.name }}</span>
      </template>
      <menuItemSliders :menuInfo="item.children"></menuItemSliders>
    </el-sub-menu>
    <el-menu-item v-else :index="item.path">
      <i class="menu-icon" :class="item.icon"></i>
      <span>{{ item.name }}</span>
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
import { ElSubMenu, ElMenuItem } from "element-plus";
import { defineProps } from "vue";
import { MenuItemx as menuItemSliders } from "./index";

defineProps({
  menuInfo: Array,
});
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: calc(100vh - 72px);
  width: 200px;
}
.menu-icon {
  color: #000;
  margin-right: 4px;
}
</style>
