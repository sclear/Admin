<template>
  <div class="theme-container-view">
    <transition name="fade-scale">
      <div v-if="isSearch" class="search">
        <el-input v-model="value" placeholder="Please input">
          <template style="cursor: pointer" #append>Search</template>
        </el-input>
      </div>
    </transition>
    <transition name="fade-scale">
      <div v-if="!isSearch" class="router-view-wrap">
        <router-view v-slot="{ Component, route }" class="router-animate">
          <transition name="fade-transverse" mode="out-in">
            <keep-alive>
              <component :is="Component" :key="route.path" />
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { ElInput } from "element-plus";

const store = useStore();
const isSearch = computed(() => store.state.setting.isSearch);
const value = ref("");
</script>

<style scoped lang="less">
.theme-container-view {
  height: 100%;
  flex: 1;
  overflow: auto;
  .search {
    height: 100%;
    width: 100%;
    padding: 20vh 20vw 0 20vw;
    box-sizing: border-box;
  }
  .router-view-wrap {
    height: 100%;
    width: 100%;
    .router-animate {
      height: 100%;
      width: 100%;
    }
  }
}

// 过渡动画 横向渐变
.fade-transverse-leave-active,
.fade-transverse-enter-active {
  transition: all 0.2s;
}
.fade-transverse-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-transverse-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.fade-transverse-leave-from {
  opacity: 1;
  transform: translateX(0px);
}
.fade-transverse-enter-from {
  opacity: 1;
  transform: translateX(-30px);
}

.fade-scale-leave-active {
  transition: all 0.2s ease;
}
.fade-scale-enter-active {
  transition: all 0.4s ease;
}
.fade-scale-enter {
  opacity: 1;
  transform: scale(1.2);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
