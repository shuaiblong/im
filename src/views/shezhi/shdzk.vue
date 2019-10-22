<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-22 13:30:54
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-22 15:36:24
 -->
<template>
  <div class="box">
    <van-nav-bar title="收货地址" left-text left-arrow @click-left="onClickLft" />
    <div>
      <img class="ding" src="../../assets/ding.png" alt />
    </div>
    <p class="mei">一个地址都没有哦~</p>
    <button class="tian">添加收货地址</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    //   左箭头
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
.box {
  height: 100vh;
  background: #ffffff;
}
.ding {
  margin: 250px auto 0;
  width: 141px;
  height: 167px;
}
.mei {
  margin: 20px 0 0 0;
  font-size: 24px;
  color: rgb(153, 153, 153);
}
.tian {
  margin-top: 60px;
  background: #ffffff;
  font-size: 24px;
  width: 284px;
  height: 62px;
  border: 2px solid rgb(255, 161, 40);
  border-radius: 50px;
  color: rgb(255, 109, 21);
}
</style>