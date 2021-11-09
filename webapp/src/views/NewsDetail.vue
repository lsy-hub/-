<template>
  <div>
    <div v-for="item in mi" :key="item.ids">
      <div class="newtupian">
        <img style="width: 100%" :src="item.img" alt="" />
      </div>
      <div class="box zixun">
        <h2>{{ item.title }}</h2>
        <span>{{ item.date }}</span>
        <p class="zuozhe">由{{ item.author }}</p>
        <p style="width: 100%">{{ item.short }}</p>
        <div v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      gamelist: [],
      mi: [],
    };
  },
  created() {
    const { ids } = this.$route.query;
    // console.log("login", ids);
    this.$request.get("/sje/news/list").then(({ data }) => {
      this.gamelist = data.data;
      console.log(this.gamelist);
      this.mi = this.gamelist.filter((item) => {
        return item.ids == ids;
      });
    });
    // 渲染route对应id数据
    // const { ids } = this.$route.query;
    // console.log("login", ids);

    console.log("mi", this.mi);
  },
};
</script>

<style>
.newtupian {
  margin-bottom: 2em;
}

.zuozhe {
  margin-bottom: 2em;
}
.zixun {
  padding-left: 1.5em;
  padding-right: 1.5em;
  padding-bottom: 3em;
  color: #f5f5f5;
  font-size: 1.1em;
}
.zixun img {
  width: 100%;
}
</style>
