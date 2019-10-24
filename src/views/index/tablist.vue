<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-09-30 16:53:37
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-16 13:53:11
 -->
<template>
  <!-- 商品列表 -->
  <div class="tabshop">
    <van-tabs v-model="active" class="tablist">
      <van-tab title="精选">
        <van-row>
          <van-col span="12" v-for="(item,i) in xbannerlist" :key="i">
            <router-link to="/goodjs">
              <div class="jxl">
                <!-- 图片 -->
                <img class="jxlimg" :src="item.image" alt />
                <!-- 详情 -->
                <p class="jxlp1" v-text="item.name"></p>
                <div class="jxldiv">
                  <!-- 价格 -->
                  <span class="jxspan2" v-text="item.price"></span>
                  <span class="jxspan3">.80</span>
                  <!-- 秒杀 -->
                  <span class="jxspan4" v-if="item.isSeckill==1">秒杀</span>
                </div>
              </div>
            </router-link>
          </van-col>
        </van-row>
      </van-tab>
      <van-tab title="时尚">
        <van-row>
          <van-col span="12" v-for="(item,i) in xbannerlist1" :key="i">
            <router-link to="/goodjs">
              <div class="jxl">
              <!-- 图片 -->
                <img class="jxlimg" :src="item.image" alt />
                <!-- 详情 -->
                <p class="jxlp1" v-text="item.name"></p>
                <div class="jxldiv">
                  <!-- 价格 -->
                  <span class="jxspan2" v-text="item.price"></span>
                  <span class="jxspan3">.80</span>
                  <!-- 秒杀 -->
                  <span class="jxspan4" v-if="item.isSeckill==1">秒杀</span>
                </div>
              </div>
            </router-link>
          </van-col>
        </van-row>
      </van-tab>
      <van-tab title="生活"></van-tab>
      <van-tab title="母婴"></van-tab>
      <van-tab title="电器"></van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      xbannerlist: [
        { code: '00001', image: require('@/assets/index/g.png'), name: '夏季最新时尚男女装',price:'￥128' },
        { code: '00002', image: require('@/assets/index/g.png'), name: '夏季最新时尚男女装',price:'￥128' },
        { code: '00003', image: require('@/assets/index/g.png'), name: '夏季最新时尚男女装',price:'￥128' },
        { code: '00004', image: require('@/assets/index/g.png'), name: '夏季最新时尚男女装',price:'￥128' },
        { code: '00005', image: require('@/assets/index/g.png'), name: '夏季最新时尚男女装',price:'￥128' },
        { code: '00006', image: require('@/assets/index/g.png'), name: '夏季最新时尚男女装',price:'￥128' },       
      ],
      xbannerlist1: [
        { code: '00001', image: require('@/assets/index/g.png'), name: '夏季最新时尚男女装',price:'￥99' },
        { code: '00002', image: require('@/assets/index/g.png'), name: '夏季最新时尚男女装',price:'￥99' },
        { code: '00003', image: require('@/assets/index/g.png'), name: '夏季最新时尚男女装',price:'￥99' },
        { code: '00004', image: require('@/assets/index/g.png'), name: '夏季最新时尚男女装',price:'￥99' },
        { code: '00005', image: require('@/assets/index/g.png'), name: '夏季最新时尚男女装',price:'￥99' },
        { code: '00006', image: require('@/assets/index/g.png'), name: '夏季最新时尚男女装',price:'￥99' },       
      ]
    };
  },
  created() {
    this.axios
      .get("http://192.168.0.110/" + "goods/lists", {
        params: {
          page: "1",
          limit: "6",
          goods: ""
        }
      })
      .then(res => {
        // console.log(res.data.jingxuan[0].xinxi);
        // this.xbannerlist = res.data.jingxuan[0].xinxi;
        console.log(res.data.data);
        this.xbannerlist = res.data.data;
      });
  }
};
</script>
<style scoped>
.tablist {
  margin-bottom: 100px;
  z-index: 0;
  overflow: hidden;
}

.jxl .jxlimg {
  width: 350px;
  height: 340px;
  margin: 10px auto 0;
}
.jxl .jxlp1 {
  color: #333333;
  font-size: 26px;
  margin: 0;
  margin-left: 30px;
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  /*设置省略号在容器第四行文本后*/
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.jxl .jxldiv {
  color: #ff1c1c;
  margin-top: 3px;
  text-align: left;
  margin-left: 30px;
}
.jxldiv .jxspan2 {
  font-size: 30px;
  font-weight: 600;
}
.jxldiv .jxspan4 {
  font-size: 20px;
  margin-left: 5px;
  padding: 0 3px;
  border: 1px solid #ff1c1c;
  border-radius: 3px;
}
.jxldiv .jxspan3 {
  font-size: 20px;
}
</style>