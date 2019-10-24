<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-22 13:54:42
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-24 16:43:15
 -->
<template>
  <div class="box">
    <!-- 头部 -->
    <div class="head">
      <van-nav-bar title="支付成功" left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 显示订单支付成功 -->
    <div class="pay">
      <img src="~@/assets/pay.png" />
      <div class="pay_d1">支付成功!</div>
      <div class="pay_d2">您的包裹正整装待发~</div>
    </div>
    <!-- 收货人信息 -->
    <div class="xinxi">
      <div class="people">
        <span>收货人:</span>
        <span>大风12313251451</span>
      </div>
      <div class="address">
        <span>收货地址:</span>
        <span>广东省深圳市龙华新区民治街道南源新村99栋(一家便利店))</span>
      </div>
      <div class="spay">
        <span>实际款:</span>
        <span>￥113.8</span>
      </div>
      <!-- 订单详情 返回首页 -->
      <div class="anniu">
        <span>
          <button @click="xiang" class="anniu_1">订单详情</button>
        </span>
        <span>
          <button @click="findex" class="anniu_2">返回首页</button>
        </span>
      </div>
    </div>
    <!-- 安全提醒 -->
    <div class="remind">
      <span class="tx">
        安全提醒
        <i class="iconfont icon-jinggao"></i>
      </span>
      <p>
        付款成功后，极地鹰不会以付款异常、卡单、系统升级为由联系您。
        <span>请勿泄露银行卡号、手机验证码，否则会造成钱款损失。谨防电话诈骗！</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 返回首页
    findex() {
      this.$router.push("/");
    },
    // 订单详情
    xiang() {
      this.$router.push("/dingdan");
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
.pay {
  width: 100%;
  height: 447px;

  background-color: rgb(255, 255, 255);
}
.van-nav-bar__arrow {
  color: rgb(51, 51, 51);
  font-size: 35px;
}
.van-ellipsis {
  font-size: 32px;
  color: rgb(51, 51, 51);
}
.pay img {
  width: 193px;
  height: 211px;
}
.pay_d1 {
  font-size: 30px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Bold";
  margin-top: 20px;
}
.pay_d2 {
  font-size: 26px;
  color: rgb(153, 153, 153);
  font-family: "PingFang-SC-Regular";
  margin-top: 10px;
}
.xinxi {
  width: 100%;
  height: 395px;
  background-color: rgb(255, 255, 255);
  margin-top: 20px;
}
.people span:first-of-type,
.address span:first-of-type {
  font-size: 24px;
  color: rgb(153, 153, 153);
  font-family: "PingFang-SC-Regular";
  text-align: left;
}
.people span:nth-child(2),
.address span:nth-child(2) {
  font-size: 24px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Regular";
}
.address {
  width: 657px;
  height: 52px;
}
.address span:nth-child(2) {
  display: block;
  width: 580px;
  text-align: justify;
  margin: -30px 120px;
}
.people,
.address {
  text-align: left;
}
.people {
  position: absolute;
  margin: 30px 30px;
}
.address {
  position: absolute;
  margin: 77px 30px;
  /* text-decoration: underline; */
  border-bottom: 1px solid rgb(245, 245, 245);
  padding-bottom: 26px;
}
.spay {
  position: absolute;
  margin: 168px 30px;
}
.spay span {
  font-size: 26px;
  color: rgb(51, 51, 51);
}
.spay span:nth-child(2) {
  font-family: "PingFang-SC-Bold";
  margin-left: 6px;
}
.anniu {
  position: absolute;
  margin: 260px 93px;
}
.anniu_1,
.anniu_2 {
  width: 249px;
  height: 88px;
}
.anniu_1 {
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  font-size: 28px;
  color: rgb(51, 51, 51);
  border: 2px solid #dddddd;
}
.anniu_2 {
  border-radius: 10px;
  background: linear-gradient(to right, rgb(255, 114, 18), rgb(255, 161, 40));
  font-size: 28px;
  color: rgb(255, 255, 255);
  margin-left: 61px;
  border: 0;
}
.remind {
  text-align: left;
}
.remind .tx {
  position: absolute;
  font-size: 26px;
  color: rgb(153, 153, 153);
  margin: 30px 30px;
}
.icon-jinggao {
  margin-left: 12px;
  font-size: 32px;
}
.remind p {
  position: absolute;
  font-size: 24px;
  color: rgb(153, 153, 153);
  margin: 86px 30px;
}
.remind p span {
  color: rgb(255, 109, 21);
}
</style>