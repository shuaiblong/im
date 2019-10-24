<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-01 09:57:15
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-24 16:16:44
 -->
<template>
  <!-- 登录模块 -->
  <div class="login">
    <van-nav-bar title="登录" left-arrow @click-left="add"></van-nav-bar>
    <div class="logo"></div>
    <div class="loginbox">
      <!-- 账号 -->
      <div>
        <input
          maxlength="11"
          v-model="phone"
          @blur="phonefiy"
          type="number"
          placeholder="请输入手机号"
          class="zhang"
        />
      </div>
      <!-- 密码 -->
      <div>
        <input
          v-model="password"
          @blur="passwordfiy"
          type="password"
          placeholder="密码"
          class="zhang"
        />
      </div>
      <!-- 忘记密码 -->
      <p class="forget" @click="forget">忘记密码</p>
      <!-- 登录按钮 -->
      <button class="loginbtn" @click="btnlog">登录</button>
      <!-- 创建账号 -->
      <p class="loginreg" @click="regist">创建新账号</p>
      <!-- 其他登录 -->
      <div class="other">
        <p class="otlogin">其他登录方式</p>
        <div class="otimg">
          <!-- 微信登录 -->
          <img class="wx" src="~@/assets/weixin.png" alt />
          <!-- qq登录 -->

          <img class="qq" src="~@/assets/qq.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //   手机号
      phone: "",
      //   密码
      password: ""
    };
  },
  methods: {
    //   返回上一页
    add() {
      this.$router.go("-1");
    },
    // 手机号正则表达式
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
    regist() {
      this.$router.push("/regist");
    },
    forget() {
      this.$router.push("/forget");
    },
    // 登录按钮
    btnlog() {
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
.login {
  background-color: #fff;
  height: 100vh;
}
.van-nav-bar__arrow {
  color: #333333;
}
.van-icon-arrow-left:before {
  content: "\F008";
  font-weight: 600;
}
.van-nav-bar__title {
  font-size: 30px;
  font-weight: 600;
}
.logo {
  width: 100%;
  height: 23%;
  background: url(../../assets/login/jdy.png) no-repeat center;
}
.loginbox {
  width: 80%;
  margin: 0 auto;
  padding-top: 10%;
  font-size: 14px;
}
.van-cell {
  font-size: 32px;
}
.forget {
  margin: 25px 0 0 0;
  text-align: right;
  font-size: 26px;
  color: #ff7212;
}
.loginbtn {
  margin-top: 8%;
  width: 546px;
  height: 84px;
  padding: 0;
  border-radius: 50px;
  background: linear-gradient(to right, rgb(255, 114, 18), rgb(255, 161, 40));
  color: #fff;
  font-size: 32px;
  border: 0;
}
.loginreg {
  margin-top: 6%;
  color: #ff7212;
  font-size: 28px;
}
.other {
  margin-top: 20%;
}
.otlogin {
  font-size: 26px;
  color: #969799;
}
.wx {
  margin-right: 6%;
  width: 74px;
}
.qq {
  width: 74px;
  margin-left: 6%;
}
.otimg {
  margin-top: 5%;
}
.van-icon-arrow-left {
  width: 21px;
  height: 35px;
}
.zhang {
  width: 550px;
  border: 0;
  border-bottom: 2px solid rgb(238, 238, 238);
  font-size: 32px;
  padding: 30px 0;
  color: rgb(255, 114, 18);
}
input::-webkit-input-placeholder {
  color: rgb(153, 153, 153);
}
</style>