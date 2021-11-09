<template>
  <div class="box">
    <h3>新闻</h3>
    <div class="lunbo">
      <!-- 轮播图 -->
      <van-swipe :loop="false" :width="340" :show-indicators="false">
<<<<<<< HEAD
        <van-swipe-item
          v-for="item in gamelist.slice(0, 2)"
          :key="item.ids"
          v-on:click="gotodetail(item.ids)"
          style="width: 310px; margin-left: 1.5em"
        >
=======
        <van-swipe-item>
>>>>>>> 0ebb160dc5e14af39431a32918ded89cac39b9c1
          <van-image
            width="330px"
            height="100%"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
            radius="0.5em"
          />
          <div class="Rotationdiv">
            <p class="Rotationtext">
<<<<<<< HEAD
              {{ item.title }}
=======
              《战神》将于 1 月 14 日登陆Epic游戏商城，现在就预购吧
            </p>
            <span class="Rotationspan">阅读更多</span>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <van-image
            width="330px"
            height="100%"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
            radius="0.5em"
          />
          <div class="Rotationdiv">
            <p class="Rotationtext">
              《战神》将于 1 月 14 日登陆Epic游戏商城，现在就预购吧
>>>>>>> 0ebb160dc5e14af39431a32918ded89cac39b9c1
            </p>
            <span class="Rotationspan">阅读更多</span>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 列表 -->
    <div class="list">
      <div
        class="Rotationdiv listdiv"
        v-for="item in gamelist.slice(2, 24)"
        :key="item.ids"
        v-on:click="gotodetail(item.ids)"
      >
<<<<<<< HEAD
        <van-image width="100%" :src="item.img" radius="0.5em" />
        <p class="Rotationtext" v-html="item.title"></p>
=======
        <van-image
          width="100%"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
          radius="0.5em"
        />
        <p class="Rotationtext" v-html="item.todo"></p>
>>>>>>> 0ebb160dc5e14af39431a32918ded89cac39b9c1
        <span class="listspan">阅读更多</span>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data: function () {
    return {
<<<<<<< HEAD
      gamelist: [],
=======
      munu: [
        {
          id: 1,
          todo: "《战神》将于 1 月 14 日登陆Epic游戏商城，现在就预吧",
        },
        {
          id: 2,
          todo: "《战神》将于 1 月 14 日登陆Epic游戏商城，现在就预吧",
        },
      ],
>>>>>>> 0ebb160dc5e14af39431a32918ded89cac39b9c1
    };
  },
  created() {
    this.$request.get("/sje/news/list").then(({ data }) => {
      this.gamelist = data.data;
      console.log(this.gamelist);
    });
  },
  methods: {
    // 点击跳转至对应id商品页
    gotodetail(ids) {
      this.$router.push({
        name: "NewsDetail",
        query: {
          ids,
        },
      });
    },
  },
};
</script>

<style scoped>
.box {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding-left: 1.5em;
}

h3 {
  color: aliceblue;
  padding-top: 2.5em;
  margin: 0;
  line-height: 1.5em;
  font-weight: normal;
}
.van-swipe-item:nth-child(2) {
  margin-left: 0.5em;
  box-sizing: border-box;
}
.Rotationdiv {
  color: #f0f8ff;
}
.Rotationspan {
  display: inline-block;
  margin-bottom: 4.2em;
  border-bottom: 1px solid #999999;
}
.Rotationtext {
  font-size: 0.9em;
  margin-bottom: 0.5em;
}
.list {
  box-sizing: border-box;
  margin-right: 1.5em;
  padding-bottom: 2em;
}
.listdiv {
  padding-top: 1.5em;
  border-top: 1px solid rgb(97, 89, 89);
}
.listspan {
  display: inline-block;
  margin-bottom: 1em;
  border-bottom: 1px solid #999999;
}
</style>
