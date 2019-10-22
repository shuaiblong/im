<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-22 13:54:37
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-22 14:58:00
 -->
<template>
  <div class="box">
    <!-- 头部 -->
    <div class="head">
      <van-nav-bar
        title="确认订单"
        emeiy
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <!-- 添加地址 -->
    <div class="add">
      <div class="tj">
        <span class="text">添加地址</span>
        <i class="iconfont icon-tianjia1"></i>
      </div>
      <div>
        <img src="../../assets/di.png" />
      </div>
    </div>
    <!-- 商品信息 -->
    <div class="z">
      <!-- <ceshi></ceshi> -->
      <div class="state">
        <!-- 店铺导航栏 -->
        <div class="stanav">
          <span class="zhuan">
            <!-- 类型店铺 icon图固定不用动-->
            <i class="iconfont icon-dianpu"></i>
            专营店
            <van-icon name="arrow" />
          </span>
          <!-- 商品状态(代付款发货类) -->
          <!-- <span class="huo">已发货</span> -->
        </div>
        <ul class="xqshop">
          <li>
            <!-- 商品图片v-for循环 -->
            <img
              src="//img12.360buyimg.com/n1/jfs/t30052/127/1612053323/198563/aba0f961/5ce647f6Ndace9815.jpg"
              class="veimg"
            />
          </li>

          <li class="xqtitle">
            <!-- 商品介绍v-for循环 -->
            <p class="xqtitlep">120粒VE+120粒vc康恩贝天生素E软胶囊外部用120粒V120粒VE+120粒vc康恩贝天生素E软胶囊外部用120粒V</p>
            <!-- 商品名字数量 -->
            <p class="xqguige">酒红色,L x1</p>
          </li>
          <!-- 商品价格 -->
          <li class="price">
            <span>￥</span>
            <span>105</span>
            <span>.00</span>
          </li>
          <li class="an">
            <van-stepper v-model="value" />
          </li>
        </ul>
        <!-- 留言 -->
        <div class="ly">
          <span>留言:</span>
          <textarea placeholder="给商家留言,最多100字"></textarea>
        </div>
      </div>
    </div>
    <div class="js">
      <div class="youhui">
        <!-- 优惠券单元格 -->
        <!-- <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" /> -->
        <span>优惠卷</span>
        <span>
          使用优惠券
          <i class="iconfont icon-dibudaohanglan-"></i>
        </span>
      </div>
      <div class="jine">
        <span>商品金额</span>
        <span>￥105.80</span>
      </div>
      <div class="yunfei">
        <span>运费</span>
        <span>+￥8.00</span>
      </div>
    </div>
    <div class="di">
      <!-- <span>共1件,</span> -->
      <van-submit-bar :label="`共`+this.value+`件,合计:`" :price="11380" button-text="提交订单" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // count: 0,
      value: 1
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  background: #f5f5f5;
}
.van-nav-bar__arrow {
  color: rgb(51, 51, 51);
  font-size: 40px;
}
.van-ellipsis {
  font-size: 32px;
  color: rgb(51, 51, 51);
}
.add {
  width: 100%;
  height: 180px;
  background: rgb(255, 255, 255);
}
.tj {
  position: absolute;
  margin: 20px 260px;
}
.add img {
  width: 100%;
  height: 5px;
  margin-top: 170px;
}
.add .text {
  font-size: 30px;
  color: rgb(51, 51, 51);
}
.icon-tianjia1 {
  font-size: 60px;
  color: rgb(255, 109, 21);
  width: 60px;
  height: 60px;
  vertical-align: middle;
  margin-left: 20px;
}
.change {
  color: #ff6d15;
  border-bottom: 4px solid #ff6d15;
}
.icon-dianpu {
  font-size: 26px;
}
.zhuan {
  font-size: 26px;
  float: left;
  display: inline-flex;
  align-items: center;
}
.huo {
  color: #ff6d15;
  font-size: 26px;
  float: right;
}
.state {
  width: 710px;
  height: 363px;
  padding: 30px;
  box-sizing: border-box;
  margin: 20px;
  background: #ffffff;
  margin-top: 14px;
  border-radius: 10px;
  text-align: left;
}
.veimg {
  width: 158px;
  height: 158px;
  margin-right: 30px;
}
.stanav::after {
  content: "";
  display: block;
  clear: both;
}
.xqshop li {
  float: left;
}
.xqshop::after {
  content: "";
  display: block;
  clear: both;
}
.xqtitle {
  width: 493px;
  height: 100px;
  position: absolute;
  margin-left: 200px;
}
.xqtitlep {
  width: 426px;
  height: 65px;
  font-size: 24px;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.xqguige {
  margin-top: 20px;
  font-size: 24px;
  color: rgb(153, 153, 153);
}
.xqshop {
  margin-top: 16px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(245, 245, 245);
}
.total {
  text-align: right;
}
.totnum {
  font-size: 24px;
}
.price {
  position: relative;
  top: 130px;
}
.price span:first-of-type,
.price span:nth-of-type(3) {
  font-size: 24px;
  color: rgb(255, 28, 28);
}
.price span:nth-of-type(2) {
  font-size: 32px;
  color: rgb(255, 28, 28);
}
.an {
  position: relative;
  top: 120px;
  margin-left: 166px;
}

.ly span {
  font-size: 26px;
  color: rgb(51, 51, 51);
  margin-top: 10px;
  position: absolute;
  z-index: 2;
}
.ly textarea {
  height: 30px;
  border: 0;
  color: rgb(153, 153, 153);
  font-size: 26px;
  position: absolute;
  margin: 6px 60px;
  resize: none;
}
.xqshop li:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.js {
  width: 710px;
  height: 226px;
  margin: 20px auto;
  background-color: rgb(255, 255, 255);
}
.van-cell__title span {
  font-size: 26px;
  color: rgb(51, 51, 51);
  margin-right: 190px;
}
.van-cell__value span {
  font-size: 24px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Medium";
}
.van-cell__right-icon {
  color: rgb(51, 51, 51);
  margin-right: -30px;
}
.icon-dibudaohanglan- {
  position: absolute;
  margin-top: -10px;
}
.youhui {
  text-decoration: underline;
  border-bottom: 1px solid rgb(245, 245, 245);
  padding-bottom: 10px;
}
.youhui span {
  margin-top: 30px;
}
.youhui span:first-of-type,
.jine span:first-of-type,
.yunfei span:first-of-type {
  float: left;
  margin-left: 50px;
  font-size: 26px;
  color: rgb(51, 51, 51);
}
.youhui span:nth-of-type(2),
.jine span:nth-of-type(2),
.yunfei span:nth-of-type(2) {
  float: right;
  margin-right: 50px;
  font-size: 24px;
  color: rgb(51, 51, 51);
}
.jine:after,
.youhui:after {
  content: "";
  display: block;
  clear: both;
}
.jine,
.yunfei {
  margin-top: 26px;
}
.van-stepper__minus--disabled,
.van-stepper__plus--disabled {
  color: red !important;
}
.van-submit-bar__button {
  /* width: 200px;
  height: 120px; */
  background-color: rgb(255, 161, 40);
  border: rgb(255, 114, 18);
}
.van-submit-bar__price,
.van-submit-bar__text span,
.van-button__text {
  font-size: 30px;
}
.van-submit-bar__price {
  color: rgb(255, 28, 28) !important;
  font-family: "PingFang-SC-Bold";
  margin-left: 30px;
}
.van-submit-bar__text span {
  font-size: 30px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Regular";
}
.van-button__text {
  color: rgb(255, 255, 255);
  font-family: "PingFang-SC-Medium";
}
</style>