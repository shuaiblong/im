<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-20 14:12:53
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-20 17:14:24
 -->
<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="售后评价服务" left-text left-arrow @click-left="onClickLft">
      <van-icon class="yuan" slot="right" />
      <van-icon class="dian" slot="right" />
      <van-icon class="dian" slot="right" />
      <van-icon class="dian" slot="right" />
    </van-nav-bar>
    <div class="ping">
      <!-- 图 -->
      <img src="../../assets/dui.png" class="dui" alt />
      <!-- 状态 -->
      <p class="zhuang">已评价</p>
      <p class="xie">感谢你的评价</p>
    </div>
    <div class="hang">
      <span>留下更多反馈，帮助我们提供更好的服务</span>
      <van-icon name="arrow" />
    </div>
    <p class="lian">
      <i class="iconfont icon-liaotian"></i>&nbsp;
      <span>联系卖家</span>
    </p>
    <div class="user">
      <div class="xinxi">
        <div>
          <!-- 图 -->
          <img
            class="tu"
            src="http://img3.duitang.com/uploads/item/201507/23/20150723115018_ma428.thumb.700_0.jpeg"
            alt
          />
        </div>
        <div class="xfont">
          <!-- 名字 -->
          <p class="name">大师傅</p>
          <!-- 日期 -->
          <p class="time">2019-10-08 17:18:45</p>
        </div>
      </div>
      <p>退款类型：仅退款</p>
      <p>退款金额：￥2.10</p>
      <p>退款原因：订单信息排错(规格/尺码颜色等)</p>
      <p>退款描述：</p>
    </div>
    <div class="food"></div>
  </div>
</template>
<script>
export default {
  methods: {
    //   左上角返回按钮
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
.ping {
  width: 750px;
  background: #ffffff;
}
.dui {
  width: 107px;
  margin-top: 120px;
}
.zhuang {
  margin: 30px 0 0 0;
  font-size: 28px;
  font-weight: 600;
}
.xie {
  font-size: 22px;
  color: rgb(153, 153, 153);
  margin: 0;
  padding: 20px 0;
}
.hang {
  height: 63px;
  background: #ffffff;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 30px;
  font-size: 24px;
}
.lian {
  margin: 150px 0 20px 0;
  font-size: 26px;
}
.icon-liaotian {
  color: rgb(91, 136, 219);
}
.user {
  padding: 30px;
  background: #ffffff;
  text-align: left;
  font-size: 24px;
}
.tu {
  width: 59px;
  height: 59px;
}
.xinxi {
  display: flex;
  align-items: center;
  margin-bottom: 70px;
}
.xfont {
  text-align: left;
  margin-left: 20px;
}
.name {
  margin: 0;
  font-size: 24px;
}
.time {
  margin: 20px 0 0 0;
  color: rgb(153, 153, 153);
  font-size: 20px;
}
.food {
  width: 710px;
  height: 80px;
  margin: 20px auto;
  background: #ffffff;
  border: 10px;
}
</style>