<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-09-30 18:50:13
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-12 15:45:56
 -->
<template>
    <div class="index">
    <!-- 引入头部 -->
    <navhead></navhead>
    <!-- 引入轮播 -->
    <banner></banner>
    <!-- 轮播下几个活动 -->
    <ul class="xiang">
      <li>
        <i class="iconfont icon-baohu"></i>售后无忧
      </li>
      <li>
         <i class="iconfont icon-ico_home_AfterSale"></i>假一赔十
      </li>
      <li>
         <i class="iconfont icon-xianshimiaosha"></i>天天秒杀
      </li>
      <li>
         <i class="iconfont icon-baohu"></i>急速到货
      </li>
    </ul>
    <!-- x轴滚动图 -->
    <xbanner></xbanner>
    <!-- 活动 -->
    <activity></activity>
    <!-- 详情 -->
    <xiang></xiang>
    <!-- 活动轮播模块 -->
    <huodong></huodong>
    <!-- tab列表 -->
    <tablist class="top"></tablist>
    <!-- 底部导航栏 -->
    <navfoot></navfoot>
    </div>
</template>
<script>
// 引入头部导航
import navhead from '../../components/head'
// 引入轮播模块
import banner from './banner'
// 引入横向滚动模块
import xbanner from './xbanner'
// 引入活动图
import activity from './activity'
// 引入详情模块
import xiang from './xiangqing'
// 引入活动轮播模块
import huodong from './huodong'
// 引入TAB类详情
import tablist from './tablist'
// 引入底部导航栏
import navfoot from '../../components/foot'
export default {
    components:{
    navhead,
    banner,
    xbanner,
    activity,
    xiang,
    huodong,
    tablist,
    navfoot
  }
}
</script>
<style scoped>
.top{
  margin-top: 280px;
}
.index{
  background: #f5f5f5;
}
.nav-foot{
  z-index: 1;
}
.van-tabbar-item--active{
  color:#ff6d15;
}
.xiang{
  margin:0 24px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
}
.xiang li{
  color: #ff1e00;
}
.icon-ico_home_AfterSale{
  font-size:20px;
}
.icon-xianshimiaosha{
  font-size: 20px;
}
.icon-baohu{
  font-size: 20px;
}
</style>