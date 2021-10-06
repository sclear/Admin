<template>
  <Container>
    <template #header>
      <ElCard>
        <h3 class="title-color">usePagination</h3>
      </ElCard>
    </template>
    <ElCard>
      <template #header>
        <h4 class="title-color">简介</h4>
        <div class="des-color fs14 mt">统一分页风格,减少重复逻辑.</div>
      </template>
      <ElDescriptions direction="vertical" :column="4" border>
        <ElDescriptionsItem :span="6" label="hook"
          >usePagination</ElDescriptionsItem
        >
        <ElDescriptionsItem
          :span="18"
          label="参数（callback(paginationParams)）"
        >
          当分页器被触发回调callback,paginationParams将会返回页码等信息
        </ElDescriptionsItem>
        <ElDescriptionsItem label="返回值 params" :span="2"
          >该对象由reactive声明,并具有响应式。不希望在使用过程中对其解构,因为这将会让它失去响应。
          返回对象包含pageSize,layout,total,currentSize,currentChange,
          sizeChange
        </ElDescriptionsItem>
      </ElDescriptions>
      <img src="./../../assets/images/pagin2.png" alt="" />
      <img src="./../../assets/images/pagin1.png" alt="" />
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
