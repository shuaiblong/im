<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-12 15:30:19
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-23 18:10:29
 -->
<template>
  <div class="goods">
    <!-- <div class="top">
      <van-nav-bar
        title="必买清单"
        @click-left="onClickLeft"
        left-arrow
      />
      <span class="sxin"><img src="../../assets/heart_topnav.png"></span>
    </div>
      <div class="in">
        <van-icon name="search" />
        <input type="text" class="put" placeholder="中秋礼物" />
    </div>-->
    <div class="bimai">
      <div class="tou">
        <ul>
          <li class="jiantou">
            <van-icon name="arrow-left" @click="onClickLeft" />
          </li>
          <li class="miaosu">必买清单</li>
          <li class="tu">
            <img src="../../assets/heart_topnav.png" />
          </li>
        </ul>
      </div>
      <div class="in">
        <van-icon name="search" class="sou" />
        <input type="text" class="put" placeholder="搜索你想要的好物" />
      </div>
    </div>
    <div class="box">
      <van-card
        desc="描述信息描述信息描述信息描述信息描述信息描述信息息描述信息描述信息"
        title="商品标题商品标题商品标题商品商品标题商品商品标题商品"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      />
      <div class="xin">
        <span class="like">72591人喜欢</span>
        <div @click="likebtn" :class="'abc' ?'abc':'bcd'"></div>
      </div>
    </div>
    <div class="box">
      <van-card
        desc="描述信息描述信息描述信息描述信息描述信息描述信息息描述信息描述信息"
        title="商品标题商品标题商品标题商品商品标题商品商品标题商品"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      />
      <div class="xin">
        <span class="like">72591人喜欢</span>
        <div @click="likebtn" :class="'abc' ?'abc':'bcd'"></div>
      </div>
    </div>
    <div class="box">
      <van-card
        desc="描述信息描述信息描述信息描述信息描述信息描述信息息描述信息描述信息"
        title="商品标题商品标题商品标题商品商品标题商品商品标题商品"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      />
      <div class="xin">
        <span class="like">72591人喜欢</span>
        <div @click="likebtn" :class="'abc' ?'abc':'bcd'"></div>
      </div>
    </div>
    <div class="box">
      <van-card
        desc="描述信息描述信息描述信息描述信息描述信息描述信息息描述信息描述信息"
        title="商品标题商品标题商品标题商品商品标题商品商品标题商品"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      />
      <div class="xin">
        <span class="like">72591人喜欢</span>
        <div @click="likebtn" :class="'abc' ?'abc':'bcd'"></div>
      </div>
    </div>
    <div class="box">
      <van-card
        desc="描述信息描述信息描述信息描述信息描述信息描述信息息描述信息描述信息"
        title="商品标题商品标题商品标题商品商品标题商品商品标题商品"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      />
      <div class="xin">
        <span class="like">72591人喜欢</span>
        <div @click="likebtn" :class="'abc' ?'abc':'bcd'"></div>
      </div>
    </div>
    <div class="box">
      <van-card
        desc="描述信息描述信息描述信息描述信息描述信息描述信息息描述信息描述信息"
        title="商品标题商品标题商品标题商品商品标题商品商品标题商品"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      />
      <div class="xin">
        <span class="like">72591人喜欢</span>
        <div @click="likebtn" :class="'abc' ?'abc':'bcd'"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      soc: true
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    likebtn(e) {
      e.target.className = e.target.className == "abc" ? "bcd" : "abc";
    }
  }
};
</script>

<style scoped>
.bimai {
  width: 100%;
  height: 200px;
  background-color: #5fd8cb !important;
  position: relative;
}
.bimai ul::after {
  content: "";
  display: block;
  clear: both;
}
.bimai li {
  float: left;
  margin-top: 43px;
}
.van-icon-arrow-left:before {
  content: "\F008";
  font-size: 43px;
}
.miaosu {
  font-size: 30px;
  color: rgb(255, 255, 255);
  margin-left: 280px;
}
.tu img {
  width: 35px;
  height: 31px;
  margin-left: 260px;
}
.top {
  width: 100%;
  height: 200px;
  background-color: #5fd8cb !important;
}
.van-hairline--bottom,
.van-search {
  background-color: #5fd8cb !important;
}
.van-card__thumb {
  width: 250px;
  height: 250px;
}
.van-nav-bar__title {
  color: #fff;
  font-weight: bolder;
  font-size: 35px !important;
  font-family: "PingFang-SC-Bold";
}
.van-search__content {
  background: rgba(120, 229, 218, 0.7);
  justify-content: center;
  border-radius: 18px;
}
.van-icon {
  color: rgb(255, 255, 255);
}
.goods {
  background: #fafafa;
}
.van-card__title {
  font-size: 30px;
  font-family: SimHei;
  color: #333333;
  font-weight: bolder;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: hidden;
  margin-left: -1px;
  overflow: hidden;
}
.van-card__desc {
  font-size: 14px;
  font-family: sans-serif;
  color: #999999;
}

.van-ellipsis {
  font-size: 28px;
  max-height: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: inherit;
}
.xin {
  color: #ff1c1c;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  bottom: 0;
  right: 6%;
  float: right;
  margin-bottom: 10px;
}
.xin span {
  display: block;
  margin-right: 24px;
}
.like {
  color: #ff1c1c;
  font-size: 30px;
  font-family: sans-serif;
  margin-top: 0;
}
.abc {
  display: inline-block;
  width: 34px;
  background: url("../../assets/heart_0.png") no-repeat center;
  background-size: 100%;
  margin-top: 0;
}
.bcd {
  width: 34px;
  display: inline-block;
  background: url("../../assets/heart_1.png") no-repeat center;
  background-size: 100%;
  margin-top: 0;
}
.box {
  position: relative;
  margin-top: 20px;
}
.sxin {
  width: 35px;
  height: 31px;
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 3;
  color: rgb(255, 255, 255);
}
.sxin img {
  width: 35px;
  height: 31px;
}
.van-field__control--center {
  color: red !important;
  text-align: left;
}
.in {
  margin: 15px auto;
  width: 691px;
  height: 60px;
  background: rgb(130, 235, 224);
  border-radius: 50px;
  position: relative;
}
.put {
  width: 80%;
  height: 56px;
  font-size: 26px;
  background: rgb(130, 235, 224);
  border: 0;
}
.sou {
  color: white;
  font-size: 36px;
  position: absolute;
  top: 14px;
  left: 20px;
}
input::-webkit-input-placeholder {
  text-align: center;
  color: white;
}
</style>