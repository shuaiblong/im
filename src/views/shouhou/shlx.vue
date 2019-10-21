<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-19 14:57:08
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-19 17:50:59
 -->
<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="选择售后类型" left-text left-arrow @click-left="onClickLft" />
    <p class="shuoming">
      本次售后服务将由
      <!-- 提供方式 -->
      <span class="gong">供应商</span>
      为您提供
    </p>
    <div class="shop">
      <div>
        <!-- 图片 -->
        <img
          class="nimg"
          src="//img13.360buyimg.com/n5/s450x450_jfs/t21550/52/1272497032/25949/9156bcbe/5b23620fN27345d70.jpg"
          alt
        />
      </div>
      <div>
        <!-- 标题 -->
        <p class="titlep">
          120粒VE+120粒vc康恩贝天生素E软胶囊生素软
          生素E软胶囊外部用120粒V120粒VE+120粒vc康恩贝天生素E软胶囊生素软
          生素E软胶囊外部用120粒V
        </p>
        <p class="jiage">
          <span class="jia">价格：</span>
          <!-- 价格 -->
          <span class="ge">￥190.00</span>
          &nbsp;&nbsp;
          <span class="jia">数量：</span>
          <!-- 数量 -->
          <span class="ge">1</span>
        </p>
      </div>
    </div>
    <ul class="xu">
      <li class="lie">
        <div class="biao">
          <div>
            <i class="iconfont icon-icon5"></i>
          </div>
          <div class="size">
            <p class="tui">我要退款(无需退货)</p>
            <p class="huo">没收到货，或与卖家协商同意不用退货只退款</p>
          </div>
        </div>
        <van-icon name="arrow" />
      </li>
      <li class="lie">
        <div class="biao">
          <div>
            <i class="iconfont icon-tuihuoguanli"></i>
          </div>
          <div class="size">
            <p class="tui">我要退货退款</p>
            <p class="huo">已收到货，需要退还收到的货物</p>
          </div>
        </div>
        <van-icon name="arrow" />
      </li>
      <li class="lie">
        <div class="biao">
          <div>
            <i class="iconfont icon-huanhuo"></i>
          </div>

          <div class="size">
            <p class="tui">我要换货</p>
            <p class="huo">已收到货，需要更换已收到的货物</p>
          </div>
        </div>
        <van-icon name="arrow" />
      </li>
    </ul>
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
.nimg {
  width: 120px;
}
.shop {
  width: 710px;
  height: 160px;
  box-sizing: border-box;
  display: flex;
  background: #ffffff;
  padding: 20px 30px;
  margin: 0 auto;
  border-radius: 10px;
}
.titlep {
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.shuoming {
  background: #ffffff;
  display: inline-block;
  padding: 10px 15px;
  border-radius: 25px;
  color: rgb(153, 153, 153);
  font-size: 22px;
}
.gong {
  color: rgb(255, 109, 21);
}
.jiage {
  font-size: 22px;
  text-align: left;
}
.jia {
  color: rgb(153, 153, 153);
}
.ge {
  font-weight: 600;
}
.lie {
  display: flex;
  text-align: left;
  align-items: center;
  justify-content: space-between;
  width: 710px;
  margin: 0 auto;
  background: #ffffff;
  padding: 30px;
  box-sizing: border-box;
}
.biao {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.xu {
  margin-top: 20px;
}
.tui {
  font-size: 24px;
  margin: 0 0 20px 0;
}
.huo {
  font-size: 20px;
  color: rgb(153, 153, 153);
  margin: 0;
}

.size {
  margin-left: 20px;
}
.iconfont {
  color: rgb(255, 109, 21);
  font-size: 45px;
}
</style>