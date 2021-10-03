<template>
  <Container>
    <template #header>
      <ElCard>
        <h3 class="title-color">useValidate</h3>
      </ElCard>
    </template>
    <ElCard>
      <template #header>
        <h4 class="title-color">基础用法</h4>
        <div class="des-color fs14 mt">简单的描述该hooks的应用.</div>
      </template>
      <el-descriptions
        title="Vertical list with border"
        direction="vertical"
        :column="4"
        border
      >
        <el-descriptions-item :span="6" label="hook">useValidate</el-descriptions-item>
        <el-descriptions-item :span="18" label="参数（type: Ref<typeof Form>）">
          Ref，useValidate需要拿到该Form实例调用其中的方法
        </el-descriptions-item>
        <el-descriptions-item label="返回值(valid)" :span="2"
          >valid是具有灵活且简单编写rule的类,在useValidete中已为其实例化
        </el-descriptions-item>
        <el-descriptions-item label="返回值(validate)" :span="2"
          >validate直接调用将返回表单验证的结果,它的返回值类型(Promise
          &lt;boolean&gt;)</el-descriptions-item
        >
        <el-descriptions-item label="返回值(reset)" :span="2"
          >reset,调用将会初始化表单验证</el-descriptions-item
        >
        <!-- <el-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Address"
          >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
          Province</el-descriptions-item -->
        >
      </el-descriptions>
      <img src="./../../assets/images/pagin.png" alt="" />
    </ElCard>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/common/Container.vue";
import {
  ElRow,
  ElCard,
  ElButton,
  ElDescriptions,
  ElTag,
  ElDescriptionsItem,
} from "element-plus";
</script>

<style scoped lang="less">
img {
  width: 70%;
}
</style>
