<template>
  <div class="box">
    <div class="head">
      <div class="tou">
        <div>
          <van-nav-bar title="个人信息" left-arrow></van-nav-bar>
        </div>
      </div>
    </div>
    <!-- 头像 -->
    <div>
      <van-cell title="头像" is-link value />
      <div class="tupian"><img src="../../../assets/xihuan.png"></div>
      <van-cell title="个性签名" is-link value="内容" />
      <van-cell title="昵称" is-link value="大时代" />
      <van-cell title="性别" is-link value="男" />
      <van-cell title="出生日期" is-link value="1992-05-25" @click="uptan" />
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '20%' }">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :formatter="formatter"
      />
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      currentDate: new Date()
    };
  },
  methods: {
    uptan() {
      this.show = true;
    },
    showPopup() {
      this.show = true;
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      }
      if (type === "day") {
        return `${value}日`;
      }
      return value;
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
  color: rgb(153, 153, 153);
  font-size: 50px;
}
.van-ellipsis {
  font-size: 32px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Bold";
}
.van-cell__title {
  text-align: left;
  font-size: 28px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Regular";
}
.van-cell__value {
  font-size: 28px;
  color: rgb(153, 153, 153);
  font-family: "PingFang-SC-Regular";
}
.tupian img{
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: 2;
  top:94px;
  right:70px;
}
</style>