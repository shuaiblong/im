<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-21 10:27:21
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-21 14:06:39
 -->
<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="退款详情" left-text left-arrow @click-left="onClickLft">
      <van-icon class="yuan" slot="right" />
      <van-icon class="dian" slot="right" />
      <van-icon class="dian" slot="right" />
      <van-icon class="dian" slot="right" />
    </van-nav-bar>
    <!-- 退款关闭 -->
    <div class="close">
      <p class="h1">退款关闭</p>
      <p class="time">2019年7月12日 15:12</p>
    </div>
    <p class="tai">因您撤销退款申请，退款已关闭，交易将正常进行。请关注交易超时。</p>
    <div class="tiao">
      <span>协商历史 &nbsp; 协商历史</span>
      <van-icon name="arrow" />
    </div>
    <div class="tiao">
      <span>售后服务评价</span>
      <van-icon name="arrow" />
    </div>
    <div class="kuai">
      <p class="tk">退款信息</p>
      <div class="shop">
        <div>
          <img
            class="tu"
            src="//img10.360buyimg.com/n1/jfs/t1/56432/10/9435/324741/5d6c7e3fEb97a3d32/219dd80562dc33bd.jpg"
            alt
          />
        </div>
        <div>
          <p class="title">
            120粒VE+120粒vc康恩贝天生素E软胶囊外部
            120粒V120粒VE+120粒vc康恩贝120粒VE+120粒vc康恩贝天生素E软胶囊外部
            120粒V120粒VE+120粒vc康恩贝
          </p>
        </div>
      </div>
      <p class="yin">退款原因： 7天无理由退换</p>
      <p class="yin">退款金： ￥69.00</p>
      <p class="yin">申请件数： 1</p>
      <p class="yin">申请时间： 2019-07-06 14:12:45</p>
      <p class="yin">退款编号： 45645858545544</p>
    </div>
    <div class="lxdh">
      <div>
        <i class="iconfont icon-liaotian"></i> 联系卖家
      </div>
      <div>
        <i class="iconfont icon-dianhua"></i> 拨打电话
      </div>
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
.close {
  box-sizing: border-box;
  text-align: left;
  width: 750px;
  padding: 40px 50px;
  background: linear-gradient(to right, rgb(255, 114, 18), rgb(255, 161, 40));
}
.h1 {
  font-size: 36px;
  margin: 0;
  color: white;
}
.time {
  margin: 20px 0 0 0;
  font-size: 24px;
  color: white;
}
.tai {
  text-align: left;
  width: 646px;
  margin: 20px auto 30px;
  font-size: 24px;
  color: rgb(153, 153, 153);
}
.tiao {
  border-radius: 10px;
  box-sizing: border-box;
  padding: 30px;
  background: #ffffff;
  width: 710px;
  margin: 0 auto 20px;
  text-align: left;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.kuai {
  border-radius: 10px;
  box-sizing: border-box;
  padding: 30px;
  background: #ffffff;
  width: 710px;
  margin: 0 auto 20px;
  text-align: left;
  font-size: 24px;
}
.tk {
  margin: 0;
}
.shop {
  box-sizing: border-box;
  padding: 10px;
  width: 650px;
  margin: 30px auto 20px;
  background: rgb(245, 245, 245);
  height: 141px;
  border-radius: 10px;
  display: flex;
}
.tu {
  width: 120px;
  height: 120px;
  margin-right: 20px;
}
.title {
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.yin {
  font-size: 22px;
  color: rgb(153, 153, 153);
  margin: 20px 0 0 0;
}
.lxdh {
  width: 710px;
  height: 80px;
  margin: 20px auto;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.icon-liaotian {
  color: rgb(91, 136, 219);
}
.icon-dianhua {
  color: rgb(91, 136, 219);
}
</style>