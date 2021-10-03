<template>
  <div class="login">
    <el-form
      :model="data"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="login-form"
      size="small"
    >
      <el-form-item label="账号" prop="user">
        <el-input type="text" v-model="data.user" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="data.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          style="width: 100%"
          type="primary"
          @click="submitForm()"
          >{{ loading ? "登录中..." : "登录" }}</el-button
        >
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { ElInput, ElButton, ElForm, ElFormItem } from "element-plus";
import { useValidate } from "@/util/hooks";

const router = useRouter();
const loading = ref<boolean>(false);
const data = reactive({
  user: "Admin",
  pass: "admin",
});
const loginForm = ref<InstanceType<typeof ElForm>>();

const { valid, validate, reset } = useValidate(loginForm);

const rules = reactive({
  user: valid.must("请输入账号"),
  pass: valid.must("请输入密码"),
});

function submitForm() {
  validate().then((valid) => {
    if (valid) {
      // 验证结果 res
      router.push("/");
    }
  });
}
</script>

<style lang="less">
.login-form {
  width: 400px;
  margin: 50vh 0 0 50vw;
  transform: translate(-50%, -50%);
}
</style>
