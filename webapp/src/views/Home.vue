<template>
  <div id="app">
    <!-- liaousyang 11.5更新home代码 -->

    <!-- 完成动态轮播图 -->
    <div
      class="mine-div"
      style="padding-bottom: 50px; background-color: #121212"
    >
      <van-swipe :loop="true" indicator-color="#fff">
        <van-swipe-item
          v-for="item in bavlist.slice(0, 4)"
          :key="item.id"
          style="padding: 0px 20px; box-sizing: border-box; margin-top: 20px"
          @click="gotoDetail(item.id)"
        >
          <img
            width="315"
            height="420"
            style="position: relative; border-radius: 13px; margin: auto"
            :src="item.images[0].url"
          />

          <!-- 完成首页封面文字 -->
          <div class="cove-msg">
            <span class="text-span">已推出</span>
            <span class="text-span" style="margin-bottom: 20px !important">{{
              item.describe
            }}</span>
            <span>￥{{ item.price.discountPrice }}</span>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 完成特惠游戏轮播 -->
    <div style="padding-bottom: 50px; background-color: #121212">
      <div class="title">特惠游戏</div>
      <van-swipe :loop="false" :width="246">
        <van-swipe-item
          v-for="item in bavlist.slice(5, 9)"
          :key="item.id"
          style="width: 226px; margin-left: 15px"
          @click="gotoDetail(item.id)"
        >
          <img
            width="226"
            height="302"
            style="margin-bottom: 10px"
            :src="item.images[0].url"
          />
          <div style="display: flex; flex-direction: column">
            <span class="text-over over1">{{ item.title }}</span>
            <span class="text-over over2">{{ item.describe }}</span>
            <div style="margin-top: 15px">
              <van-button
                class="cost-buttom"
                size="mini"
                color="#0074e4"
                style="border-radius: 4px"
                >-{{
                  (item.price.discountPrice / item.price.originalPrice).toFixed(
                    2
                  ) * 100
                }}%</van-button
              >
              <span class="pirce" style="text-decoration: line-through"
                >￥{{ item.price.originalPrice }}</span
              >
              <span class="pirce" style="color: rgb(245, 245, 245)"
                >￥{{ item.price.discountPrice }}</span
              >
            </div>
          </div>
        </van-swipe-item>
        <!-- 这个插槽去除录播的指示器 -->
        <template #indicator>
          <div class="custom-indicator"></div>
        </template>
      </van-swipe>
    </div>
    <!-- 完成免费游戏的轮播 -->
    <div style="background: #2a2a2a; padding-bottom: 30px">
      <div class="free-title">
        <div>
          <van-icon name="point-gift-o" size="27" color="#fff" />
          <span class="title">免费游戏</span>
        </div>
        <div>
          <van-button
            color="#2a2a2a"
            size="small"
            style="border: 1px solid #fff; width: 92px"
            >查看更多</van-button
          >
        </div>
      </div>
      <van-swipe :loop="false" :width="328">
        <van-swipe-item
          v-for="item in bavlist.slice(10, 12)"
          :key="item.id"
          style="width: 305px; margin-left: 16px"
          @click="gotoDetail(image.index)"
        >
          <img
            width="305"
            height="172"
            style="border-radius: 5px"
            :src="item.images[0].url"
          />
          <div style="display: flex; flex-direction: column">
            <span class="text-over over1">{{ item.title }}</span>
            <span class="text-over over2">当前免费，11月30日23:00截止</span>
          </div>
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator"></div>
        </template>
      </van-swipe>
    </div>

    <!-- 完成排行榜的轮播展示 -->
    <div style="background: #121212; padding-top: 48px">
      <van-swipe :loop="false" :width="300" indicator-color="white">
        <van-swipe-item>
          <div class="goods-out">
            <div style="padding: 0px 16px">
              <div>
                <h2 class="title" style="font-weight: 100">全新发行</h2>
              </div>
              <ul
                v-for="item in bavlist.slice(8, 13)"
                :key="item.id"
                style="padding-left: 16px"
              >
                <li>
                  <div class="goods-box">
                    <span
                      href=""
                      style="display: block; width: 191px"
                      @click="gotoDetail(item.id)"
                    >
                      <div style="display: flex">
                        <img :src="item.images[0].url" width="48" height="64" />
                        <div>
                          <div class="goods-name">{{ item.title }}</div>
                          <div class="goods-pirce">
                            {{ "￥" + item.price.discountPrice }}
                          </div>
                        </div>
                      </div>
                    </span>
                    <div class="goods-icon">
                      <van-icon name="add-o" color="#fff" size="20" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="goods-out">
            <div style="padding: 0px 16px">
              <div>
                <h2 class="title" style="font-weight: 100">全新发行</h2>
              </div>
              <ul
                v-for="item in bavlist.slice(14, 19)"
                :key="item.id"
                style="padding-left: 16px"
              >
                <li>
                  <div class="goods-box">
                    <span
                      href=""
                      style="display: block; width: 191px"
                      @click="gotoDetail(item.id)"
                    >
                      <div style="display: flex">
                        <img :src="item.images[0].url" width="48" height="64" />
                        <div>
                          <div class="goods-name">{{ item.title }}</div>
                          <div class="goods-pirce">
                            {{ "￥" + item.price.discountPrice }}
                          </div>
                        </div>
                      </div>
                    </span>
                    <div class="goods-icon">
                      <van-icon name="add-o" color="#fff" size="20" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="goods-out">
            <div style="padding: 0px 16px">
              <div>
                <h2 class="title" style="font-weight: 100">全新发行</h2>
              </div>
              <ul
                v-for="item in bavlist.slice(17, 25)"
                :key="item.id"
                style="padding-left: 16px"
              >
                <li>
                  <div class="goods-box">
                    <span
                      href=""
                      style="display: block; width: 191px"
                      @click="gotoDetail(item.id)"
                    >
                      <div style="display: flex">
                        <img :src="item.images[0].url" width="48" height="64" />
                        <div>
                          <div class="goods-name">{{ item.title }}</div>
                          <div class="goods-pirce">
                            {{ "￥" + item.price.discountPrice }}
                          </div>
                        </div>
                      </div>
                    </span>
                    <div class="goods-icon">
                      <van-icon name="add-o" color="#fff" size="20" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- liaousyang 11.5更新home代码 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      bavlist: [],
    };
  },
  created() {
    this.$request.get("/sje/goods/list").then(({ data }) => {
      this.bavlist = data.data;
      console.log(this.bavlist);
    });
  },

  methods: {
    goto(url) {
      this.$router.push(url);
    },
    //加载商品明细
    gotoDetail(id) {
      // this.goto("/goods?id=" + index);
      // console.log(1);
      this.$router.push({
        name: "goods",
        query: {
          id,
        },
      });
    },
  },
};
</script>

<style>
@import "../css/Home.css";
.ca {
  border-radius: 5px;
  box-sizing: border-box;
}
</style>
