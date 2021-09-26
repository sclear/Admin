<template>
  <Container>
    <Card class="pb0" shadow="hover">
      <ElForm :model="form" ref="Form" size="small">
        <ElRow>
          <ElCol :span="7">
            <ElFormItem prop="user" label="审批人：">
              <ElInput v-model="form.user" placeholder="审批人"></ElInput>
            </ElFormItem>
          </ElCol>
          <ElCol :span="7" :offset="1">
            <ElFormItem prop="user" label="审批人：">
              <ElInput v-model="form.user" placeholder="审批人"></ElInput>
            </ElFormItem>
          </ElCol>
          <ElCol :span="7" :offset="1">
            <ElFormItem label="区域：">
              <ElSelect
                class="full"
                v-model="form.region"
                placeholder="活动区域"
              >
                <ElOption label="区域一" value="shanghai"></ElOption>
                <ElOption label="区域二" value="beijing"></ElOption>
              </ElSelect>
            </ElFormItem>
          </ElCol>
          <ElCol class="mg0" :span="7">
            <ElFormItem label="审批人：">
              <ElInput v-model="form.user" placeholder="审批人"></ElInput>
            </ElFormItem>
          </ElCol>
          <ElCol class="mg0" :span="7" :offset="1">
            <ElFormItem label="审批人：">
              <ElInput v-model="form.user" placeholder="审批人"></ElInput>
            </ElFormItem>
          </ElCol>
          <ElCol class="mg0" :span="2" :offset="1">
            <ElButton @click="search" size="small" class="full" type="primary"
              >查询</ElButton
            >
          </ElCol>
          <ElCol class="mg0" :span="2">
            <ElButton
              @click="paramsForm.reset"
              size="small"
              class="full ml"
              type="warning"
              >重置</ElButton
            >
          </ElCol>
        </ElRow>
      </ElForm>
    </Card>
    <Card class="mt">
      <ElTable :data="tableData" size="small" border style="width: 100%">
        <ElTableColumn
          fixed
          prop="date"
          label="日期"
          width="150"
        ></ElTableColumn>
        <ElTableColumn prop="name" label="姓名"></ElTableColumn>
        <ElTableColumn prop="province" label="省份"></ElTableColumn>
        <ElTableColumn prop="city" label="市区"></ElTableColumn>
        <ElTableColumn
          prop="address"
          :show-overflow-tooltip="true"
          label="地址"
        ></ElTableColumn>
        <ElTableColumn prop="zip" label="邮编"></ElTableColumn>
        <ElTableColumn label="操作" width="100">
          <template #default="scope">
            <ElButton @click="handleClick(scope.row)" type="text" size="small"
              >查看</ElButton
            >
            <ElButton type="text" size="small">编辑</ElButton>
          </template>
        </ElTableColumn>
      </ElTable>
      <ElPagination
        class="flex-end mt mr"
        :page-sizes="[100, 200, 300, 400]"
        background
        @current-change="paginParams.currentChange"
        @size-change="paginParams.sizeChange"
        :layout="paginParams.layout"
        :total="paginParams.total"
      ></ElPagination>
    </Card>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/common/Container.vue";
import Card from "@/components/common/Card.vue";
import { h } from "vue";
import { reactive, ref } from "@vue/reactivity";
import { usePagination } from "@/util/hooks";
import { useValidate } from "@/util/hooks";
import {
  ElRow,
  ElCol,
  ElForm,
  ElInput,
  ElButton,
  ElFormItem,
  ElSelect,
  ElOption,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElNotification,
} from "element-plus";

const form = reactive({
  user: "",
  region: "",
});
const Form = ref();
const paramsForm = useValidate(Form);
const tableData = [
  {
    date: "2016-05-02",
    name: "王小虎",
    province: "上海",
    city: "普陀区",
    address: "上海市普陀区金沙江路 1518 弄",
    zip: 200333,
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    province: "上海",
    city: "普陀区",
    address: "上海市普陀区金沙江路 1517 弄",
    zip: 200333,
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    province: "上海",
    city: "普陀区",
    address: "上海市普陀区金沙江路 1517 弄",
    zip: 200333,
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    province: "上海",
    city: "普陀区",
    address: "上海市普陀区金沙江路 1517 弄",
    zip: 200333,
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    province: "上海",
    city: "普陀区",
    address: "上海市普陀区金沙江路 1517 弄",
    zip: 200333,
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    province: "上海",
    city: "普陀区",
    address: "上海市普陀区金沙江路 1517 弄",
    zip: 200333,
  },
  {
    date: "2016-05-01",
    name: "王小虎",
    province: "上海",
    city: "普陀区",
    address: "上海市普陀区金沙江路 1519 弄",
    zip: 200333,
  },
  {
    date: "2016-05-03",
    name: "王小虎",
    province: "上海",
    city: "普陀区",
    address: "上海市普陀区金沙江路 1516 弄",
    zip: 200333,
  },
];

const paginParams = usePagination((paginationParams) => {
  ElNotification({
    title: "Page Number",
    message: h(
      "i",
      { style: "color: teal" },
      `The current page is page ${paginationParams.currentSize}`
    ),
  });
});

function search() {
  ElNotification({
    title: "Success",
    message: `This is a success message in page ${paginParams.currentSize}`,
    type: "success",
  });
}

const handleClick = (row: string) => {
  console.log(row);
};
</script>
