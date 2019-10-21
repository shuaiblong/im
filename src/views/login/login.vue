<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-01 09:57:15
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-21 17:08:26
 -->
<template>
  <!-- 登录模块 -->
  <div class="login">
    <van-nav-bar title="登录" left-arrow @click-left="add"></van-nav-bar>
    <div class="logo"></div>
    <div class="loginbox">
      <van-cell-group>
        <!-- 手机号输入框 -->
        <van-field
          v-model="phone"
          @blur="phonefiy"
          type="number"
          autosize
          placeholder="请输入手机号"
          maxlength="11"
        />
        <!-- 密码输入框 -->
        <van-field v-model="password" @blur="passwordfiy" type="password" placeholder="请输入密码" />
      </van-cell-group>
      <!-- 忘记密码 -->
      <p class="forget" @click="forget">忘记密码</p>
      <!-- 登录按钮 -->
      <button class="loginbtn">登录</button>
      <!-- 创建账号 -->
      <p class="loginreg" @click="regist">创建新账号</p>
      <!-- 其他登录 -->
      <div class="other">
        <p class="otlogin">其他登录方式</p>
        <div class="otimg">
          <!-- 微信登录 -->
          <img
            class="wx"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAjCAYAAAANDvOtAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAA8NJREFUWIW92HuIVVUUx/HPXKbMMmbKXhZFKaQVJDq9oJIeVBpJD6ih/iqDqChKov4oCHoQKr0kI6eioDdISUUkZUTZY2qsCEkqUjHJNHPSydCabPpjnWt3zpxzn2f6woVz9l5nnd89e++11t5tPT096qATF+BMTMVEdGA/bMNmrMbH+Ah9+Kcex43QXqP/VMzFJRiTY9OZ/Cbj0qRtA57CE/i1dZlBKaf9ALyIXnRXEZrHkbgXP+B2tT9KXWSJPRercFUB/juwACvEH2iJtNhuvI0jWnWc4jR8hhNacVIp9hw8h71acViFCXgPRzfroCz2YLyEvTNsvhEL52TUCh2LE7vZ+CKj/1C8qsk5XH7o/sRRmsHkxeuS+5ViilyUYbsMN1Tcf44fjVyc03ELHmpUbEkMz9U5/esrhJZZnmP7Yer+FxENsrgT+9ahbxglseqzhp+YX4en2k7JsZ2Rup+ASTm2B+KyOvQNox3n1ehfihvRL0bgyhzbmWLOLhZ/cD72qejfgG9Fktglsl9DtPX09Pxk5Ncriu/EolyKP9GFQ3CYiDrbsUak5021nLVj/CiI3CzS9HLMwes4scYzX+J5PIOBLIMS/i5OIyKWThWjtQbz1BZKRIlHsBbXoy1tUMLGwmTGcF+Ll/Eg9m/Cx3hRAL0l4v8eSvi6RYFl+kTR8j7OLsDfLFFT7En9JbxZgOOduAZLcEwB/spMxhuS5FXCa1qvORfhckzL6BvEQtyHHTnPr8cL2JLRNx13EIp3iHT7aJNCd4sCqDen/zHcllxvzXjPH6Ke2IJjRSxOL6678Wy5kFkk5kczfIIz5Af5gZzrMpv990XXioSRZgzmlAuZ3bgieXGjc26F6llwrog4O8UIppmYtL+CmzA2x8+sylJtk1jFyzClAbHfiz1aHh14soaPu5JfNaakdwrrcbqIcfWyDeMasG+Wjqw9WL/Y3vxVp5Ox+L0wSflszdvdzpJfNqaZJAqW0WZl3vaiu+J6hYiRG0WI6RIh5iBxXtCBdzVRnzbIkraME5lxIpz04R6RPmvRKbYwzdQC9bAOx2dNg6NwIc5Sn1BikS0oRtcIhnAzdmWJXY0PmnA6H5+2oiqHeZLolLfAmmEQFyt2sT2tIv4WKZZImzPwTot+hvAArkuuUbxYYgs+U6TO35r00Su+6FBl42iIlbzkcVFn3CoOR4aq2A+IQ5Hyme5JIiQOo5CjyCpsF7XsQnFW0CUKl04h/mdxYrlKFFPT8LCIROeLYv5/E1tJv0ge1fhKFFOzcVy681/CMMCid838IAAAAABJRU5ErkJggg=="
            alt
          />
          <!-- qq登录 -->

          <img
            class="qq"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAlCAYAAADMdYB5AAACS0lEQVRYhcXYO2sUURgG4GfHIDFu4w2iUdOokVQKSVAUjURtFEQQbU2poCKm2TT+AEHE2GynjTaCf0BEFCFeELXQxioaRRSjSLxUsThnwmbZXXaSneSFLWZn5vsezrJzzpxCuVyWMftwAgPYhLX4ho94irt4lKVgW4Zrd+IqBmuc2xA/AziHh7iEl80UTpoEXMTzOoBaGcSzeF9LEFeEEVjWJCDNsnjflYUiTmMkY/PqjMQ680J0YmyBgDRjWD8fxCiKLUIUUcqK6MBwiwBphmPdphGHtG4U0hRxMAtib4sBDevWQ2zNCbEtC2JNToiadWshutCTE6IHG5tBXMO6nBDrYv2GiOU4mhMgzZHYpy6iE+05I9pjn7qIn5jJGTGDH40QgzkD0hyoh+jFbRRyBhRin95qRBtuqvNszyEduBX7ziIuoH+RAGn6xJVXIkwso4sMSFNCMcFJrF4ixCqcSnBsiQBpjifCUn4psyMRXmDSfFukxpV91ieYigczOIVPOQM+xT7pk/lrgsfxixIe4HrOiBuxTyn2HS+Uy+UuYTn+Il7UgXfYnAPgA7bjdzzuw+cEkxUA8YKzWj+RzeBMBUDsO1lvefcFEy1GTOBrrRO1EJeFl9nuFiO6MR7rN0T0x4vymkkLsf6ceaoaMZQjoBIy1AjxPWPBf8KGyN+M901VHlQj7ghbPs3kDXYJq6Td5v7DGuW1sKiZTfV20S9hiXde2JfqxUr8EUbpPZ7gvjAC6d/4lfA778dh7MEWYXZegWm8xT3hYThd2fQ/AwBjjYbCVrEAAAAASUVORK5CYII="
            alt
          />
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
  margin: 1% 0 0 0;
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
  background-color: #ff7212;
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
  width: 10%;
  margin-right: 6%;
  padding: 9px;
  border: 1px solid #969799;
  border-radius: 50%;
}
.qq {
  width: 8%;
  margin-left: 6%;
  border: 1px solid #969799;
  padding: 9px;
  border-radius: 50%;
}
.otimg {
  margin-top: 5%;
}
.van-icon-arrow-left {
  width: 21px;
  height: 35px;
}
</style>