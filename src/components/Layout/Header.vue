<template>
  <div class="header theme-header">
    <div class="head-l">
      <div :class="isCollapse ? 'logo mini-logo' : 'logo'">
        <h2 class="theme-icon" v-if="!isCollapse">Admin</h2>
        <h4 class="theme-icon" v-else>Admin</h4>
      </div>
      <el-icon
        :class="isCollapse ? 'icon icon-close' : 'icon'"
        @click="updateMenuStatu"
      >
        <fold class="theme-icon" />
      </el-icon>
    </div>
    <div class="head-r">
      <div @click="search" class="theme">
        <i class="iconfont icon-sousuoxiao theme-icon"></i>
      </div>

      <ElDropdown @command="changeTheme">
        <div class="theme">
          <i class="iconfont icon-zhuti theme-icon"></i>
        </div>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem command="pink">粉红少女心</ElDropdownItem>
            <ElDropdownItem command="dark">黑色冷幽默</ElDropdownItem>
            <ElDropdownItem>正常风格</ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
      <ElDropdown @command="centerSetting">
        <div class="user">
          <img
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            alt=""
          />
        </div>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem>个人中心</ElDropdownItem>
            <ElDropdownItem>系统设置</ElDropdownItem>
            <ElDropdownItem command="loginOut">退出系统</ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ElIcon,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElNotification,
} from "element-plus";
import { Fold } from "@element-plus/icons";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import { useTheme } from "@/util/hooks";
import { useRoute } from "vue-router";
import { watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";

const router = useRouter();
const theme = useTheme();
function changeTheme(type: "dark" | "pink") {
  theme.value = type;
}
function centerSetting(type) {
  if (type) {
    sessionStorage.removeItem("token");
    router.push("/login");
    ElNotification({
      title: "提示",
      message: "退出成功",
      type: "success",
    });
  }
}

const store = useStore();
const route = useRoute();
watch(route, () => store.commit("setting/OPEN_SEARCH", false));
const search = () => store.commit("setting/OPEN_SEARCH");
const isCollapse = computed(() => store.state.setting.isCollapse);
const updateMenuStatu = () => store.commit("setting/UPDATE_COLLAPSE");
</script>

<style scoped lang="less">
.header {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 60px;
  box-sizing: border-box;
  .head-l {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .icon {
      transform: scale(1.5) rotate(0);
      cursor: pointer;
      color: #606266;
      transition: all 0.2s linear;
      margin-left: 5px;
    }
    .icon-close {
      transform: scale(1.5) rotate(180deg);
    }
  }
  .head-r {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .theme {
      height: 40px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 20px 0 0;
      i {
        font-size: 20px;
        cursor: pointer;
      }
    }
    .user {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .logo {
    width: 200px;
    transition: all 0.2s linear;
    text-align: center;
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
