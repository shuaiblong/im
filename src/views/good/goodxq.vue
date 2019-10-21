<template>
  <div class="box">
    <!-- <p :class="{red: !isshow,blue: isshow}" @click="isshow=!isshow">我爱云虹</p> -->
    <div>
      <van-nav-bar title="面膜" left-arrow @click-left="onClickLeft">
        <van-icon name="search" slot="right"/>
      </van-nav-bar>
      <van-icon name="qr" />
    </div>
    <div class="choose">
      <ul>
        <li class="choli">
          综合
          <i class="iconfont icon-jiantou32"></i>
        </li>
        <li>销量</li>
        <li class="choli">
          价格
          <i class="iconfont icon-jiantou31"></i>
          <i class="iconfont icon-jiantou32"></i>
        </li>
        <li>
          筛选
          <i class="iconfont icon-shaixuan"></i>
        </li>
      </ul>
    </div>
    <div>
      <div id="jingxuan">
        <div class="goods">
          <div class="item" v-for="x in 6" :key="x" @click="todetail">
            <img src="../../assets/index/g.png" alt />
            <p>连帽卫衣男士19年秋冬卡通印花新款棉质...</p>
            <div class="price">
              <span>￥</span>
              <span>105</span>
              <span>.80</span>
              <span class="yj">￥199</span>
              <span class="by">包邮</span>
              <span class="mj">满减</span>
            </div>
            <div class="gou">
              <span>1.8万人付款 99%好评</span>
            </div>
            <div class="dian">
              <span>服饰专营店</span>
              <van-icon name="arrow" class="jt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "te",
  data: function() {
    return {
      active: 0,

      Index: 1
    };
  },
  methods: {
    todetail() {
      this.$router.push("/detail");
    },
    updown(e) {
      e.target.className =
        e.target.className == "iconfont icon-jiantou31"
          ? "iconfont icon-jiantou32"
          : "iconfont icon-jiantou31";
    },
        onClickLeft() {
      this.$router.go(-1);
    },
  }
};
</script>
<style scoped>
.box{
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.van-hairline--bottom {
  position: relative;
}
.van-icon-qr {
  position: relative;
}
.van-icon {
  color: #999;
  font-size: 23px;
}
.van-nav-bar__title {
  font-weight: bolder;
  font-size: 17px;
  font-family: sans-serif;
}
.choose {
  height: 16px;
  width: 100%;
}
.choose ul li {
    display: block;
    font-size: 15px;
    font-weight: bolder;
    width: 25%;
    float: left;
    position: relative;
}
.icon-jiantou31,
.icon-jiantou32 {
  color: orange;
}
.goods {
  margin: 10px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  flex-wrap: wrap;
}
.item {
  flex-shrink: 0;
  margin: 5px 0;
  width: 170px;
  border-radius: 5px;
  background: #fff;
}
img {
  display: block;
  width: 100%;
}
p {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: left;
  width: 72px;
  height: 16px;
  font-size: 13px;
  color: #333333;
  margin: 5px 5px;
}
.price {
  margin: 5px 5px;
  text-align: left;
  color: rgb(255,28,28);
  font-style: normal;
}
span:first-of-type {
  font-size: 10px;
}
span:nth-of-type(2) {
  font-size: 15px;
  font-weight: 0;
  font-weight: bolder;
}
span:nth-of-type(3) {
  font-size: 6px;
}
span:nth-of-type(4) {
  width: 24px;
  height: 10px;
  border-radius: 3px;
  margin-left: 5px;
  line-height: 10px;
  font-size: 12px;
}
span:nth-of-type(5),
span:nth-of-type(6) {
  border: 1px solid rgb(255,101,25);
  font-size: 2px;
  font-family: "PingFang-SC-Regular";
  border-radius: 5px;
  margin-right: 6px;
  color:rgb(255,101,25);
}
.yj {
  margin: 5px 5px;
  text-align: left;
  text-decoration: line-through;
  color: #999999;
}
.gou span,
.dian span {
  color: rgb(153,153,153);
  margin-right: 51px;
  font-size: 3px;
}
.dian span {
  margin-right: 105px;
}
.jt {
  color: rgb(153,153,153);
  font-size: 10px;
  display: block;
  margin-top: -14px;
  margin-right: 30px;
}
.red {
  color: red;
  font-size: 14px;
}
.blue {
  color: blue;
  font-size: 20px;
}
.icon-jiantou31 {
  position: absolute;
  top: -6px;
  right: 0;
}
.icon-jiantou32 {
  position: absolute;
  top: 0;
  right: 0;
}
.choli {
  position: relative;
}
.icon-shaixuan {
  font-size: 10px;
}
.van-icon-qr:before {
  content: "\F0A2";
  position: absolute;
  top: -47px;
  z-index: 3;
  right: -183px;
}
.van-icon-search {
  margin-right: 16px;
}
.van-dropdown-menu{
  background-color:red !important;
}
</style>