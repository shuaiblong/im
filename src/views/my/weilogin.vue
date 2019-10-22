<template>
  <div class="box">
    <!-- 头部整体 -->
    <div class="head">
      <!-- 登录及头像 -->
      <div class="deng">
        <img src="../../assets/qq.png" />
        <span>点击登陆</span>
      </div>
      <!-- 设置和信息 -->
      <div class="shezhi">
        <span>
          <i class="iconfont icon-shezhi"></i>
          <i class="iconfont icon-message"></i>
        </span>
      </div>
      <!-- 收藏 -->
      <div class="shoucang">
        <div>
          <p class="heng">- &nbsp;&nbsp;-</p>
          <p class="xuan">余额</p>
        </div>
        <div>
          <p class="heng">- &nbsp;&nbsp; -</p>
          <p class="xuan">收藏</p>
        </div>
        <div>
          <p class="heng">- &nbsp;&nbsp;-</p>
          <p class="xuan">优惠卷</p>
        </div>
        <div>
          <p class="heng">- &nbsp;&nbsp;-</p>
          <p class="xuan">足迹</p>
        </div>
      </div>
    </div>
    <!-- 我的订单 -->
    <div class="myorder">
      <div class="my">
        <span>我的订单</span>
        <span>
          全部订单
          <i class="iconfont icon-dibudaohanglan-"></i>
        </span>
      </div>
      <!-- 待付款 待发货 -->
      <div class="daifukuan">
        <div>
          <p class="img">
            <img src="../../assets/xihuan.png" />
          </p>
          <p class="miaosu">待付款</p>
        </div>
        <div>
          <p class="img">
            <img src="../../assets/xihuan.png" />
          </p>
          <p class="miaosu">待发货</p>
        </div>
        <div>
          <p class="img">
            <img src="../../assets/xihuan.png" />
          </p>
          <p class="miaosu">待收货</p>
        </div>
        <div>
          <p class="img">
            <img src="../../assets/xihuan.png" />
          </p>
          <p class="miaosu">评价</p>
        </div>
        <div>
          <p class="img">
            <img src="../../assets/xihuan.png" />
          </p>
          <p class="miaosu">退款/售后</p>
        </div>
      </div>
    </div>
    <!-- 我的服务 -->
    <div class="fuwu">
      <div class="wode">
        <span>我的服务</span>
      </div>
      <div class="fuwulist">
        <div>
          <p class="img">
            <img src="../../assets/xihuan.png" />
          </p>
          <p class="miaosu">多商户</p>
        </div>
        <div>
          <p class="img">
            <img src="../../assets/xihuan.png" />
          </p>
          <p class="miaosu">商户合作</p>
        </div>
        <div>
          <p class="img">
            <img src="../../assets/xihuan.png" />
          </p>
          <p class="miaosu">帮助与客服</p>
        </div>
        <div>
          <p class="img">
            <img src="../../assets/xihuan.png" />
          </p>
          <p class="miaosu">签到</p>
        </div>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <div class="like">
        <div class="xin">
                  <img src="../../assets/xihuan.png">
      <span>猜你喜欢</span>
        </div>
      <div>
        <xthis></xthis>
      </div>
    </div>
  </div>
</template>

<script>
import xthis from "./xthis";
export default {
  components: {
    xthis
  },
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
}
.active {
  background: red;
}
.head {
  width: 100%;
  height: 324px;
  background-color: rgb(255, 101, 25);
}
.deng {
  float: left;
  margin: 30px 30px;
  position: absolute;
}
img {
  vertical-align: middle;
  width: 100px;
  height: 100px;
}
.deng span {
  vertical-align: middle;
  margin-left: 10px;
  font-family: "PingFang-SC-Bold";
  color: rgb(255, 255, 255);
  font-size: 38px;
  line-height: 11px;
}
.shezhi span {
  float: right;
  margin: 25px 10px;
  font-size: 20px;
  position: relative;
  color: #fff;
}
.icon-shezhi {
  position: absolute;
  color: rgb(255, 255, 255);
  font-size: 45px;
  margin: 3px -140px;
}
.icon-message {
  position: absolute;
  color: rgb(255, 255, 255);
  font-size: 40px;
  margin: 10px -50px;
}
.van-icon,
.van-icon::before {
  display: inline-block;
  font-size: 46px !important;
}
.shoucang {
  display: flex;
  justify-content: space-around;
  margin-top: 112px;
}
.shoucang .heng {
  color: rgb(255,255,255) ;
  font-size: 30px;
}
.shoucang .xuan {
  color: rgb(255, 255, 255);
  font-size: 24px;
  margin-top: -15px;
}
.shezhi:after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}
.myorder {
  width: 710px;
  height: 240px;
  margin: 20px auto;
  background-color: rgb(255, 255, 255);
}
.my span:first-of-type {
  color: rgb(51, 51, 51);
  font-size: 28px;
  font-family: "PingFang-SC-Bold";
  float: left;
  margin-left: 49px;
}
.my span:nth-child(2) {
  color: rgb(153, 153, 153);
  font-size: 24px;
  font-family: "PingFang-SC-Regular";
  float: right;
  margin-right: 30px;
}
.my span {
  margin-top: 10px;
}
.my {
  text-decoration: underline;
  border-bottom: 1px solid rgb(245, 245, 245);
  padding-bottom: 76px;
}
.daifukuan {
  display: flex;
  justify-content: space-around;
}
.daifukuan img {
  width: 60px;
  height: 60px;
}
.daifukuan .miaosu,
.fuwulist .miaosu {
  font-size: 24px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Regular";
}
.fuwu {
  width: 710px;
  height: 230px;
  margin: 20px auto;
  background-color: rgb(255, 255, 255);
}
.wode span {
  float: left;
  margin: 10px 49px;
  color: rgb(51, 51, 51);
  font-size: 28px;
  font-family: "PingFang-SC-Bold";
}
.wode:after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}
.fuwulist {
  display: flex;
  justify-content: space-around;
}
.fuwu img {
  width: 70px;
  height: 70px;
}
.like img{
  width: 32px;
  height: 32px;
  vertical-align:middle;
}
.like span{
  color:rgb(51,51,51) !important;
  font-size:24px;
  font-family: "PingFang-SC-Bold";
   vertical-align:middle;
   margin-left:20px;
}
</style>