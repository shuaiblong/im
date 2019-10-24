<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-09-28 17:54:07
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-24 11:41:46
 -->
 <!--
  * @Descripttion: 
  * @Author: chenjia
  * @Date: 2019-09-28 17:54:07
  * @LastEditors: chenjia
  * @LastEditTime: 2019-09-30 19:04:58
  -->
<template>
  <div v-show="hidshow">
    <!-- 底部导航栏 -->
    <van-tabbar v-model="active" class="nav-foot">
      <!-- 可以加to链接 -->
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="fenlei">分类</van-tabbar-item>
      <van-tabbar-item icon="diamond-o">加入极地鹰</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/shopche">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/weilogin">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      active: 0,
      docmHeight: document.documentElement.clientHeight, //默认屏幕高度
      showHeight: document.documentElement.clientHeight, //实时屏幕高度
      hidshow: true
    };
  },
  beforeRouteLeave(to, from, next) {
    console.log(to);
    next();
  },
  mounted() {
    // window.onresize监听页面高度的变化
    window.onresize = () => {
      return (() => {
        this.showHeight = document.body.clientHeight;
      })();
    };
  },
  watch: {
    showHeight() {
      if (this.docmHeight > this.showHeight) {
        this.hidshow = false;
      } else {
        this.hidshow = true;
      }
    }
  }
};
</script>
<style scoped>
.nav-foot {
  z-index: 1;
}
.van-tabbar-item--active {
  color: #ff6d15;
}
</style>