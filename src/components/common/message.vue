<template>
  <div @click="$emit('destroy')">
    1111
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, defineEmits, defineProps } from "vue";

const emit = defineEmits(["destroys", "big"]);
const props = defineProps(["messages"]);

onUnmounted(() => {
  console.log("close");
});
</script>

<style scoped>
div {
  position: fixed;
  top: 100px;
  right: 100px;
  background: red;
}
</style>
