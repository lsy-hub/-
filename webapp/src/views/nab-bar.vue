// 首页的固定导航栏 和侧边栏的模块化
<template>
  <div class="navbar">
    <van-sticky>
      <van-nav-bar
        left-text="返回"
        left-arrow
        @click-left="$router.back()"
        @click-right="onClickRight"
        style="color: #fff; background: #2a2a2a"
      >
        <template #title>
          <van-button color="#2a2a2a" @click="goto('/Home')">
            <img
              src="../img/logo.png"
              alt=""
              style="width: 27px; height: 30px"
            />
          </van-button>
        </template>
        <template #left>
          <van-icon name="arrow-left" color="#fff" />返回
        </template>
        <template #right>
          <van-icon name="wap-nav" is-link @click="showPopup" />
          <van-popup
            v-model="show"
            closeable
            :overlay="false"
            position="right"
            :style="{ width: '83%' }"
            style="background: #2a2a2a"
          >
            <div style="margin-top: 45px">
              <ul @click="showPopno">
                <li @click="goto('/Home')">商城</li>
                <li @click="goto('/NewDetail')">新闻</li>
                <li>常见问题</li>
                <li>帮助</li>
                <li>虚化引擎</li>
              </ul>
            </div>
            <div class="pop-bottom" @click="showPopno">
              <div
                class="pop-login"
                style="display: flex"
                @click="goto('/login')"
              >
                <div
                  class="login-btn login-btn-f"
                  style="flex: 2; display: flex"
                >
                  <van-icon name="user-circle-o" size="30" />
                  <span
                    style="
                      padding-top: 5px;
                      box-sizing: border-box;
                      padding-left: 5px;
                    "
                    v-if="!userInfo"
                  >
                    登陆
                  </span>
                  <span
                    style="
                      padding-top: 5px;
                      box-sizing: border-box;
                      padding-left: 5px;
                      font-size: 2em;
                    "
                    v-else
                    >{{ userInfo.username }}</span
                  >
                </div>
                <div class="login-btn" style="flex: 1">
                  <van-icon name="more-o" size="30" />
                </div>
              </div>
              <div class="pop-msg">
                <span class="pop-msg-span">仅在 PC / MAC 平台推出</span>
              </div>
            </div>
          </van-popup>
        </template>
      </van-nav-bar>
      <div class="ban">
        <van-row>
          <van-col span="6"></van-col>
          <van-col class="mid" span="12">
            <span class="span-title">Epic Games商城</span>
            <span class="load-el" is-link @click="showPopupo">
              <span class="explore-title">探索</span>
              <van-icon name="arrow-down" />
            </span>
          </van-col>
          <van-popup
            v-model="show2"
            position="bottom"
            :style="{ height: '30%', width: '100%' }"
            :get-container="getContainer"
          >
            <p class="explore-item">
              <a class="explore-title" href="">探索</a>
            </p>
            <p class="explore-item">
              <a class="explore-title" href="">浏览</a>
            </p>
          </van-popup>
          <van-col span="6">span: 8</van-col>
        </van-row>
      </div>
    </van-sticky>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show2: false,
      userInfo: {},
      show: false,
      menu: [
        {
          path: "/Home",
          text: "首页",
        },
        {
          path: "/login",
          text: "登陆",
        },
        {
          path: "/news",
          text: "新闻",
        },
      ],
    };
  },

  methods: {
    showPopup() {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      this.userInfo = userInfo;
      this.show = true;
    },
    showPopno() {
      this.show = false;
    },
    showPopupo() {
      this.show2 = true;
    },
    onClickRight: () => {},
    goto(url) {
      this.$router.push(url);
    },
    getContainer() {
      return document.querySelector(".mid");
    },
  },
};
</script>

<style scoped>
.slide-right-enter {
  transform: translate(100%, 0);
}

.slide-right-enter-active {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: transform 0.3s ease-in-out;
}

.slide-right-enter-to {
  transform: translate(0, 0);
}

/* // 从左边进入 */
.slide-left-enter {
  transform: translate(-100%, 0);
}

.slide-left-enter-active {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: transform 0.3s ease-in-out;
}

.slide-left-enter-to {
  transform: translate(0, 0);
}

ul li {
  color: #e7e7e7;
  font-size: 0.625em;
  height: 40px;
  width: 100%;
  padding: 7px 28px;
  box-sizing: border-box;
  text-align: left;
  border-bottom: 1px solid #333333;
}
.van-nav-bar {
  background: #2a2a2a;
}
.van-popup {
  background: #2a2a2a;
  height: 100%;
  width: 10%;
}
.van-nav-bar .van-icon {
  color: #fff;
  font-size: 20px;
}
.van-nav-bar__right {
  padding: 0px !important;
}
.van-nav-bar__text {
  color: #fff;
}
</style>
