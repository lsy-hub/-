<template is="name">
  <div class="bbox">
    <!-- <a @click="$router.back()">返回</a> -->
    <h2 class="dengluh2">登陆</h2>

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        placeholder="用户名"
        :rules="rules.username"
        autofocus="true"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="密码"
        :rules="rules.password"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">现在登陆</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      rules: {
        username: [{ required: true, message: "请填写用户名" }],
        password: [{ required: true, message: "请填写密码" }],
      },
    };
  },
  methods: {
    async onSubmit(values) {
      const { data } = await this.$denglu.post("/login", values);
      console.log(data);
      if (data.code === 401) {
        this.$notify({ type: "danger", message: "用户名或密码错误" });
      } else if (data.code === 200) {
        localStorage.setItem("userInfo", JSON.stringify(data.data));
        this.$router.back();
      }
    },
  },
};
</script>

<style scoped>
html,
body {
  width: 100%;
  height: 100%;
}
.dengluh2 {
  color: #ffff;
}
.bbox {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 2em;
  background-color: rgb(18, 18, 18);
  position: absolute;
}
/* .van-field {
  margin-bottom: 0.5em;
  border-radius: 0.5em;
  border: 1px solid #fff;
  background-color: rgb(18, 18, 18);
  color: #fff;
} */
</style>
