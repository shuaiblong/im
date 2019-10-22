<template>
  <div class="box">
      <!-- 头部信息 -->
    <div class="head">
      <div>
        <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
      </div>
      <div class="geren">
          <van-cell title="个人信息" is-link url="" />
<van-cell title="我的收获地址" is-link to="" />
      </div>
    </div>
    <!-- 账户安全 -->
    <div class="zhanghu">
                <van-cell title="账户安全" is-link url="" />
<van-cell title="消息通知设置" is-link to="" />  
<van-cell title="系统权限设置" is-link to="" />  
<van-cell-group title="">
  <van-cell title="清除缓存" value="0.00M" />
</van-cell-group>
    </div>
    <!-- 关于极地鹰 -->
    <div class="guanyu">
       <van-cell value="v1.0.0" is-link>
  <!-- 使用 title 插槽来自定义标题 -->
  <template slot="title">
    <span class="custom-title">关于极地鹰</span>
  </template>
</van-cell> 
    </div>
    <!-- 退出登录 -->
    <div class="tuichu">
        <van-button type="default" size="large">退出登录</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: #f5f5f5;
  overflow: hidden;
}
.van-nav-bar__arrow {
  color: rgb(51, 51, 51);
  font-size: 45px;
}
.van-ellipsis {
  font-size: 32px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Bold";
}
.van-cell__title{
    text-align: left;
    font-size:28px;
    color:rgb(51,51,51);
    font-family: "PingFang-SC-Regular";
}
.zhanghu,.guanyu,.tuichu{
    margin-top:20px;
}
</style>