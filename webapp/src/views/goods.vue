<template>
  <div>
    <div class="box" v-for="item in mue" :key="item.id">
      <div>
        <h1 class="baise" style="font-weight: normal">{{ item.title }}</h1>
        <div style="height: 185px" class="pt-2">
          <img style="width: 100%" :src="item.images[0].url" alt="" />
        </div>
        <div class="pt-1 pb-1" style="text-align: center">
          <p class="baise xiaohao">
            {{
              item.price.discountPrice
                ? "￥" + item.price.discountPrice
                : "免费"
            }}
          </p>
        </div>
        <van-button type="danger" size="large" color="">立即购买</van-button>
      </div>
      <div class="issue pt-1">
        <div>
          <span>开发商：</span
          ><span class="baise">{{ item.customAttributes.Developers }}</span>
        </div>
        <div>
          <span>发行商：</span
          ><span class="baise">{{ item.customAttributes.publisher }}</span>
        </div>
        <div>
          <span>发行日期：</span
          ><span class="baise">{{ item.customAttributes.Issuedate }}</span>
        </div>
        <div>
          <span>平台：</span
          ><span class="baise">{{ item.customAttributes.platform }}</span>
        </div>
      </div>
      <div>
        <div class="main pt-1">
          <main
            v-for="(ite, index) in item.images"
            v-show="index == nums"
            :key="ite.index"
            style="height: 185px"
          >
            <img width="100%" :src="ite.url" alt="" />
          </main>
        </div>
        <div class="nav pt-1">
          <ul>
            <li
              v-for="(ite, index) in item.images"
              @click="tab(index)"
              :key="ite.index"
              :class="{ addclass: index === nums }"
            >
              <img width="80px" :src="ite.url" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div class="baise">
        <h3>
          {{ item.describe }}
        </h3>
      </div>
      <div class="pt-1">
        <span>游戏类型：</span>
        <span class="leixing" v-for="ite in item.tagss.tags" :key="ite.index">{{
          ite.name
        }}</span>
      </div>
      <div class="pt-2">
        <div
          class="huise jiansao"
          v-for="ite in item.introduce"
          :key="ite.index"
        >
          <h4 class="baise">{{ ite.Subtitle }}</h4>
          <p>{{ ite.content ? ite.content : "" }}</p>
          <p>{{ ite.content1 ? ite.content1 : "" }}</p>
          <p>{{ ite.content2 ? ite.content2 : "" }}</p>
          <p>{{ ite.content3 ? ite.content3 : "" }}</p>
          <p>{{ ite.content4 ? ite.content4 : "" }}</p>
          <p>{{ ite.content5 ? ite.content5 : "" }}</p>
          <p>{{ ite.content6 ? ite.content6 : "" }}</p>
          <p>{{ ite.content7 ? ite.content7 : "" }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      mu: [],
      mue: [],
      nums: 0,
    };
  },
  methods: {
    tab(index) {
      this.nums = index;
    },
  },

  // 渲染route对应id数据
  // const { id } = this.$route.query;
  // console.log("login", id);
  // this.mi = this.mu.filter(function (item) {
  //   return item.ids == id;
  // });

  created() {
    const { id } = this.$route.query;
    // console.log("login", ids);
    this.$request.get("/sje/goods/list").then(({ data }) => {
      this.mu = data.data;
      console.log(this.mu);
      this.mue = this.mu.filter((item) => {
        return item.id == id;
      });
    });
    // 渲染route对应id数据
    // const { ids } = this.$route.query;
    // console.log("login", ids);

    console.log("mi", this.mi);
  },
};
</script>

<style scoped>
.box {
  padding: 1.5em;
}
.nav ul li {
  display: inline-block;
}
.nav ul li img {
  display: block;
}
ul,
li {
  list-style: none;
}
ul {
  display: flex;
  overflow: auto;
}
ul::-webkit-scrollbar {
  display: none;
}
.issue div {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.5em 0.1em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
h3 {
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
}
h4 {
  font-weight: normal;
  margin-top: 0.5em;
}
.leixing {
  color: #fff;
  display: inline-block;
  margin: 0.5em;
  border-bottom: 0.01em solid #fff;
}
.jiansao p {
  font-size: 0.8em;
}

.xiaohao {
  font-size: 0.8em;
}
.huise {
  color: #f5f5f599;
}
.baise {
  color: #fff;
}
.addclass {
  border: 0.01em solid #fff;
}
.pt-1 {
  margin-top: 1em;
}
.pt-2 {
  margin-top: 2em;
}
.pt-3 {
  margin-top: 3em;
}
.pb-1 {
  margin-bottom: 1em;
}
.pb-2 {
  margin-bottom: 2em;
}
</style>
