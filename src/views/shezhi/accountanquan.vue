<template>
  <div class="box">
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
    <!-- 我的手机号 -->
    <div>
      <van-cell title="我的手机号" value="177****1234" is-link size="large" label="修改登录密码和更换密码" />
      <van-cell title="其他登录方式" is-link label="可用于账号登录/身份认证等" />
      <van-cell title="支付设置" is-link label="可用于账号登录/身份认证等" />
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
.van-cell__title {
  text-align: left;
  font-size: 28px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Medium";
}
.van-cell__label {
  font-size: 20px;
  color: rgb(153, 153, 153);
  font-family: "PingFang-SC-Regular";
}
.van-cell__value {
  font-size: 24px;
  color: rgb(153, 153, 153);
  font-family: "PingFang-SC-Regular";
  margin-top: 20px;
}
.van-cell__right-icon {
  margin-top: 20px;
}
</style>