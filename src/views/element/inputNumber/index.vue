<template>
  <Container>
    <template #header>
      <ElCard>
        <h3 class="title-color">inputNumber 计数器</h3>
      </ElCard>
    </template>
    <ElCard shadow="hover">
      <template #header>
        <h4 class="title-color">步数</h4>
        <div class="des-color fs14 mt">允许定义递增递减的步数控制.</div>
      </template>
      <ElInputNumber v-model="num" :step="2"></ElInputNumber>
    </ElCard>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/common/Container.vue";
import { ref } from "@vue/reactivity";
import { ElCard, ElInputNumber } from "element-plus";
let num = ref(1);
</script>
