<template>
  <Container>
    <template #header>
      <ElCard>
        <h3 class="title-color">useTheme 主题切换</h3>
      </ElCard>
    </template>
    <ElCard>
      <template #header>
        <h4 class="title-color">基础用法</h4>
        <div class="des-color fs14 mt">基础的按钮用法.</div>
      </template>
      <el-row>
        <ElButton>默认按钮</ElButton>
        <ElButton type="primary">主要按钮</ElButton>
        <ElButton type="success">成功按钮</ElButton>
        <ElButton type="info">信息按钮</ElButton>
        <ElButton type="warning">警告按钮</ElButton>
        <ElButton type="danger">危险按钮</ElButton>
      </el-row>
    </ElCard>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/common/Container.vue";
import { ElRow, ElCard, ElButton } from "element-plus";

let code = "### niubi";
</script>
