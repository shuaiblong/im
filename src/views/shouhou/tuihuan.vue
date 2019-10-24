<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-19 09:51:58
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-24 16:56:04
 -->
<template>
  <div>
    <!-- 顶部导航栏 -->
    <van-nav-bar title="退换售后" left-text left-arrow @click-left="onClickLft" />
    <ul class="navtab">
      <li @click="cur=0">
        <span :class="cur==0?'change':''">申请售后</span>
      </li>
      <li @click="cur=1">
        <span :class="cur==1?'change':''">处理中</span>
      </li>
      <li @click="cur=2">
        <span :class="cur==2?'change':''">申请记录</span>
      </li>
    </ul>
    <div>
      <!-- 申请售后 -->
      <div v-show="cur==0">
        <div class="in">
          <i class="iconfont icon-sousuo"></i>
          <input class="put" type="text" placeholder="商品名称/商品编号/订单编号" />
        </div>
        <div class="shop">
          <p class="dian">
            <i class="iconfont icon-dianpu"></i>
            &nbsp;
            <span>专营店</span>
            &nbsp;&nbsp;
            <van-icon name="arrow" />
          </p>
          <div class="nei">
            <div>
              <!-- 商品图 -->
              <img
                class="nimg"
                src="//img13.360buyimg.com/n5/s450x450_jfs/t21550/52/1272497032/25949/9156bcbe/5b23620fN27345d70.jpg"
                alt
              />
            </div>
            <div class="rnei">
              <!-- 商品介绍 -->
              <p class="tiletp">
                120粒VE+120粒vc康恩贝天生素E软胶囊生素软
                生素E软胶囊外部用120粒V120粒VE+120粒vc康恩贝天生素E软胶囊生素软
                生素E软胶囊外部用120粒V
              </p>
              <!-- 数量 -->
              <span class="number">数量：1</span>
            </div>
          </div>
          <button @click="shenq" class="btn">申请售后</button>
        </div>
        <div class="shop">
          <p class="dian">
            <i class="iconfont icon-dianpu"></i>
            &nbsp;
            <span>专营店</span>
            &nbsp;&nbsp;
            <van-icon name="arrow" />
          </p>
          <div class="nei">
            <div>
              <!-- 商品图 -->
              <img
                class="nimg"
                src="//img13.360buyimg.com/n5/s450x450_jfs/t21550/52/1272497032/25949/9156bcbe/5b23620fN27345d70.jpg"
                alt
              />
            </div>
            <div class="rnei">
              <!-- 商品介绍 -->
              <p class="tiletp">
                120粒VE+120粒vc康恩贝天生素E软胶囊生素软
                生素E软胶囊外部用120粒V..."
              </p>
              <!-- 数量 -->
              <span class="number">数量：1</span>
            </div>
          </div>
          <div class="state">
            <span class="sta">该商品已超过售后期</span>
            <button class="btn">申请售后</button>
          </div>
        </div>
      </div>
      <!-- 处理中 -->
      <div v-show="cur==1">2</div>
      <!-- 申请记录 -->
      <div v-show="cur==2">3</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cur: 0
    };
  },
  methods: {
    //   返回按钮
    onClickLft() {
      this.$router.go(-1);
    },
    // 申请售后
    shenq() {
      this.$router.push("/shlx");
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
.navtab {
  width: 100%;
  background: #ffffff;
}
.navtab::after {
  content: "";
  display: block;
  clear: both;
}
.navtab li {
  width: 33%;
  float: left;
  font-size: 28px;
  height: 85px;
  line-height: 85px;
}
.change {
  border-bottom: 6px solid #ff6d15;
  color: #ff6d15;
  font-weight: 600;
  padding: 0 0 26px 0;
}
.in {
  width: 710px;
  height: 60px;
  margin: 20px auto;
  background: #ffffff;
  border-radius: 50px;
  position: relative;
}
.put {
  width: 80%;
  height: 56px;
  border: 0;
  font-size: 26px;
}
.icon-sousuo {
  font-size: 40px;
  position: absolute;
  top: 8px;
  left: 20px;
}
.shop {
  width: 710px;
  height: 312px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 8px;
  box-sizing: border-box;
  text-align: left;
  font-size: 26px;
  padding: 30px;
  margin-bottom: 20px;
}
.dian {
  display: flex;
  margin: 0;
  align-items: center;
  margin-bottom: 30px;
}
.nei {
  display: flex;
}
.nimg {
  width: 120px;
}
.tiletp {
  font-size: 24px;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.rnei {
  margin-left: 20px;
}
.number {
  display: block;
  margin-top: 16px;
  font-size: 22px;
  color: #b0b0b0;
}
.btn {
  border: 2px solid #ff6d15;
  background: #ffffff;
  color: #ff6d15;
  border-radius: 25px;
  padding: 6px 20px;
  float: right;
}
.state {
  margin-top: 20px;
}
.sta {
  font-size: 22px;
  color: rgb(153, 153, 153);
}
</style>