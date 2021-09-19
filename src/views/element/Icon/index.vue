<template>
  <Container>
    <template #header>
      <ElCard>
        <h3>Icon 图标</h3>
      </ElCard>
    </template>
    <ElCard shadow="hover">
      <template #header>
        <h4 class="title-color">基础用法</h4>
        <div class="des-color fs14 mt">
          通过添加额外的类名 is-loading，你的图标就可以在 2 秒内旋转 360
          度，但让你也可以自己改写想要的动画.
        </div>
      </template>
      <el-row>
        <ElIcon :size="20">
          <Edit />
        </ElIcon>
        <ElIcon color="#409EFC" class="no-inherit">
          <Share />
        </ElIcon>
        <ElIcon>
          <Delete />
        </ElIcon>
        <ElIcon class="is-loading">
          <Loading />
        </ElIcon>
      </el-row>
    </ElCard>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/common/Container.vue";
import { ElRow, ElCard, ElIcon } from "element-plus";
import { Edit, Share, Delete, Loading } from "@element-plus/icons";
</script>
