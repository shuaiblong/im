<template>
  <div class="box">
    <div class="head">
      <van-nav-bar
        title="个性签名"
        right-text="保存"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <!-- 留言 -->
    <div cllass="liuyan">
      <textarea class="input" maxlength="30">伽师瓜到静安寺</textarea>
    </div>
    <div class="number">
    <span>30</span>
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
  font-size: 50px;
}
.van-ellipsis {
  font-size: 32px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Bold";
}
.van-nav-bar__text {
  font-size: 26px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Medium";
}
.input {
  width: 100%;
  height: 360px;
  border: 0px;
  font-size: 28px;
  color: rgb(51,51,51)；
}
.number{
  text-align: right;
}
.number span{
  font-size:24px;
  color:rgb(153,153,153);
  font-family: "PingFang-SC-Regular";
  display: block;
  margin:-49px 30px;
}
</style>