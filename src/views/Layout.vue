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

<style>
.view-content {
  height: calc(100vh - 71px);
  display: flex;
  justify-content: flex-start;
}
</style>
