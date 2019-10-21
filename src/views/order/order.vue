<template>
  <div class="box">
    <div>
      <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    </div>
    <div class="quanbu">
      <!-- <van-tabs v-model="active">
        <van-tab title="全部">1</van-tab>
        <van-tab title="待付款">2</van-tab>
        <van-tab title="待发货">3</van-tab>
        <van-tab title="待收货">4</van-tab>
        <van-tab title="待评价">5</van-tab>
      </van-tabs> -->
      <ul>
          <li>全部</li>
          <li>待付款</li>
          <li>待发货</li>
          <li>待收货</li>
          <li>待评价</li>
      </ul>
    </div>
    <div class="goods">
        <div class="dian">
            <div class="dp">
            <p><i class="iconfont icon-dianpu"></i>
          <span class="zyd">专营店</span><i class="iconfont icon-dibudaohanglan-"></i>
          </p>
          </div>
          <span class="huo">已发货</span>
           
        </div>
        <!-- <ul>
            <li><i class="iconfont icon-dianpu"></i><span>专营店</span><i class="iconfont icon-dibudaohanglan-"></i></li>
            <li><span>已发货</span></li>
        </ul> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
<style scoped>
.van-nav-bar__arrow {
  color: rgb(51, 51, 51);
}
.van-ellipsis {
  font-size: 32px;
  color: rgb(51, 51, 51);
}
.quanbu{
    width: 100%;
    height: 50px;
    background-color: #fff;
}
.quanbu ul li{
    float: left;
    font-size:26px;
    color:rgb(51,51,51);
    margin-left:65px;
}
.goods{
    width: 100%;
    height: 391px;
    background-color: rgb(255,255,255);
    margin-top:10px;
}
.dian{
    display:flex;
}
/* .goods span:first-of-type{
    vertical-align:middle;
    color:red;
    font-size:26px;
} */
/* .goods span:nth-of-type(2){
   font-size:26px;
   color:rgb(255,109,21);
   margin-left:500px;
} */
/* .goods ul li{
    float: left;
} */
.dp .zyd{

}
.dian .huo{
   font-size:26px; 
   color:rgb(255,109,21);
   float:right;
}
</style>