<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-21 14:55:38
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-21 17:19:33
 -->
<template>
  <div>
    <!-- 顶部导航栏 -->
    <van-nav-bar title="商家入驻" left-text left-arrow @click-left="onClickLft" />
    <van-cell-group>
      <van-field v-model="username" maxlength="8" label="姓名 :" placeholder="请输入用户名" />
      <!-- 手机号输入框 -->
      <van-field
        v-model="phone"
        maxlength="11"
        @blur="phonefiy"
        label="手机 :"
        placeholder="请输入您的手机号"
      />
      <!-- 验证码输入框 -->
      <van-field v-model="vercode" label="验证码 :" placeholder="请输入手机验证码">
        <div slot="button" class="color">获取验证码</div>
      </van-field>
      <!-- 密码输入框 -->
      <van-field
        v-model="password"
        @blur="passwordfiy"
        type="password"
        label="密码 :"
        maxlength="20"
        placeholder="8-20个字母和数字组合的密码"
      />
      <!-- 确认密码框 -->
      <van-field
        @blur="qpasswordfiy"
        v-model="qpassword"
        type="password"
        label="确认密码 :"
        maxlength="20"
        placeholder="8-20个字母和数字组合的密码"
      />
    </van-cell-group>
    <p class="tishi">
      <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>手机号将作为登录账号，请您认真填写
    </p>
    <button class="xia">下一步</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      phone: "",
      vercode: "",
      qpassword: ""
    };
  },
  methods: {
    //   右上角按钮
    onClickLft() {
      this.$router.go(-1);
    },
    // 手机号正则
    phonefiy() {
      var _this = this;
      var reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
      if (_this.phone == "") {
        this.$toast("手机号格式不能为空！");
      } else {
        if (!reg.test(_this.phone)) {
          this.$toast("手机号格式不正确");
        }
      }
      return true;
    },
    // 密码正则表达式
    passwordfiy() {
      var _this = this;
      var reg = /^.*(?=.{8,})(?=.*\d)(?=.*[A-Za-z]).*$/;
      if (_this.password == "") {
        this.$toast("密码不能为空！");
      } else {
        if (!reg.test(_this.password)) {
          this.$toast("密码格式不正确！8-12位字母和数组组合");
        }
      }
    },
    // 确认密码
    qpasswordfiy() {
      if (this.password == this.qpassword) {
        return true;
      } else {
        this.$toast("密码不一致");
      }
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
.van-cell {
  text-align: left;
}
.color {
  padding: 0 10px;
  color: rgb(255, 109, 21);
  border: 2px solid rgb(255, 109, 21);
  border-radius: 5px;
}
.tishi {
  margin: 30px 0 0 30px;
  text-align: left;
  color: rgb(255, 109, 21);
}
.xia {
  border: 0;
  margin-top: 140px;
  width: 690px;
  height: 80px;
  border-radius: 50px;
  font-size: 30px;
  color: white;
  background: linear-gradient(to right, rgb(254, 118, 1), rgb(255, 73, 10));
}
</style>