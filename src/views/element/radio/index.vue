<template>
  <Container>
    <template #header>
      <ElCard>
        <h3 class="title-color">Radio 单选框</h3>
      </ElCard>
    </template>
    <ElCard shadow="hover">
      <template #header>
        <h4 class="title-color">单选框组</h4>
        <div class="des-color fs14 mt">适用于在多个互斥的选项中选择的场景.</div>
      </template>
      <el-row>
        <ElRadioGroup v-model="form.radio">
          <ElRadio :label="3">备选项</ElRadio>
          <ElRadio :label="6">备选项</ElRadio>
          <ElRadio :label="9">备选项</ElRadio>
        </ElRadioGroup>
      </el-row>
    </ElCard>
    <ElCard class="mt" shadow="hover">
      <template #header>
        <h4 class="title-color">按钮样式</h4>
        <div class="des-color fs14 mt">按钮样式的单选组合.</div>
      </template>
      <el-row>
        <ElRadioGroup v-model="form.city">
          <ElRadioButton :label="3">上海</ElRadioButton>
          <ElRadioButton :label="6">北京</ElRadioButton>
          <ElRadioButton :label="9">广州</ElRadioButton>
          <ElRadioButton :label="12">深圳</ElRadioButton>
        </ElRadioGroup>
      </el-row>
    </ElCard>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/common/Container.vue";
import { reactive } from "@vue/reactivity";
import {
  ElRow,
  ElCard,
  ElRadio,
  ElRadioGroup,
  ElRadioButton,
} from "element-plus";
const form = reactive({
  radio: 3,
  city: 3,
});
</script>
