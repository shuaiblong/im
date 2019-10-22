<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-21 13:50:14
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-22 09:53:35
 -->
<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="协商历史" left-text left-arrow @click-left="onClickLft">
      <van-icon class="yuan" slot="right" />
      <van-icon class="dian" slot="right" />
      <van-icon class="dian" slot="right" />
      <van-icon class="dian" slot="right" />
    </van-nav-bar>
    <!-- 上板块 -->
    <div class="top">
      <div class="tban">
        <div>
          <img
            class="tx"
            src="http://img3.duitang.com/uploads/item/201507/23/20150723115018_ma428.thumb.700_0.jpeg"
            alt
          />
        </div>
        <div>
          <p class="dp">米苏专营带店：小红</p>
          <p class="time">2019-10-08 17:18:45</p>
        </div>
      </div>
      <p class="tong">卖家已经同意了申请</p>
    </div>
    <!-- 信息 -->
    <div class="top">
      <div class="tban">
        <div>
          <img
            class="tx"
            src="http://img3.duitang.com/uploads/item/201507/23/20150723115018_ma428.thumb.700_0.jpeg"
            alt
          />
        </div>
        <div>
          <p class="dp">大师傅</p>
          <p class="time">2019-10-08 17:18:45</p>
        </div>
      </div>
      <p class="tong">买家(大师傅)于2019-10-08 17:18:45创建了退款申请</p>
      <p class="tong">退款类型：仅退款</p>
      <p class="tong">退款金额：￥2.10</p>
      <p class="tong">退款原因：订单信息拍错(规格/尺码颜色等)</p>
      <p class="tong">退款描述：</p>
    </div>
    <div class="liao">
      <p class="liaop">
        <i class="iconfont icon-liaotian"></i> &nbsp;联系卖家
      </p>
    </div>
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
.dian {
  width: 8px;
  height: 8px;
  background: #000;
  border-radius: 50%;
  margin: 0 4px;
}
.yuan {
  width: 14px;
  height: 14px;
  background: rgb(255, 101, 25);
  border-radius: 50%;
  margin: -45px -52px 0px 0px;
}
.tx {
  width: 59px;
  height: 59px;
  margin-right: 20px;
}
.tban {
  display: flex;
  align-items: center;
}
.dp {
  margin: 0;
  font-size: 24px;
}
.time {
  margin: 20px 0 0 0;
  font-size: 20px;
  color: rgb(153, 153, 153);
}
.top {
  background: #ffffff;
  width: 750px;
  box-sizing: border-box;
  padding: 30px;
  margin-bottom: 20px;
  text-align: left;
}
.tong {
  text-align: left;
  font-size: 24px;
  margin: 30px 0 0 0;
}
.liao {
  width: 710px;
  height: 80px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  font-size: 26px;
}
.icon-liaotian {
  color: rgb(91, 136, 219);
  font-size: 38px;
}
.liaop {
  display: flex;
  align-items: center;
}
</style>