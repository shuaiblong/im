<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-09-29 18:44:52
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-24 09:27:35
 -->
<template>
  <div class="xm">
    <van-row>
      <!-- 秒杀模块 -->
      <van-col span="12" class="xmleft" @click="add">
        <div>
          <p class="title">
            <van-count-down class="djs" :time="time" />
          </p>
          <van-row>
            <van-col span="12">
              <div class="xq">
                <img class="xqimg" src="~@/assets/index/g.png" alt />
                <p class="xqtitle">
                  ￥206
                  <s class="hua">￥120</s>
                </p>
              </div>
            </van-col>
            <van-col span="12">
              <div class="xq">
                <img class="xqimg" src="~@/assets/index/g.png" alt />
                <p class="xqtitle">
                  ￥171
                  <s class="hua">￥120</s>
                </p>
              </div>
            </van-col>
          </van-row>
        </div>
      </van-col>
      <!-- 服装模块 -->
      <p class="xiang">
        &nbsp;
        <span class="you">有好货</span>
        &nbsp;
        <span class="pin">与品质生活不期而遇</span>
      </p>
      <van-col span="12" class="xmlefte">
        <div>
          <img class="titleimg" src="~@/assets/index/g.png" alt />
        </div>
        <div>
          <img class="titleimg" src="~@/assets/index/g.png" alt />
        </div>
      </van-col>
    </van-row>
    <van-row class="shop">
      <van-col span="6">
        <p class="titlef">服饰鞋帽</p>
        <p class="titlex1">吃货嘉年华</p>
        <img class="titlei" src="~@/assets/index/g.png" alt />
      </van-col>
      <van-col span="6">
        <p class="titlef">服饰鞋帽</p>
        <p class="titlex2">人间不值得</p>
        <img class="titlei" src="~@/assets/index/g.png" alt />
      </van-col>
      <van-col span="6">
        <p class="titlef">服饰鞋帽</p>
        <p class="titlex3">为生活“家”满分</p>
        <img class="titlei" src="~@/assets/index/g.png" alt />
      </van-col>
      <van-col span="6">
        <p class="titlef">服饰鞋帽</p>
        <p class="titlex4">品质生活必备</p>
        <img class="titlei" src="~@/assets/index/g.png" alt />
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      xian: []
    };
  },
  created() {
    this.axios.get("../../../public/data/lianxi.json").then(res => {
      console.log(res.data.renjian[0]);
    });
  },
  methods: {
    add() {
      this.$router.push("/renjian");
    }
  }
};
</script>
<style scoped>
.xm {
  background-color: #ffffff;
  margin: 10px;
  border-radius: 15px;
  padding: 10px 15px;
}
.xq {
  width: 50%;
}
.djs {
  color: #fe3f3f;
  font-size: 24px;
  margin-left: 150px;
  line-height: 40px;
  padding-top: 12px;
  box-sizing:border-box;
}
.xmlefte {
  display: flex;
}
.title {
  width: 150px;
  height: 50px;
  background: url(~@/assets/index/xsms.png) no-repeat;
  background-size: 100%;
  margin: 0;
  margin-left: 15px;
  box-sizing:border-box;
}
.xqimg {
  width: 100%;
  margin: 10px 0 10px 0;
}
.xq {
  width: 116px;
  margin: 0 auto;
}
.hua {
  color: rgb(153, 153, 153);
}
.xqtitle {
  font-size: 16px;
  border-radius: 25px;
  border: 2px solid rgb(254, 63, 63);
  color: rgb(254, 63, 63);
  margin: 0;
  width: 120px;
  display: flex;
  justify-content: center;
  justify-items: center;
  padding: 1px 12px;
  font-size: 24px;
  margin-left: -16px
}
.titleb {
  height: 30px;
  font-size: 30px;
  color: #333333;
  margin: 0;
}
.titles {
  font-size: 20px;
  color: #19ffd1;
  margin: 0;
  height: 30px;
}
.titleimg {
  width: 150px;
  margin: 20px 10px 10px 10px;
}
.titlei {
  width: 150px;
}
.titlef {
  margin: 0;
  text-align: left;
  margin-left: 18px;
  font-size: 30px;
}
.titlex1 {
  color: rgb(255, 122, 25);
  text-align: left;
  margin: 10px 0 10px 18px;
  font-size: 20px;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.titlex2 {
  color: rgb(25, 155, 255);
  text-align: left;
  margin: 10px 0 10px 18px;
  font-size: 20px;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.titlex3 {
  color: rgb(255, 25, 198);
  text-align: left;
  margin: 10px 0 10px 18px;
  font-size: 20px;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.titlex4 {
  color: rgb(255, 25, 25);
  text-align: left;
  margin: 10px 0 10px 18px;
  font-size: 20px;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.shop {
  margin-top: 10px;
}
.xmlp {
  margin: 0;
}
.xiang {
  margin: 0;
  text-align: left;
}
.you {
  font-size: 30px;
}
.pin {
  font-size: 20px;
  color: rgb(25, 255, 209);
}
</style>