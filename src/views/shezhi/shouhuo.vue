<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-22 10:39:18
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-22 11:59:51
 -->
<template>
  <div>
    <van-nav-bar
      title="新建收货人"
      left-text
      right-text="保存"
      left-arrow
      @click-left="onClickLft"
      @click-right="onClickRight"
    />
    <div class="box">
      <div class="hang">
        <span class="name">收货人</span>
        <!-- 收货人 -->
        <input class="put" v-model="name" type="text" placeholder="请填写收货人姓名" />
      </div>
      <div class="hang">
        <span class="name">手机号码</span>
        <!-- 手机号 -->
        <input class="put" v-model="phone" maxlength="11" type="text" placeholder="请填写收货人手机号" />
      </div>
      <div class="diqu">
        <span>所在地区</span>
        <!-- 地区 -->
        <div class="qu"></div>
      </div>
      <div class="dizhi">
        <span class="name">详细地址</span>
        <input class="shu" type="text" placeholder="街道、楼牌号等" />
      </div>
    </div>
    <button class="btn">保存</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      phone: ""
    };
  },
  methods: {
    onClickLft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$toast("管理");
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
.van-nav-bar__text {
  font-weight: 600;
}
.name {
  display: inline-block;
  width: 20%;
}
.hang {
  width: 100%;
  text-align: left;
  font-size: 26px;
  height: 85px;
  box-sizing: border-box;
  padding: 0 0 0 30px;
  border-bottom: 2px solid #ededed;
}
.put {
  width: 80%;
  border: 0;
  border-bottom: 1px solid #ededed;
  font-size: 26px;
  height: 80px;
}
.box {
  background: #ffffff;
}
.diqu {
  display: flex;
  height: 85px;
  padding: 0 0 0 30px;
  font-size: 26px;
  align-items: center;
  border-bottom: 2px solid #ededed;
}
.qu {
  width: 80%;
  height: 85px;
}
.btn {
  position: absolute;
  bottom: 30px;
  left: 30px;
  width: 690px;
  height: 80px;
  border-radius: 50px;
  border: 0;
  font-size: 28px;
  color: white;
  background: linear-gradient(to right, rgb(254, 118, 1), rgb(255, 73, 10));
}
.dizhi {
  height: 120px;
}
.shu {
  width: 80%;
  height: 85px;
  border: 0;
}
</style>