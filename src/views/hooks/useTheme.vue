<template>
  <Container>
    <template #header>
      <ElCard>
        <h3 class="title-color">useTheme 主题切换</h3>
      </ElCard>
    </template>
    <ElCard>
      <template #header>
        <h4 class="title-color">简介</h4>
        <div class="des-color fs14 mt">用于系统主题切换.</div>
      </template>
      <img src="./../../assets/images/theme.jpg" alt="" />
    </ElCard>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/common/Container.vue";
import { ElCard } from "element-plus";
</script>
