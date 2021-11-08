<template>
  <div id="app">
    <!-- 首页固定的导航条 -->
    <navbar></navbar>

    <!-- 路由内容展示 -->
    <router-view></router-view>

    <!-- 底部固定内容 -->
    <buttomnav></buttomnav>
  </div>
</template>

<script>
import navbar from "./views/nab-bar.vue";
import buttomnav from "./views/button-nav.vue";

export default {
  name: "App",
  components: {
    navbar,
    buttomnav,
  },
};
</script>

<style></style>
