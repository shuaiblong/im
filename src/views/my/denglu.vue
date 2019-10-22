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
      <div><p class="heng">-  &nbsp;&nbsp;-</p><p class="xuan">收藏</p></div>
      <div><p class="heng">- &nbsp;&nbsp; -</p><p class="xuan">足迹</p></div>
      <div><p class="heng">-  &nbsp;&nbsp;-</p><p class="xuan">优惠卷</p></div>
      <div><p class="heng">- &nbsp;&nbsp;-</p><p class="xuan">积分</p></div>
      </div>
    </div>
    <!-- 空白页面 -->
    <div class="kong"></div>
    <!-- 底部选项 -->
    <div class="choose">
      <ul>
        <li class="choli">
          <van-dropdown-menu active-color="rgb(255,114,18)">
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </li>-
      </ul>
      <ul class="jg">
        <li class="choli">
          <span @click="likebtn" :class="'unchange' ?'unchange':'change'">价格</span>
          <i class="iconfont icon-jiantou31"></i>
          <i class="iconfont icon-jiantou32"></i>
        </li>
        <li class="sx">
          <span @click="likebtn" :class="'unchange' ?'unchange':'change'">筛选</span>
          <i class="iconfont icon-shaixuan21"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
var perDiv = null;
export default {
  data() {
    return {
      categoryIndex: 0,
      value1: 0,
      option1: [
        { text: "综合排序", value: 0 },
        { text: "新品优先", value: 1 },
        { text: "评论从高到低", value: 2 }
      ],
    };
  },
  methods: {
    likebtn(e) {
      e.target.className =
        e.target.className == "change" ? "unchange" : "change";
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
.shoucang{
  display: flex;
  justify-content: space-around;
  margin-top: 112px;
}
.shoucang .heng{
  color:rgb(245,245,245);
  font-weight: bolder;
  font-size:32px;
}
.shoucang .xuan{
  color:rgb(255,255,255);
  font-size:24px;
  margin-top:-15px;
}
.shezhi:after{
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}
.kong {
  width: 100%;
  height: 194px;
  margin-top: 28px;
  background-color: rgb(255, 255, 255);
}
.van-dropdown-menu {
  background: transparent;
}
.van-ellipsis {
  position: absolute;
  float: right;
}
.choose {
  height: 16px;
  width: 100%;
  margin-top: 108px;
}
.choose ul li {
  display: block;
  float: left;
  margin-left: 15px;
  font-size: 26px;
  color:rgb(51,51,51);
}
.icon-jiantou31,
.icon-jiantou32 {
  color: rgb(255,109,21);
}
.icon-jiantou31 {
  position: absolute;
  top: -16px;
}
.icon-jiantou32 {
  position: absolute;
  top: -4px;
}
.choli {
  position: relative;
  margin-right: 50px;
}
.icon-shaixuan21:before {
  content: "\E667";
  font-size: 48px;
  font-weight: lighter;
  vertical-align: middle;
}
.sx {
  margin-top: -22px;
}
.jg {
  float: right;
  margin-top: 30px;
  margin-right: 10px;
}
.change {
  color: rgb(255,109,21);
}
.unchange {
  color: rgb(51, 51, 51);
}
.van-dropdown-menu__title::after {
  display: none !important;
}
.van-ellipsis {
  background-color: transparent;
}
</style>