<template>
  <div class="box">
    <h3>新闻</h3>
    <div class="lunbo">
      <!-- 轮播图 -->
      <van-swipe :loop="false" :width="340" :show-indicators="false">
        <van-swipe-item
          v-for="item in munu.slice(0, 2)"
          :key="item.id"
          style="width: 310px; margin-left: 1.5em"
        >
          <van-image
            width="310px"
            height="100%"
            :src="item.img"
            radius="0.5em"
          />
          <div class="Rotationdiv">
            <p class="Rotationtext">
              {{ item.todo }}
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
        v-for="item in munu"
        :key="item.id"
        v-on:click="gotodetail(item.id)"
      >
        <van-image width="100%" :src="item.img" radius="0.5em" />
        <p class="Rotationtext" v-html="item.todo"></p>
        <span class="listspan">阅读更多</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      munu: [
        {
          id: 1,
          todo: "《战神》将于 1 月 14 日登陆Epic游戏商城，现在就预吧",
          img: "https://cdn2.unrealengine.com/pre-purchase-god-of-war-coming-to-epic-games-store-1920x1080-b974b0339268.png",
        },
        {
          id: 2,
          todo: "《战神》",
          img: "https://cdn2.unrealengine.com/pre-purchase-god-of-war-coming-to-epic-games-store-1920x1080-b974b0339268.png",
        },
      ],
    };
  },
  methods: {
    // 点击跳转至对应id商品页
    gotodetail(id) {
      this.$router.push({
        name: "NewsDetail",
        query: {
          id,
        },
      });
    },
  },
};
</script>

<style>
.box {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

h3 {
  color: aliceblue;
  padding-top: 2.5em;
  margin: 0;
  line-height: 1.5em;
  font-weight: normal;
  margin-left: 1em;
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
  margin-left: 1.5em;
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
