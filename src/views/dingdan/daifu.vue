<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-14 09:04:39
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-14 19:34:02
 -->
<template>
  <div class="daifu">
    <van-nav-bar title="发起代付请求" left-text left-arrow @click-left="onClickLft" />
    <!-- 导航栏下背景图 -->
    <div class="daibg"></div>
    <!-- 代付请求 -->
    <div class="dkuai">
      <p class="sheng">支付剩余时间时间</p>
      <p class="pic">￥113.8</p>
      <p class="wx">通过微信将代付请求发送给好友，即可让他帮你买单</p>
      <button class="btn">发送代付请求</button>
    </div>
    <!-- 说明书 -->
    <div class="shuo">
      <p class="tips">说明:</p>
      <p class="dui">
        <span>1、</span>
        <span>对方需要开通微信支付才能帮你付款，如果未开通，请重新选择好友发送;</span>
      </p>
      <p>2、如果你将来退款了，钱将退还到好友微信账户里。</p>
    </div>
    <!-- 继续按钮 -->
    <button class="ji">继续发送给其他好友</button>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.van-nav-bar__text {
  font-size: 26px;
  color: rgb(51, 51, 51);
}
.van-icon-arrow-left:before {
  color: rgb(51, 51, 51);
  font-weight: 600;
}
.van-nav-bar__title {
  font-size: 32px;
  font-weight: 600;
}
.daibg {
  width: 750px;
  height: 337px;
  background-image: url("../../assets/dai.png");
  background-size: 100% 100%;
}
.dkuai {
  width: 710px;
  height: 350px;
  margin: 10px auto;
  background: #ffffff;
  box-sizing: border-box;
  padding: 20px;
}
.daifu {
  height: 100vh;
  background: #f5f5f5;
}
.dkuai .pic {
  font-size: 60px;
  color: #ff6d15;
  margin: 0;
}
.dkuai .sheng {
  margin: 0;
  font-size: 24px;
  color: #999999;
}
.dkuai .wx {
  font-size: 26px;
  color: #6e6e6e;
  margin-top: 25px;
}
.dkuai .btn {
  width: 650px;
  height: 88px;
  border: 0;
  font-size: 28px;
  background: linear-gradient(to right, rgb(255, 114, 18), rgb(255, 161, 40));
  border-radius: 10px;
  color: white;
  margin-top: 26px;
}
.shuo {
  margin: 0 auto;
  width: 692px;
  margin-top: 60px;
  text-align: left;
  font-size: 24px;
  box-sizing: border-box;
  padding: 10px;
}
.shuo .tips {
  font-size: 26px;
  margin-bottom: 20px;
}
.shuo p {
  margin: 0;
}
.ji {
  width: 650px;
  height: 88px;
  border: 0;
  font-size: 28px;
  background: linear-gradient(to right, rgb(255, 114, 18), rgb(255, 161, 40));
  border-radius: 10px;
  color: white;
  margin-top: 90px;
}
.dui span:first-of-type {
  display: block;
  float: left;
}
.dui span:nth-child(2) {
  display: block;
  text-align: justify;
  float: left;
  width: 630px;
}
</style>