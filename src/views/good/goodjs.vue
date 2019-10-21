<template>
  <div class="box">
    <div class="head">
      <!-- 左边箭头 -->
      <div class="jiantou">
        <i class="iconfont icon-jiantou2"></i>
      </div>
      <!-- 中间列表 -->
      <div class="sp">
        <ul>
          <li>商品</li>
          <li>评价</li>
          <li>详情</li>
        </ul>
      </div>
      <!-- 右边三点 -->
      <div class="dian">
        <span class="radio"></span>
        <span class="radio"></span>
        <span class="radio"></span>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="lunbo">
      <van-swipe @change="onChange">
        <van-swipe-item>
          <img src="../../assets/index/ysl.png" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/index/ysl.png" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/index/ysl.png" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/index/ysl.png" />
        </van-swipe-item>

        <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div>
      </van-swipe>
    </div>
    <div class="jiage">
      <div class="price">
        <div class="jg">
      <span>￥</span>
      <span>269</span>
      <span>.00</span>
     <s class="yj">￥335.00</s>
      </div>
<div class="shou">
  <div class="ysc">
  <i class="iconfont icon-like-line"></i>
        <p>已收藏</p>
      </div>  
  <div class="sc">
  <i class="iconfont icon-like-line"></i>
        <p>收藏</p>
      </div>  
      </div>
      </div>
      
    </div>
    <div class="danjia">
      <ul>
        <li>1件装 | 179元</li>
        <li>2件装 | 280元</li>
        <li>2件装 | 280元</li>
        <li>2件装 | 280元</li>
      </ul>
    </div>
    <div class="zy">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
};
</script>

<style scoped>
.head {
  margin-top: 16px;
}
.jiantou {
  width: 49px;
  height: 49px;
  background: rgb(51, 51, 51);
  opacity: 0.5;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  float: left;
  margin-left: 15px;
}
.icon-jiantou2 {
  color: rgb(255, 255, 255);
  font-size: 50px;
}
.radio {
  display: inline-block;
  width: 7px;
  height: 8px;
  background: rgb(255, 255, 255);
  border-radius: 50%;
  margin: 0 4px;
}
.dian {
  display: inline-flex;
  background: rgb(51, 51, 51);
  width: 49px;
  height: 49px;
  /* padding: 10px; */
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  opacity: 0.5;
  float: right;
  margin-right: 15px;
}
.sp {
  /* justify-content: center; */
  /* align-items: center; */
  display: inline-flex;
}
.sp ul li {
  float: left;
  font-size: 28px;
  color: rgb(40, 40, 40);
  margin: 8px 46px;
}
/* .sp:after{
  content:"";
  display: block;
  clear: both;
} */
.dian ::before {
  content: "";
  display: block;
  clear: both;
}
.lunbo img {
  /* width: 657px; */
  height: 657px;
}

.custom-indicator {
  position: absolute;
  right: 0;
  bottom: 0;
}
.jiage{
  margin-top:10px;
  background-color: rgb(249,249,249);
}
.price {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price span{
  color:rgb(255,28,28);
}
.price span:first-of-type,span:nth-of-type(3) {
  font-size: 26px;
}
span:nth-of-type(2) {
  font-size: 40px;
  font-weight: 0;
}
.yj{
  text-decoration: line-through;
  color:rgb(153,153,153);
  font-size: 26px;
  margin-left:26px;
}
.jg{
  margin-left:26px;
}
/* .xj span:first-of-type,.xj span:nth-of-type(3){
  font-size: 26px;
  color: rgb(255,28,28);
} */
/* .xj span:nth-of-type(2) {
  font-size: 40px;
  color: rgb(255,28,28)
} */
/* span:nth-of-type(3) {
  font-size: 26px;
} */
.shou{
  display: inline-flex;
}
.icon-like-line{
  font-size:40px;
  color:rgb(153,153,153);
}
.ysc,.sc{
  font-size:20px;
  color:rgb(153,153,153);
}
.sc{
  margin:0px 26px;
}
.ysc p,.ysc i{
  color: rgb(255,100,25);
}
.danjia{
  width: 100%;
  height: 99px;
  color:rgb(244,244,244);
  margin-top:35px;
}
.danjia ul{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.danjia li:first-of-type{
  color:rgb(255,93,29);
}
.danjia li:last-of-type{
  white-space: nowrap;
  overflow: hidden;
}
.danjia ul li{
  width: 190px;
  height: 37px;
  font-size:24px;
  color:rgb(153,153,153);
  border:solid 1px rgb(153,153,153);
  border-radius: 30px;
  margin:0px 10px;
}
</style>