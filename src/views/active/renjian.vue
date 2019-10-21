<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-12 15:35:09
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-12 16:07:17
 -->
<template>
  <div class="box">
    <van-nav-bar title="人间不值得" left-arrow @click-left="onClickLeft" />
    <div class="banner">
      <div class="in">
        
        <input type="text" class="put" placeholder="中秋礼物" />
      </div>
    </div>
    <div class="xxxx">
      <span class="jqsx"></span>
    </div>
    <div class="swip">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <ul class="jqsxswip">
            <li class="bannerli">
              <img class="liimg" src="../../assets/index/ysl.png" />
              <p class="lip">圣罗兰（YSL）2017秋季新款丝绒哑光</p>
              <p class="lisp">￥299</p>
            </li>
            <li class="bannerli">
              <img class="liimg" src="../../assets/index/ysl.png" />
              <p class="lip">圣罗兰（YSL）2017秋季新款丝绒哑光</p>
              <p class="lisp">￥299</p>
            </li>
            <li class="bannerli">
              <img class="liimg" src="../../assets/index/ysl.png" />
              <p class="lip">圣罗兰（YSL）2017秋季新款丝绒哑光</p>
              <p class="lisp">￥299</p>
            </li>
            <li class="bannerli">
              <img class="liimg" src="../../assets/index/ysl.png" />
              <p class="lip">圣罗兰（YSL）2017秋季新款丝绒哑光</p>
              <p class="lisp">￥299</p>
            </li>
          </ul>
        </van-swipe-item>
        <van-swipe-item>
          <ul class="jqsxswip">
            <li class="bannerli">
              <img class="liimg" src="../../assets/index/ysl.png" />
              <p class="lip">圣罗兰（YSL）2017秋季新款丝绒哑光</p>
              <p class="lisp">￥299</p>
            </li>
            <li class="bannerli">
              <img class="liimg" src="../../assets/index/ysl.png" />
              <p class="lip">圣罗兰（YSL）2017秋季新款丝绒哑光</p>
              <p class="lisp">￥299</p>
            </li>
            <li class="bannerli">
              <img class="liimg" src="../../assets/index/ysl.png" />
              <p class="lip">圣罗兰（YSL）2017秋季新款丝绒哑光</p>
              <p class="lisp">￥299</p>
            </li>
            <li class="bannerli">
              <img class="liimg" src="../../assets/index/ysl.png" />
              <p class="lip">圣罗兰（YSL）2017秋季新款丝绒哑光</p>
              <p class="lisp">￥299</p>
            </li>
          </ul>
        </van-swipe-item>
        <van-swipe-item>
          <ul class="jqsxswip">
            <li class="bannerli">
              <img class="liimg" src="../../assets/index/ysl.png" />
              <p class="lip">圣罗兰（YSL）2017秋季新款丝绒哑光</p>
              <p class="lisp">￥299</p>
            </li>
            <li class="bannerli">
              <img class="liimg" src="../../assets/index/ysl.png" />
              <p class="lip">圣罗兰（YSL）2017秋季新款丝绒哑光</p>
              <p class="lisp">￥299</p>
            </li>
            <li class="bannerli">
              <img class="liimg" src="../../assets/index/ysl.png" />
              <p class="lip">圣罗兰（YSL）2017秋季新款丝绒哑光</p>
              <p class="lisp">￥299</p>
            </li>
            <li class="bannerli">
              <img class="liimg" src="../../assets/index/ysl.png" />
              <p class="lip">圣罗兰（YSL）2017秋季新款丝绒哑光</p>
              <p class="lisp">￥299</p>
            </li>
          </ul>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="xxxx">
      <span class="dbpp"></span>
    </div>
    <div class="db">
      <ul>
        <li v-for="item in 6" :key="item">
          <div class="ppimg"></div>
          <p class="ppname">巴黎欧莱雅</p>
        </li>
      </ul>
    </div>

    <div class="xxxx">
      <span class="bkdp"></span>
    </div>
    <tablist></tablist>
  </div>
</template>

<script>
import tablist from "../index/tablist";
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  components: {
    tablist
  }
};
</script>

<style scoped>
.van-nav-bar__title {
  font-size: 32px;
  font-Family: "PingFang-SC-Bold";
  color:rgb(51,51,51);
  font-weight: bolder;
}
.van-icon {
  color: #ccc !important;
  vertical-align: middle;
}
.box {
  width: 100%;
  margin: 0 auto;
  background-color: #ededed;
}
.banner {
  width: 100%;
  height: 260px;
  background: url("../../assets/active/ban.png") no-repeat center;
  background-size: 100%;
  overflow: hidden;
}
.jqsx {
  display: inline-block;
  height: 54px;
  width: 231px;
  background: url("../../assets/jqsx.png") no-repeat center;
  background-size: 231px 54px;
}
.swip {
  background-color: #fff;
  
}
.dbpp {
  display: inline-block;
  height: 54px;
  width: 231px;
  background: url("../../assets/jqsx.png") no-repeat center;
  background-size: 231px 54px;
}
.bkdp {
  display: inline-block;
  height: 54px;
  width: 231px;
  background: url("../../assets/jqsx.png") no-repeat center;
  background-size: 231px 54px;
}
.db ul::after {
  content: "";
  display: block;
  clear: both;
}
.db li {
  float: left;
  margin: 2%;
  overflow: hidden;
  background: #fff;
}
.db .ppimg {
  width: 219px;
  height: 159px;
  background: pink url("../../assets/oly.png") no-repeat center;
  background-size: 100% 100%;
  margin: 1px auto;
}
.db .ppname {
  font-size: 12px;
  line-height: 30px;
  color: #999999;
  margin: 0;
  font-family: PingFang-SC-Regular;
}
.in {
  width: 691px;
  height: 49px;
  margin: 0 auto;
  border-radius: 30px;
  margin-top: 8px;
  font-size: 14px;
  opacity: 0.7;
  background:rgb(245,245,245);
}
.put {
  width: 100%;
  height: 46px;
  border-radius: 30px;
  opacity: 0.7;
  border: 0;
}
.swip ul {
  width: 100%;
}
.swip ul li {
  padding: 0 5px;
  box-sizing: border-box;
  float: left;
  width: 25%;
  background: #fff;
}
.swip ul img {
  width: 40px;
  height: 90px;
}
.swip ul li .lip {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #333;
  font-size: 20px;
  font-family: sans-serif;
}
.swip ul li .lisp {
  color: #ff1c1c;
  font-size: 24px;
  font-family: PingFang-SC-Medium;
}
input::-webkit-input-placeholder {
  /* text-align: center; */
  margin-top:-10px;
}
/* .van-icon-search{
  margin-top:2px !important;
} */
.xxxx{
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.liimg{
  width: 216px;
  height: 44px;
}
</style>