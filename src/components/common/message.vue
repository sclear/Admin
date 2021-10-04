<template>
  <div>
    <h1 @click="$emit('destroy')">{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, defineEmits, defineProps } from "vue";

const emit = defineEmits(["destroy", "big"]);
const props = defineProps(["title"]);

onUnmounted(() => {
  console.log("close");
});
</script>

<style scoped>
div {
  position: fixed;
  margin-top: 40%;
  margin-left: 50%;
  transform: translate(-50%, -70%);
  top: 0;
  left: 0;
  z-index: 999;
}
</style>
