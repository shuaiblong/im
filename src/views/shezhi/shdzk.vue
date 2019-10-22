<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-22 13:30:54
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-22 13:36:21
 -->
<template>
  <div class="box">
    <van-nav-bar title="收货地址" left-text left-arrow @click-left="onClickLft" />
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
</style>