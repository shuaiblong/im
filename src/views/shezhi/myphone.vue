<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-22 13:40:41
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-22 14:30:52
 -->
<template>
  <div class="box">
    <!-- 头部 -->
    <div class="head">
      <div class="tou">
        <div>
          <van-nav-bar title="我的手机号" left-arrow>
            <van-icon name="ellipsis" slot="right" />
          </van-nav-bar>
        </div>
        <div class="dian">
          <span class="radio"></span>
        </div>
      </div>
    </div>
    <!-- 手机号 -->
    <div class="genggai">
      <p class="denglu">您可以使用手机号直接登录极地鹰商城</p>
      <p class="bangding">
        <span>已绑定:</span>
        <span>177****1234</span>
      </p>
      <!-- <p><van-button round type="info" size="large">更改手机号</van-button></p>
      <p><van-button round type="info">更改手机账号密码</van-button></p>-->
      <p class="button_1">
        <input type="button" value="更改手机号" />
      </p>
      <p class="button_2">
        <input type="button" value="更改手机账号密码" />
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: #f5f5f5;
  overflow: hidden;
}
.van-nav-bar__arrow {
  color: rgb(153, 153, 153);
  font-size: 50px;
}
.van-ellipsis {
  font-size: 32px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Bold";
}
.van-icon-ellipsis {
  color: rgb(51, 51, 51);
  font-size: 60px;
}
.genggai {
  margin-top: 62px;
}
.genggai .denglu {
  font-size: 24px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Regular";
}

.bangding {
  margin-top: 59px;
}
.bangding span:first-of-type {
  font-size: 26px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Bold";
  margin-right: 10px;
}
.bangding span:nth-child(2) {
  font-size: 44px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Medium";
}
/* .van-button__text{
    font-size: 30px;
    color:rgb(255,255,255);
    font-family: "PingFang-SC-Regular";
} */
/* .van-button--round{
    width: 690px;
    height: 80px;
} */
.button_1 input,
.button_2 input {
  width: 690px;
  height: 80px;
}
.button_1 input {
  font-size: 30px;
  color: rgb(255, 255, 255);
  background-color: rgb(254, 118, 1);
  border-radius: 40px 40px 40px 40px;
  border: 0;
}
.button_2 input {
  font-size: 30px;
  color: rgb(255, 109, 21);
  font-display: "PingFang-SC-Regular";
  background-color: rgb(255, 255, 255);
  border-radius: 40px 40px 40px 40px;
  border: 0;
}
</style>