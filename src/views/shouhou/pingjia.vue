<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-20 09:12:53
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-20 17:15:47
 -->
<template>
  <div class="box">
    <!-- 导航栏 -->
    <van-nav-bar title="评价售后服务" left-text left-arrow @click-left="onClickLft" />
    <!-- 评价 -->
    <div class="ping">
      <span class="fuwu">服务评价</span>
      <!-- 星级评价 -->
      <van-rate
        v-model="value"
        :size="20"
        color="rgb(255,109,21)"
        void-icon="star"
        void-color="#dddddd"
        gutter="15px"
      />
    </div>
    <!-- 中间 -->
    <div class="neirong">
      <!-- 输入文本 -->
      <textarea
        class="put"
        maxlength="300"
        @input="descInput"
        v-model="desc"
        placeholder="描述具体情况,有助于商家优化服务"
      ></textarea>
      <!-- 字数显示 -->
      <span class="ge">{{remnant}}/300</span>
      <div class="ok">
        <input type="checkbox" class="yuan" />
        <span class="ni">匿名</span>
      </div>
    </div>
    <!-- 底部提交 -->
    <button @click="tiao" class="ti">提交评价</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
      remnant: 0
    };
  },
  methods: {
    //   左上角返回按钮
    onClickLft() {
      this.$router.go(-1);
    },
    // 字数显示
    descInput() {
      var txtVal = this.desc.length;
      this.remnant = 0 + txtVal;
    },
    // 提交评价
    tiao() {
      this.$router.push("/pjfw");
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
.ping {
  display: flex;
  height: 80px;
  width: 750px;
  background: #ffffff;
  align-items: center;
  box-sizing: border-box;
  padding-left: 30px;
}
.fuwu {
  font-size: 24px;
  margin-right: 45px;
}
.neirong {
  width: 710px;
  height: 360px;
  margin: 20px auto;
  background: #ffffff;
  border-radius: 10px;
}
.put {
  padding: 0;
  width: 100%;
  border: 0;
  height: 290px;
  resize: none;
  border-bottom: 2px solid #f5f5f5;
  box-sizing: border-box;
  padding: 30px 25px 20px 25px;
  font-size: 24px;
}
.yuan:checked {
  background: #ff6d15;
}

.yuan {
  width: 35px;
  height: 35px;
  background-color: #ffffff;
  /* border: 0; */
  outline: none;
  border: 2px solid rgb(153, 153, 153);
  -webkit-border-radius: 50%;
  border-radius: 50%;
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
  position: relative;
  display: inline-block;
  vertical-align: top;
  cursor: default;
  -webkit-appearance: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-transition: background-color ease 0.1s;
  transition: background-color ease 0.1s;
}

.yuan:checked::after {
  content: "";
  top: 5px;
  left: 6px;
  position: absolute;
  background: transparent;
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  height: 10px;
  width: 20px;
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.ok {
  text-align: left;
  box-sizing: border-box;
  padding-left: 30px;
  height: 70px;
  display: flex;
  align-items: center;
}
.ni {
  color: rgb(102, 102, 102);
  font-size: 24px;
  margin-left: 20px;
}
.ti {
  position: fixed;
  width: 750px;
  height: 100px;
  bottom: 0;
  left: 0;
  border: 0;
  background: linear-gradient(to right, rgb(254, 118, 1), rgb(255, 73, 10));
  font-size: 30px;
  color: white;
}
.box {
  height: 100vh;
}
.ge {
  position: absolute;
  right: 50px;
  top: 440px;
}
</style>