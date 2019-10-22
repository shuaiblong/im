<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-21 08:58:47
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-22 08:58:31
 -->
<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-20 17:37:42
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-21 09:58:20
 -->
<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="退还/售后" left-text left-arrow @click-left="onClickLft" />
    <div class="box">
      <p class="zhuan">
        <i class="iconfont icon-dianpu"></i>&nbsp;
        <span>专营店</span>&nbsp;&nbsp;
        <van-icon name="arrow" />
      </p>
      <!-- 详情板块 -->
      <div class="xiang">
        <div>
          <!-- 详情图 -->
          <img
            class="tu"
            src="//img12.360buyimg.com/n1/jfs/t30052/127/1612053323/198563/aba0f961/5ce647f6Ndace9815.jpg"
            alt
          />
        </div>
        <div class="rx">
          <!-- 标题 -->
          <p class="title">
            120粒VE+120粒vc康恩贝天生素E软胶囊生素软
            生素E软胶囊外部用120粒V120粒VE+120粒vc康恩贝天生素E软胶囊生素软
            生素E软胶囊外部用120粒V
          </p>
          <!-- 数量 -->
          <p class="number">数量：1</p>
        </div>
      </div>
      <div class="tui">
        <i class="iconfont icon-tuihuoguanli"></i>
        退货退款
        退款
        <span class="close">关闭</span>
      </div>
      <div class="anniu">
        <button>售后服务评价</button>
        <button>查看详情</button>
      </div>
    </div>
    <div class="box">
      <p class="zhuan">
        <i class="iconfont icon-dianpu"></i>&nbsp;
        <span>专营店</span>&nbsp;&nbsp;
        <van-icon name="arrow" />
      </p>
      <!-- 详情板块 -->
      <div class="xiang">
        <div>
          <!-- 详情图 -->
          <img
            class="tu"
            src="//img12.360buyimg.com/n1/jfs/t30052/127/1612053323/198563/aba0f961/5ce647f6Ndace9815.jpg"
            alt
          />
        </div>
        <div class="rx">
          <!-- 标题 -->
          <p class="title">
            120粒VE+120粒vc康恩贝天生素E软胶囊生素软
            生素E软胶囊外部用120粒V120粒VE+120粒vc康恩贝天生素E软胶囊生素软
            生素E软胶囊外部用120粒V
          </p>
          <!-- 数量 -->
          <p class="number">数量：1</p>
        </div>
      </div>
      <div class="tui">
        <i class="iconfont icon-tuihuoguanli"></i>
        退货退款
        退款
        <span class="close">关闭</span>
      </div>
      <div class="anniu">
        <button>售后服务评价</button>
        <button>查看详情</button>
      </div>
    </div>
    <div class="box">
      <p class="zhuan">
        <i class="iconfont icon-dianpu"></i>&nbsp;
        <span>专营店</span>&nbsp;&nbsp;
        <van-icon name="arrow" />
      </p>
      <!-- 详情板块 -->
      <div class="xiang">
        <div>
          <!-- 详情图 -->
          <img
            class="tu"
            src="//img12.360buyimg.com/n1/jfs/t30052/127/1612053323/198563/aba0f961/5ce647f6Ndace9815.jpg"
            alt
          />
        </div>
        <div class="rx">
          <!-- 标题 -->
          <p class="title">
            120粒VE+120粒vc康恩贝天生素E软胶囊生素软
            生素E软胶囊外部用120粒V120粒VE+120粒vc康恩贝天生素E软胶囊生素软
            生素E软胶囊外部用120粒V
          </p>
          <!-- 数量 -->
          <p class="number">数量：1</p>
        </div>
      </div>
      <div class="tui">
        <i class="iconfont icon-tuihuoguanli"></i>
        退货退款
        退款
        <span class="close">关闭</span>
      </div>
      <div class="anniu">
        <button>售后服务评价</button>
        <button>查看详情</button>
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
.zhuan {
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 24px;
}
.box {
  width: 710px;
  margin: 20px auto;
  box-sizing: border-box;
  padding: 30px;
  background: #ffffff;
  border-radius: 10px;
  text-align: left;
}
.tu {
  width: 120px;
  height: 120px;
  margin-right: 20px;
}
.xiang {
  margin-top: 30px;
  display: flex;
  text-align: left;
}
.title {
  margin: 0;
  color: rgb(153, 153, 153);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.number {
  margin: 0;
  color: rgb(153, 153, 153);
  font-size: 22px;
  margin-top: 20px;
}
.close {
  color: rgb(255, 109, 21);
}
.icon-tuihuoguanli {
  color: rgb(255, 109, 21);
  font-size: 38px;
  margin-right: 10px;
}
.tui {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.anniu {
  margin: 20px 0 0 0;
  border-top: 2px solid rgb(245, 245, 245);
  padding: 20px 0 0 0;
}
.anniu button {
  color: rgb(255, 108, 0);
  border: 2px solid rgb(255, 108, 0);
  background: #ffffff;
  margin-left: 40px;
  border-radius: 5px;
  float: right;
}
.anniu::after {
  content: "";
  display: block;
  clear: both;
}
</style>