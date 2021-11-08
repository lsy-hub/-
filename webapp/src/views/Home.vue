<template>
  <div id="app">
    <!-- liaousyang 11.5更新home代码 -->

    <!-- 完成动态轮播图 -->
    <div
      class="mine-div"
      style="padding-bottom: 50px; background-color: #121212"
    >
      <van-swipe :loop="true" :autoplay="3000" indicator-color="#fff">
        <van-swipe-item
          v-for="item in images"
          :key="item.id"
          style="padding: 0px 20px; box-sizing: border-box; margin-top: 20px"
          @click="gotoDetail(item.id)"
        >
          <img
            width="330"
            height="440"
            fit="cover"
            style="position: relative; border-radius: 13px"
            :src="item.img"
          />
          <!-- 完成首页封面文字 -->
          <div class="cove-msg">
            <span class="text-span">已推出</span>
            <span class="text-span" style="margin-bottom: 20px !important"
              >入手这款挑战性极强的角色扮演游戏，体验紧张激烈的回合制战斗，欣赏令人难忘的艺术设定。现已推出！</span
            >
            <span>￥255</span>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 完成特惠游戏轮播 -->
    <div style="padding-bottom: 50px; background-color: #121212">
      <div class="title">特惠游戏</div>
      <van-swipe :loop="false" :width="246">
        <van-swipe-item
          v-for="item in image"   
          :key="item.id"
          style="width: 226px; margin-left: 15px"
          @click="gotoDetail(image.index)"
        >
          <img
            
            width="226"
            height="302"
            style="margin-bottom: 10px"
            :src="item.img"
            
          />
          <div style="display: flex; flex-direction: column">
            <span class="text-over over1">In Sound Mind</span>
            <span class="text-over over2"
              >We Create Stuff | Modus Gamesaaaaaa</span
            >
            <div style="margin-top: 15px">
              <van-button
                class="cost-buttom"
                size="mini"
                color="#0074e4"
                style="border-radius: 4px"
                >-20%</van-button
              >
              <span class="pirce" style="text-decoration: line-through"
                >￥103</span
              >
              <span class="pirce" style="color: rgb(245, 245, 245)"
                >￥82.40</span
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
          v-for="item in imagess"
          :key="item.id"
          style="width: 305px; margin-left: 16px"
          @click="gotoDetail(image.index)"
        >
          <img
            width="305"
            height="172"
            style="border-radius: 5px"
            :src="item.img"
          />
          <div style="display: flex; flex-direction: column">
            <span class="text-over over1">DARQ: Complete Edition</span>
            <span class="text-over over2">当前免费，11月04日23:00截止</span>
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
                v-for="item in sales"
                :key="item.id"
                style="padding-left: 16px"
              >
                <li>
                  <div class="goods-box">
                    <a href="" 
                      style="display: block; width: 191px"
                      @click="gotoDetail(item.id)"
                      >
                      <div style="display: flex">
                        <img :src="item.img" width="48" height="64" />
                        <div>
                          <div class="goods-name">{{item.title }}</div>
                          <div class="goods-pirce">{{ "￥" + item.pirce }}</div>
                        </div>
                      </div>
                    </a>
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
                v-for="item in sales"
                :key="item.id"
                style="padding-left: 16px"
              >
                <li>
                  <div class="goods-box">
                    <a href="" style="display: block; width: 191px" @click="gotoDetail(item.id)">
                      <div style="display: flex">
                        <img :src="item.img" width="48" height="64" />
                        <div>
                          <div class="goods-name">{{ item.title }}</div>
                          <div class="goods-pirce">{{ "￥" + item.pirce }}</div>
                        </div>
                      </div>
                    </a>
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
                v-for="item in sales"
                :key="item.id"
                style="padding-left: 16px"
              >
                <li>
                  <div class="goods-box">
                    <a href="" style="display: block; width: 191px" @click="gotoDetail(item.id)">
                      <div style="display: flex">
                        <img :src="item.img" width="48" height="64" />
                        <div>
                          <div class="goods-name">{{ item.title }}</div>
                          <div class="goods-pirce">{{ "￥" + item.pirce }}</div>
                        </div>
                      </div>
                    </a>
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
      gamelist: [],
      // 以下是测试图片暂时做效果
      //首页轮播图片
      images: [
        {
         id: 1,
         img:"https://cdn2-unrealengine-1251447533.file.myqcloud.com/1200x1600-unbranded-mobile-1200x1600-9d1a1a4ff1e7.png?h=854&resize=1&w=640"
        },
        {
        id: 1,
        img:"https://cdn2-unrealengine-1251447533.file.myqcloud.com/egs-jurassicworldevolution2deluxeedition-s2-1200x1600-1200x1600-313886d32049.jpg?h=854&resize=1&w=640",
        },
        {
        id: 1,
        img:"https://cdn2-unrealengine-1251447533.file.myqcloud.com/egs-godofwar-santamonicastudio-s2-1200x1600-1200x1600-1ece95b84a3e.jpg?h=854&resize=1&w=640",
        },
        {
        id: 1,
        img:"https://cdn2-unrealengine-1251447533.file.myqcloud.com/mb3-epic-carousel-mobile-315x399-r1-315x399-bbfc443910e4.png?h=854&resize=1&w=640",
        }
      ],
      //优惠游戏图片
      image: [
        {
        id: 1,
        img:"https://cdn1-epicgames-1251447533.file.myqcloud.com/salesEvent/salesEvent/EGS_InSoundMind_WeCreateStuff_S2_1200x1600-0f24e46356fc61bda653468a6afd6d49?h=854&resize=1&w=640",
        },
        {
         id: 1,
        img:"https://cdn1-epicgames-1251447533.file.myqcloud.com/edaebe133189475c9fd853858b7fa9ac/offer/EGS_TheTenants_AncientForgeStudio_S2-1200x1600-6ff72dbe1bcb1cdb3345714c8ab8b4a7.jpg?h=854&resize=1&w=640",
        },
        {
         id: 1,
        img:"https://cdn1-epicgames-1251447533.file.myqcloud.com/spt-assets/aa4e814e8db94167a3ca35871c75c846/download-jars-offer-1w5t4.jpg?h=854&resize=1&w=640",
        },
        {
        id: 1,
        img:"https://cdn1.epicgames.com/spt-assets/c42ae799022048238861e7f2290153e6/download-sheepo-offer-1gyvg.jpg?h=854&resize=1&w=640",
        }
      ],
      //免费游戏图片
      imagess: [
        {
        id: 1,
        img:"https://cdn1-epicgames-1251447533.file.myqcloud.com/salesEvent/salesEvent/EGS_DARQCompleteEdition_UnfoldGames_S1_2560x1440-79ab2c50b22aa1dd55955626aa5d20e5?h=480&resize=1&w=854",
        },
        {
        id: 1,
        img:"https://cdn1-epicgames-1251447533.file.myqcloud.com/salesEvent/salesEvent/EGS_AvenColony_MothershipEntertainmentLLC_S3_2560x1440-3276f29fde89052103f0b650420d256b?h=480&resize=1&w=854",
        },
      ],
      //排序图片的数据
      sales: [
        {
          id: 1,
          img: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TimeLoader_Flazm_S2_1200x1600-cece6dfbb2b1eaf0ec7b244530d763bd?h=480&resize=1&w=360",
          title: "Time Loader",
          pirce: "58",
        },
        {
          id: 1,
          img: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BlackWidowRecharged_AdamVisionSneakyBox_S2_1200x1600-d2fd7ae525a6162f045ea4f1337db25c?h=480&resize=1&w=360",
          title: "Black Widow: Recharged",
          pirce: "30",
        },
        {
          id: 1,
          img: "https://cdn1.epicgames.com/offer/6ff9efdef6dc45ecb40ed20fcd2c4621/EGS_DarkestDungeonII_RedHookStudios_S2_1200x1600-dd09b5f5aec3507742b3b768f063cb44?h=480&resize=1&w=360",
          title: "Darkest Dungeon II",
          pirce: "88",
        },
        {
         id: 1,
          img: "https://cdn1.epicgames.com/offer/2a09fb19b47f46dfb11ebd382f132a8f/EGS_MarvelsGuardiansoftheGalaxy_EidosMontral_S2_1200x1600-70149d2826b7251033e112dd1427027d?h=480&resize=1&w=360",
          title: "Marvels Guardians of the Galaxy",
          pirce: "359",
        },
        {
          id: 1,
          img: "https://cdn1.epicgames.com/offer/f0743109c5784d44a1a404a4cee42f20/EGS_AtEvesWake_SugarRushStudios_S2_1200x1600-10bbef1adfe107ad0f28e6014bd97618?h=480&resize=1&w=360",
          title: "At Eves Wake",
          pirce: "87",
        },
      ],

      // 以上是测试图片暂时做效果
    };
  },
  created() {
    this.$request.get("/home").then(({ data }) => {
      this.gamelist = data.data;
      console.log(this.gamelist);
    });
  },

  methods:{
    
      goto(url){
            this.$router.push(url)
            
        },
    //加载商品明细
        gotoDetail(index){
            this.goto('/goods?id='+index);
            console.log(1);
        }
  }
  
};
</script>

<style>
@import "../css/Home.css";
.ca {
  border-radius: 5px;
  box-sizing: border-box;
}
</style>
