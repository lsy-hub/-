<template>
  <div>
    <div class="box" v-for="item in mue" :key="item.id">
      <div>
        <h1 class="baise" style="font-weight: normal">{{ item.title }}</h1>
        <div class="pt-2">
          <img style="width: 100%" :src="item.images[0].url" alt="" />
        </div>
        <div class="pt-1 pb-1" style="text-align: center">
          <p class="baise xiaohao">￥{{ item.price.discountPrice }}</p>
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
      mue: [
        {
          title: "《战神》",

          id: 1,

          describe:
            " 奎托斯复仇奥林匹斯众神的往事已尘封多年，他现在以凡人的身份生活在北欧众神和怪物环伺的领土中。在这片极寒荒芜的土地上，唯有战斗方能生存……他如是教育其子。 ",

          introduce: [
            {
              Subtitle: "踏入北欧国度",
              content1:
                "奎托斯复仇奥林匹斯众神的往事已尘封多年，他现在以凡人的身份生活在北欧众神和怪物环伺的领土中。在这片极寒荒芜的土地上，唯有战斗方能生存……他如是教育其子。",
            },
            {
              Subtitle: "再握机遇",
              content1:
                "奎托斯再为人父。他与儿子阿特柔斯流落在外，身处险地。他是儿子的良师，亦是护卫，阿特柔斯也立志要获得他的尊重。尽管奎托斯一直怒火中烧，却不得不学会处理情绪，控制怒气。",
            },
            {
              Subtitle: "探访恐怖生物的暗黑本质世界",
              content1:
                "从奥林匹斯华丽的大理石雕与石柱，到北欧前维京时代的森林、山脉与洞穴，这是一片全新的大陆，拥有独特的生物、怪物与众神。",
            },
            {
              Subtitle: "身临其境的狂野肉搏",
              content1:
                "本作采用过肩视角，带给玩家前所未有的临场体验。在《战神™》中，奎托斯将面对庞大威猛、凶狠狡诈的北欧生物，并与之战斗。全新主武器与新型技能与《战神》系列的精神内核一脉相承，但独特的战斗视角在系列中属首开先河。",
            },
            {
              Subtitle: "PC 特色功能:",
            },
            {
              Subtitle: "高保真画面",
              content1:
                "PC 画质大幅提升。在支持相关功能的设备上您可尊享真 4K 分辨率与无锁帧率带来的巅峰表现。通过丰富的画面预设和选项进行设置，包括更高分辨率的阴影、改进的屏幕空间反射，新增的 GTAO 与 SSDO 及其他设置。",
            },
            {
              Subtitle: "支持 NVIDIA® DLSS 与 Reflex",
              content1:
                "质量与性能相匹配。利用 NVIDIA 深度学习超级采样 (DLSS) 的 AI 功能提高帧率，通过特定 Nvidia GPU 呈现精美清晰的画面。NVIDIA Reflex 低延迟技术，让您可更快地做出反应，完成更加困难的连招，通过 GeForce GPU 尽享酣畅淋漓的游戏体验。",
            },
            {
              Subtitle: "自定义操作方式",
              content1:
                "随心畅玩。本游戏支持 DUALSHOCK®4 与 DUALSENSE® 无线控制器以及其他各类控制器，玩家可以完全自定义鼠标与键盘设置，微调每个动作，玩出个人特色。",
            },
            {
              Subtitle: "超宽幅画面支持",
              content1:
                "前所未有的沉浸式体验。北欧之旅中，夺人心魂的峡谷风光在全景宽屏中徐徐展开。《战神™》支持 21:9 超宽屏幕，进一步增强原高清画质，带来影院级视觉体验。",
            },
          ],

          customAttributes: {
            Developers: "Santa Monica Studio",
            publisher: "Sony Interactive Entertainment",
            Issuedate: "2022年1月15日",
            platform: "windows",
          },

          images: [
            {
              num: 0,
              type: "logo",
              url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GodofWar_SantaMonicaStudio_S1_2560x1440-5d74d9b240bba8f2c40920dcde7c5c67?h=270&resize=1&w=480",
            },
            {
              num: 1,
              type: "OfferImageTall",
              url: "https://cdn2.unrealengine.com/egs-godofwar-santamonicastudio-g1a-01-1920x1080-c84d2a96aea3.jpg",
            },
            {
              num: 2,
              type: "OfferImageWide",
              url: "https://cdn2.unrealengine.com/egs-godofwar-santamonicastudio-g1a-02-1920x1080-f7c6fef5c876.jpg?h=720&resize=1&w=1280",
            },
            {
              num: 3,
              type: "screenshot",
              url: "https://cdn2.unrealengine.com/egs-godofwar-santamonicastudio-g1a-03-1920x1080-65b80475ae32.jpg",
            },
            {
              num: 4,
              type: "screenshot",
              url: "https://cdn2.unrealengine.com/egs-godofwar-santamonicastudio-g1a-04-1920x1080-2c217f1dd0a4.jpg",
            },
            {
              num: 5,
              type: "screenshot",
              url: "https://cdn2.unrealengine.com/egs-godofwar-santamonicastudio-g1a-05-1920x1080-cf82550ed6f4.jpg",
            },
            {
              num: 6,
              type: "screenshot",
              url: "https://cdn2.unrealengine.com/egs-godofwar-santamonicastudio-g1a-06-1920x1080-a960effeebd9.jpg",
            },
          ],

          tagss: {
            tags: [
              {
                id: "1216",
                name: "动作",
                groupName: "genre",
              },
              {
                id: "16979?",
                name: "角色扮演",
                groupName: null,
              },
              {
                id: "18051?",
                name: "冒险",
                groupName: "event",
              },

              {
                id: "1370",
                name: "单人游戏",
                groupName: "feature",
              },
              {
                id: "9547",
                name: "Windows",
                groupName: "platform",
              },
            ],
          },

          price: {
            originalPrice: 279,
            discountPrice: 279,
            intermediatePrice: 279,
            sales: 2010,
          },
          outputs: [
            {
              contentType: "video/mp4",
              height: 1080,
              width: 1920,
              url: "https://media-epicgames-1251447533.file.myqcloud.com/c5a5266eded44382beb5f10a5a71dd12/c5a5266eded44382beb5f10a5a71dd12-low.fmp4",
              sound:
                "https://media-epicgames-1251447533.file.myqcloud.com/c5a5266eded44382beb5f10a5a71dd12/c5a5266eded44382beb5f10a5a71dd12-audio.m4a",
            },
          ],
        },
      ],
      nums: 0,
    };
  },
  methods: {
    tab(index) {
      this.nums = index;
    },
  },
  created() {
    // 渲染route对应id数据
    const { id } = this.$route.query;
    console.log("login", id);
    this.mi = this.mu.filter(function (item) {
      return item.ids == id;
    });
    console.log(this.mi);
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
