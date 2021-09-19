<template>
  <div class="header">
    <div class="head-l">
      <div :class="isCollapse ? 'logo mini-logo' : 'logo'">
        <img v-if="!isCollapse" src="@/assets/images/l.png" alt="" />
        <img v-else src="@/assets/images/s.png" alt="" />
      </div>
      <el-icon
        :class="isCollapse ? 'icon icon-close' : 'icon'"
        @click="updateMenuStatu"
      >
        <fold />
      </el-icon>
    </div>
    <div class="head-r"></div>
  </div>
</template>

<script setup lang="ts">
import { ElIcon } from "element-plus";
import { Fold } from "@element-plus/icons";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

const store = useStore();
const isCollapse = computed(() => store.state.setting.isCollapse);
function updateMenuStatu() {
  store.commit("setting/UPDATE_COLLAPSE");
}
</script>

<style scoped lang="less">
.header {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  .head-l {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .icon {
      transform: scale(1.5) rotate(0);
      cursor: pointer;
      color: #606266;
      transition: all 0.2s linear;
      margin-left: 30px;
    }
    .icon-close {
      transform: scale(1.5) rotate(180deg);
    }
  }
  .logo {
    width: 200px;
    transition: all 0.2s linear;
    img {
      height: 50px;
    }
  }
  .mini-logo {
    width: 60px;
    transition: all 0.1s linear;
  }
}
</style>
