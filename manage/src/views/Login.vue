<template>
  <div>
    <h1>epic后台管理系统</h1>
    <el-form ref="form" :model="form" :rules="rules" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="form.password"
          type="password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
          },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
          },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          const data = await this.$store.dispatch("user/login", this.form);
          // const data = await this.$request.post("/api/login", this.form);
          if (data.code === 200) {
            this.$router.push("/manage");
          }
        } else {
          console.log("提交失败");
          return false;
        }
      });
    },
  },
};
</script>
