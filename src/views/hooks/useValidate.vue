<template>
  <Container>
    <template #header>
      <ElCard>
        <h3 class="title-color">useValidate</h3>
      </ElCard>
    </template>
    <ElCard>
      <template #header>
        <h4 class="title-color">简介</h4>
        <div class="des-color fs14 mt">
          用于快速,统一风格编写表单验证 并进行校验.
        </div>
      </template>
      <ElDescriptions title="" direction="vertical" :column="4" border>
        <ElDescriptionsItem :span="6" label="hook"
          >useValidate</ElDescriptionsItem
        >
        <ElDescriptionsItem :span="18" label="参数（type: Ref<typeof Form>）">
          Ref，useValidate需要拿到该Form实例调用其中的方法
        </ElDescriptionsItem>
        <ElDescriptionsItem label="返回值(valid)" :span="2"
          >valid是具有灵活且简单编写rule的类,在useValidete中已为其实例化
        </ElDescriptionsItem>
        <ElDescriptionsItem label="返回值(validate)" :span="2"
          >validate直接调用将返回表单验证的结果,它的返回值类型(Promise
          &lt;boolean&gt;)</ElDescriptionsItem
        >
        <ElDescriptionsItem label="返回值(reset)" :span="2"
          >reset,调用将会初始化表单验证</ElDescriptionsItem
        >
      </ElDescriptions>
      <img src="./../../assets/images/pagin.png" alt="" />
    </ElCard>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/common/Container.vue";
import { ElCard, ElDescriptions, ElDescriptionsItem } from "element-plus";
</script>

<style scoped lang="less">
img {
  width: 100%;
}
</style>
