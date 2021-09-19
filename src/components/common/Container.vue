<template>
  <div class="container">
    <div v-if="slots.header" class="container-header">
      <slot name="header"></slot>
    </div>
    <div class="container-body">
      <slot></slot>
    </div>
    <div v-if="slots.footer" class="container-footer">
      <slot name="footer"></slot>
    </div>
    <div v-if="slots.pagination" class="container-pagination">
      <slot name="pagination"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from "vue";
const slots = useSlots();
</script>

<style lang="less">
.container {
  height: 100%;
  width: 100%;
  overflow: auto;
  position: relative;
  .container-header {
    border-bottom: 1px solid #e6e6e6;
    padding: 15px;
    box-sizing: border-box;
  }
  .container-body {
    padding: 15px;
    box-sizing: border-box;
    width: 100%;
  }
  .container-footer {
    width: 100%;
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 15px;
    height: 100px;
    box-sizing: border-box;
  }
  .container-pagination {
    width: 100%;
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    background: #F3F6F7;
    z-index: 9999;
  }
}
</style>
