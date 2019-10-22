<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-02 11:18:09
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-10 18:28:50
 -->
<template>
  <div class="forlist">
    <!-- 注册导航栏 -->
    <van-nav-bar title="修改密码" left-arrow @click-left="add"></van-nav-bar>
    <div class="forbox">
      <h1 class="forh1">输入短信验证码</h1>
      <p class="forp">验证码已发送至你的手机</p>
      <van-password-input :value="value" :focused="showKeyboard" @focus="showKeyboard = true" />
      <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
      />
      <div v-if="btnTile" @click="getVC" class="regf">{{btnTitle}}</div>
      <div class="div1">
        <input type="button" value="下一步" class="next" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      showKeyboard: true,
      //  发送验证码
      btnTile: true,
      btnTitle: "发送验证码"
    };
  },

  methods: {
    //   返回上一页
    add() {
      this.$router.go("-1");
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    // 获取验证码方法
    getVC() {
      // 发送网络请求
      this.valiBtn();
    },
    valiBtn() {
      let time = 59;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.btnTitle = "获取验证码";
          this.disabled = false;
        } else {
          // 倒计时
          this.btnTitle = time + "秒后重试";
          this.disabled = true;
          time--;
        }
      }, 1000);
    }
  }
};
</script>
<style scoped>
.forlist {
  background: #fff;
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
.forbox {
  width: 85%;
  margin: 0 auto;
  padding-top: 5%;
  text-align: left;
  overflow: hidden;
}
.forh1 {
  font-size: 50px;
  color: #333;
}
.forp {
  font-size: 28px;
}
.van-hairline--surround {
  border: 1px solid #999999;
  border-left: 0;
  margin-top: 10%;
}
.van-hairline--surround li {
  border-left: 1px solid #999999;
}
.regf {
  margin: 5% 0 0 5%;
  font-size: 28px;
  color: rgb(255, 114, 18);
}
.div1 {
  margin-top: 11%;
  text-align: center;
}
.next {
  background: #fff;
  color: rgb(255, 114, 18);
  font-size: 32px;
  padding: 0.5rem 1.3125rem;
  border-radius: 25px;
  border: 0;
}
</style>