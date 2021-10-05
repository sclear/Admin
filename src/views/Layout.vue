<template>
  <Header></Header>
  <div class="view-content">
    <MenuSider></MenuSider>
    <View></View>
  </div>
</template>

<script setup lang="ts">
import MenuSider from "./../components/Layout/MenuSider.vue";
import Header from "./../components/Layout/Header.vue";
import View from "./../components/Layout/View.vue";
</script>

<style lang="less">
// @import url("~@/theme/pink/pink.less");
// @import url("~@/theme/dark/dark.less");
// @import url("~@/theme/pink/pink.less");
.view-content {
  height: calc(100vh - 71px);
  display: flex;
  justify-content: flex-start;
}
</style>
