<template>
  <div>
    <div v-for="item in mi" :key="item.id">
      <div class="newtupian">
        <img :src="item.img" alt="" />
      </div>
      <div class="box zixun">
        <h2>{{ item.title }}</h2>
        <span>{{ item.date }}</span>
        <p class="zuozhe">由{{ item.author }}</p>
        <p>{{ item.short }}</p>
        <div v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      mi: [],
      mu: [
        {
          title: "《战神》将于 1 月 14 日登陆Epic游戏商城，现在就预购吧",
          ids: 1,
          img: "https://cdn2.unrealengine.com/pre-purchase-god-of-war-coming-to-epic-games-store-1920x1080-b974b0339268.png",
          author: "Craig Pearson",
          date: "2021-10-27T15:00:00.000Z",
          short:
            "《战神》将于 1 月 14 日登陆Epic游戏商城。在这款史诗级冒险当中，奎托斯和他的儿子将打遍米德加尔德，与北欧神话诸神和怪物进行战斗。 ",

          content:
            "`<div class='embed-responsive embed-responsive-16by9'></div>↵↵<p><span style='font-size:16px'><a href='/#/home' target='_blank'><strong>《战神》</strong></a>是 PlayStation 4 平台上最畅销的游戏之一，现在即将登陆 PC 平台并在Epic游戏商城上架。堕落战神奎托斯获得了新的开始，将带领他的儿子，在充满北欧神话生物的斯堪的纳维亚荒野展开冒险。在这款第三人称动作冒险游戏中，你将看到巨龙，黑暗精灵，以及其他不可小觑的敌人。&nbsp;<br />↵<br />↵作为一位父亲，奎托斯一直在米德加尔德过着新的生活。当他的妻子菲（Faye）去世之后，奎托斯和儿子阿特柔斯到九界的最高峰上，来泼洒她的骨灰。&nbsp;<br />↵<br />↵奎托斯将利用这段旅程，来教导他的儿子如何在野蛮荒野求生。在游戏史上一些最佳呈现的第三人称战斗中，父子两人建立了羁绊。奎托斯的利维坦之斧（Leviathan Axe）是游戏的亮点之一：他可以流畅的动作劈砍敌人，使用符文来对其进行（包含近战到远程攻击在内的一切均可）升级，并将其扔出或召回，划出一道毁灭性的弧线。战斧打击感和战斗极具满足感。&nbsp;<br />↵<br />↵荣获诸多奖项的<em>《战神》</em>将于 2022 年 1 月 14 日于Epic游戏商城推出。<a href='/#/home' target='_blank'>欢迎在这里进行预购。</a></span></p>↵`",
        },
        {
          title: "《战神》",
          ids: 2,
          img: "https://cdn2.unrealengine.com/pre-purchase-god-of-war-coming-to-epic-games-store-1920x1080-b974b0339268.png",
          author: "Craig Pearson",
          date: "2021-10-27T15:00:00.000Z",
          short:
            "《战神》将于 1 月 14 日登陆Epic游戏商城。在这款史诗级冒险当中，奎托斯和他的儿子将打遍米德加尔德，与北欧神话诸神和怪物进行战斗。 ",

          content:
            "`<div class='embed-responsive embed-responsive-16by9'></div>↵↵<p><span style='font-size:16px'><a href='/#/home' target='_blank'><strong>《战神》</strong></a>是 PlayStation 4 平台上最畅销的游戏之一，现在即将登陆 PC 平台并在Epic游戏商城上架。堕落战神奎托斯获得了新的开始，将带领他的儿子，在充满北欧神话生物的斯堪的纳维亚荒野展开冒险。在这款第三人称动作冒险游戏中，你将看到巨龙，黑暗精灵，以及其他不可小觑的敌人。&nbsp;<br />↵<br />↵作为一位父亲，奎托斯一直在米德加尔德过着新的生活。当他的妻子菲（Faye）去世之后，奎托斯和儿子阿特柔斯到九界的最高峰上，来泼洒她的骨灰。&nbsp;<br />↵<br />↵奎托斯将利用这段旅程，来教导他的儿子如何在野蛮荒野求生。在游戏史上一些最佳呈现的第三人称战斗中，父子两人建立了羁绊。奎托斯的利维坦之斧（Leviathan Axe）是游戏的亮点之一：他可以流畅的动作劈砍敌人，使用符文来对其进行（包含近战到远程攻击在内的一切均可）升级，并将其扔出或召回，划出一道毁灭性的弧线。战斧打击感和战斗极具满足感。&nbsp;<br />↵<br />↵荣获诸多奖项的<em>《战神》</em>将于 2022 年 1 月 14 日于Epic游戏商城推出。<a href='/#/home' target='_blank'>欢迎在这里进行预购。</a></span></p>↵`",
        },
      ],
    };
  },
  created() {
    const { id } = this.$route.query;
    console.log("login", id);
    this.mi = this.mu.filter(function (item) {
      return item.ids == id;
    });
    console.log(this.mi);
  },
};
</script>

<style>
.newtupian {
  margin-bottom: 2em;
}
.newtupian img {
  width: 100%;
}
.zuozhe {
  margin-bottom: 2em;
}
.zixun {
  padding-right: 1.5em;
  padding-bottom: 3em;
  color: #f5f5f5;
  font-size: 1.1em;
}
</style>
