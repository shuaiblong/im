<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-09 19:07:21
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-13 14:10:53
 -->
<template>
  <div>
    <div class="state">
            <!-- 店铺导航栏 -->
          <div class="stanav">
            <span class="zhuan">
                <!-- 类型店铺 icon图固定不用动-->
              <i class="iconfont icon-dianpu"></i> 
               专营店
              <van-icon name="arrow" />
            </span>
            <!-- 商品状态(代付款发货类) -->
            <span class="huo">已发货</span>
          </div>
          <ul class="xqshop">

            <li>
                <!-- 商品图片v-for循环 -->
              <img
                src="//img12.360buyimg.com/n1/jfs/t30052/127/1612053323/198563/aba0f961/5ce647f6Ndace9815.jpg"
                class="veimg"
              />
            </li>
            
            <li class="xqtitle">
                <!-- 商品介绍v-for循环 -->
                <p class="xqtitlep">
                    120粒VE+120粒vc康恩贝天生素E软胶囊外部用120粒V120粒VE+120粒vc康恩贝天生素E软胶囊外部用120粒V
                </p>
                <!-- 商品名字数量 -->
                <p class="xqguige">酒红色,L x1</p>
            </li>
            <li class="xqpic">
                <!-- 商品价格 -->
                <p class="xqpir">￥113.80</p>
                <!-- 商品个数 -->
                <p class="xqnum">x1</p>
            </li>
          </ul>
          <ul class="xqshop">

            <li>
                <!-- 商品图片v-for循环 -->
              <img
                src="//img12.360buyimg.com/n1/jfs/t30052/127/1612053323/198563/aba0f961/5ce647f6Ndace9815.jpg"
                class="veimg"
              />
            </li>
            
            <li class="xqtitle">
                <!-- 商品介绍v-for循环 -->
                <p class="xqtitlep">
                    120粒VE+120粒vc康恩贝天生素E软胶囊外部用120粒V120粒VE+120粒vc康恩贝天生素E软胶囊外部用120粒V
                </p>
                <!-- 商品名字数量 -->
                <p class="xqguige">酒红色,L x1</p>
            </li>
            <li class="xqpic">
                <!-- 商品价格 -->
                <p class="xqpir">￥113.80</p>
                <!-- 商品个数 -->
                <p class="xqnum">x1</p>
            </li>
          </ul>
  </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .change {
  color: #ff6d15;
  border-bottom: 4px solid #ff6d15;
}
.icon-dianpu {
  font-size: 26px;
}
.zhuan {
  font-size: 26px;
  float: left;
  display: inline-flex;
  align-items: center;
}
.huo {
  color: #ff6d15;
  font-size: 26px;
  float: right;
}
.state {
  padding: 30px;
  background: #ffffff;
  margin: 20px;
  border-radius: 10px;
  text-align: left;
}
.veimg {
  width: 158px;
  height: 158px;
  margin-right: 30px;
}
.stanav::after {
  content: "";
  display: block;
  clear: both;
}
.xqshop li{
    float: left;
}
.xqshop::after{
    content: "";
    display: block;
    clear: both;
}
.xqtitle{
    width: 306px;
    
}
.xqtitlep{
    font-size: 24px;
    margin: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    /*设置省略号在容器第四行文本后*/
    -webkit-line-clamp: 2; 
    overflow: hidden;
}
.xqguige{
    margin-top: 10px;
    font-size: 22px;
    color: rgb(153, 153, 153);
}
.xqpic{
    float: right !important;
    text-align: right;
}
.xqpir{
    margin: 0;
    font-size: 24px;
}
.xqnum{
    margin-top: 10px;
    font-size: 22px;
    color: rgb(153, 153, 153);
}
.xqshop{
    margin-top: 16px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(245, 245, 245);
}
.total{
    text-align: right;
}
.totnum{
    font-size: 24px;
}
</style>