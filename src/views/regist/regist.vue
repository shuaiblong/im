<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-01 15:46:42
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-10 18:33:18
 -->
<template>
    <div class="regist">
         <!-- 注册导航栏 -->
         <van-nav-bar title="注册" left-arrow @click-left="add"></van-nav-bar>
         <div class="regbox">
             <h1 class="regh1">请填写以下注册信息</h1>
             <ul class="regul">
                 <li class="regli">
                     <div class="regtitle">
                       <!-- 手机图 -->
                         <img class="regimg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAADz0lEQVRYCeWXS0sbURTHb57GGAhFU5SINir4KrEoAUUwQTFaU/ErCFmJuHCVXdC1H0B3ln6AiiCiogs1Khp84gsx2ZSIWDEmatS87D9OG8PMnUmapGTRuwgzZ87//O49d+bmHNHLywvJxRDnAhpj5gwsFV4xNiIajT4+Pj49PUUiEWFn5qlEIpHL5UqlEhcikYhPkgR8fX29uLi4sbFxfHzs8/mSvhBisVilUlVWVra0tJhMpoqKCj6wiC8W7G63e2JiYm1tLRgM8un57FKptLq6enh4uKGhgbpuXjCodrv99PS0vLy8u7u7s7OzpKQEC+IjMXbsy+3t7fLy8vT09Pn5OSQ2m625uZnCxsq4A9s5Ojra1NTU19d3cHAQDoe5PgIWyEEdGBhABKvVGggEuM6Ea4Ll6OjIbDa3tbXNz89jEVQfYSNUZ2dnHR0dBoNhZWWF60xP3e7u7t3dnV6vb2xspGRJON2vT6EqKytrb2/HDBwOB1dBB19dXYVCIa1Wq1aruZoULTKZrKqqCs4ej4croYPxGiM5eXl5eDm5mhQtWHR+fj6ccQZwJXRw3C+9PDNyYW0ScHwGWb+gg5FkHHj4zTovHpC+hV1dXThv8THE/bJ+QQfXvo6swxID0lOd6PGPrulgnHk4QFL8H0xvZnTw1tbW2NjY9vZ2ekFTUdHB6+vrc3Nzm5ubqYRIz4cOxt8Rzlj8phc0FRUdnIoyQ5//D0w/QJg0LiwsHB4eZpLSm5sbPrkQ+Ofr4FNmaBcCo0RFmZcJYG9vb2pqihpBCIyq2GKxUGUpGvFN8oFz9lYLrVhoWdEIcTmI8ytRq4jBSjR6Ivq7NdDBTOHO1KT0Csb7g3y3Eb+bFClJ2EM+fyNyFWuikCPVMFIj0KdZUFCACuTh4eH5+ZkV7vdtMEDAZobPTaIhrhuoaLdgRzfFfUoH63Q61D0nJycXFxdcTcyi0pBaM5EpiExJdBYijVWTrIEek/mbqa+vZz3CLT3VaD0KCwtdLtfs7Ozg4CAlV6oi8sVOXCaiVJAPRiJhV2fIM+r4nZ0dLAAdCRcsGRkZ4VrR3aIKcDqdaNoUCkVpaSmqc+DfZoDGV/mOaD+R9x9ju/unD2b2FXu0tLQ0Pj5+f3/f29uLbxIbx6LwdosQo0fFV4iWoqamprW1VaPRJO0WAfb7/cgwigjsMXrMoaGh4uJiFhW3vGCE8Hq9MzMzk5OTKIO4SmELeoienp7+/n5Q3/KUoOEFMz6Y9eXl5erq6v7+PubBfB4JcvYlGHiH6+rqjEYjGmuBDigJmB04e/e/ALwiMgq7IQlwAAAAAElFTkSuQmCC" alt="">
                         <span class="regs">手机</span>
                     </div>
                     <!-- 手机输入框 -->
                     <van-field
                        v-model="phone"
                        @blur="phonefiy"
                        type="number"
                        autosize
                        placeholder="请输入您的手机号"
                        maxlength="11"
                       
                        />
                 </li>
                 <li class="regli">
                     <div class="regtitle">
                       <!-- 验证码图 -->
                         <img class="regimg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAD0ElEQVRYCeVXS0tbQRSem4cmGhsVQ9qYmlYEiVoCEo2iuBFxU1CQgtBdW6RQf4TQnQiCCGK6iwulC4tCtyq4UyRodGGLj1pEGk2N5GnMo1+4Gm7uzE1umhYLvZvMnPt955tzzkzuHC6VSpH7eBT3IZrWVOUWRj78fv/GxsbOzg4GyWQyN16pVFZUVDQ2NnZ0dBiNRo7jpPCSwpAMhUIrKytOp9Pn88XjcZlFgRjk9Xr94ODg8PBwZWUlU56TchcOh10u1/z8fCQSqa+vb21tra6uVijylAbegsEg0rO3t4fxwMDAyMhITU0NI268ph+kdHl5ubu7u7Ozc2pq6uTkBPIw0kiRBZhYLHZ2djY3N9fX1wf69PT0zc2NCIYpoU2wXFxcDA0NtbW1jY+Py9GjnYC1uLjocDi6uroODw9pADt1brf7/PzcYrGgTswKMVKXbQKrt7e3paUlGo2ur69nv0zP2ML7+/vIbXNzs9lspjkyLeXl5SgWwNvb2zSFLYz9jFzhYGg0Gpoj04KdiP0IcCAQoCns44SSAAqmOM+JOAl4SSpBO0pblGqiMxCFkn8LLk9HDDSeLUzjbi3f3cT5glxTEfD/E3oTefORPLJK0gUv2KkWALKHiImTpiBWAOQ9BUZstpH3XwmR+q5wuZaVvaAChfHfy92WMNtPwTPpvBXsqjDCvQnLTnX6gEmVlo4VFZH8IPJo2cKez2ThHbkO0iJpi1BFqyevF8iTdjbyzio71fEoYf0P3PkR/CYTJB4TzNlD2RE/e06eOtjawnChgm3/wMhWE1hlC6s1pOqxgFjsUHaqixUS8/8/Ydk15lP14wtxvSIRvzhx/P7CJnj5gVTJujsUKIyP8c9vJBZmC+MghXx/R9hiJ28/iY9p5jipteShrI8x1l1gxDhU0P4Tzz+2q0tLS3FdwtUcnctvh4erFq6qoJeUlNBO2BEbDAa1Wo2G4OrqiubItGDRx8fHAJtMJprCFm5qaiorK/N4PLhg8zdOmpnbAhZagrW1NcDa2xlfKrawzWYDGuFOTk4eHBww76c5hKF6eno6MTHh9XqtVit/rRfhlWNjYyITpihwbW0tGpmjo6Pd3V10Xej4kAP+nkzjMxYsEctdXV2dnZ3d2toCa3R0tKGhgSZKtqlwgdZjZmYGPSf8Yrvl7VF5eRCx0EQigfYHqj09PWiXMyvLDCSFeQT219LS0ubmJjo+NL5y6q3Vauvq6ux2e39/P/ZKRkk0yCMMJSz/8vIS/Q/f5or49FSlUul0OnRN/JmkAbwlj7AUrXg7e1cX7zevh18C3BiZYh0ajwAAAABJRU5ErkJggg==" alt="">
                         <span class="regs">验证码</span>
                     </div>
                     <!-- 验证码框 -->
                     <van-field
                        type="number"
                        placeholder="请输入您收到的验证码"
                        />
                        <!-- 发送验证码 -->
                        <button v-if="btnTile" :disabled="disabled" @click="getVC" class="regf">{{btnTitle}}</button>
                 </li>
                 <li class="regli">
                     <div class="regtitle">
                         <img class="regimg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAFaElEQVRYCcVYWUhkVxCtbvfdEdcZR8XRVonGDTUKGlc0GjEhGRBBv8SI+TAf5jcRAoogYgL5Uomoif5k0CiBJGoUF1xwiUtkEuISHHdxb7fWznm+oef53m19DybMpZF761XVuVW3qm5dVXq9nt7EUL8JUA7TVCkwPHRycrK1tbW7u3t5efngZri4uJiYmChSpQwYqNPT052dncPDwzs7O0CysLDw9/fPysrKyMiws7OTj62Sf8bX19ejo6MVFRWbm5vAA4y5ufn+/v7p6SmWmZmZRUVFTk5OcrEBLGcAdXZ2NicnJyYmpri4eHx8/OLiAsT19fX6+vqUlJTIyMja2lpQ5GgDD8nk02q11dXVUVFRhYWFS0tLQgDsoKmpKTo6Oi0tbXl5WaZCuVENl46MjKjV6vz8fG9vb5VKZXCpmZkZDhh7Ojw8HBgYMNDvnsgFPjs729jYAHB4eLgQldfu6OiIENPpdCsrK3fjGb7KBb66ukIQAdLW1tYgbJiYmpr6+Pi4urq6ubkZiHdPlKUTdEnN5YnIKMTX/whszA4Y7enpaeyrlH5PHh8dHU1OTvb19U1MTKytrUHeyspKqsVAQRA4ODgEBQUlJSXBAahohk+iiVFgZAWQWlpaurq6cLoisXuXqC1IsJKSEgQd+3S4XGaN7e3tqqqqwcFBa2vr2NhY5Ki7u/u9BRn5jcTr7+/v6enZ29sLDQ0tKyvTaDQMbGa+I4Zramrgq/T0dKQm8oTJZowIcZT0goICaCgtLYXDpJzsyoUChChFdWxtbRUWKam8MQqkxsbG4uLioGRqakrKxs5jXAZwVFhYWGJiIsNLrKMR0SAVEhKSmpoKb3V3d4u+YskGRulHBfby8lJw20h0I74CAwNBXlxcPDg4QEEVsrALCAoknGNpaYk6LOTm5gjGCy2tzdE/Q3R2RI9CyCeKHB6SWtwIwGi+zMEGRKjIc2xgHgysIm4Odf8F9X5NYz+Q7uyGTUVuGnr/SwpKI9Ut/wllpQbcBczD3/p7fUW/f0OjLaicpEkkezf6e4A2n9PPX5GdKz0Ov8VMBIthK7OOKgTe+ouGvyMzS8r9lt7O5mDggB/L6HkPjbVwppvbCLETEhKam5uZwLecI5Rhz5fHSX9NjyM4c2E0fg88KewDMjHj7NYeiKRQcHB5I1ZEdCwVAl9dciosbEktEMQSp4tTwJ5kD4G8HJmHwbgYaWWc1hdesmv3aeFX0l2QkzdZKugyFZ7xo2DyiqB/J+jZ5xTxlAuuP3+hhd/Iyp4CU6XAKJZzc3PoEaTXlEKLETtPa8g/gbO48wv6/hOaekamFpT8GYV9KEonuAR1HrW6srJS6k2FFiOaPN6ij6ppppNmfqIXs1wKJZdSUKq0gADs/Pwc1UNUs/hNKASGELBdnlDip6Q7p9U/yMmLgt+T2io1UURhuxqNBPj4e0kk8HKJ/MGPG3pjqCi6uB/BwWu7YX71hw2M5wlSEH0PivYrXoUz7BtXHISYbyo2sJ+fH7J+fn5+dXXVKBwsVplwkWVk4FE5NDSEj+hDpCxsYHTtSAB05+3t7fCYVIyj+MXTO/kU8THzK6TQ/SCXYEB8fLyUx6S8vFxKRSuJ4o52AEYjFz08PPAehPOFFw7Zu5LmXXJ+Ijxj4OHmR7/W0dHR0NCAB3ReXl5ycrL0mI12mXilNTY2trW14Zh9fX3RPaEpuAUs3S93WeuPj49nZmawY8yzs7PxtHR2dpbyGgXmVfT29tbV1eHxz/d7UnkpBZuDb9Bd402bm5uL/xgwt2sUmNcIeEQm3omwAH0rllIkIQUYNjY2AQEB6IhxQExInv8eYKHS1ztnR/XrxWBq+w8y8H6K/xXrQQAAAABJRU5ErkJggg==" alt="">
                         <span class="regs">密码</span>
                     </div>
                     <van-field v-model="password" @blur="passwordfiy" type="password" placeholder="请设置您的密码" />
                 </li>
             </ul>
             <button class="regbtn">登录</button>
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
      password: "",
    //  发送验证码
      btnTitle:"发送验证码",
    // 发送验证码消失
      btnTile:true,
      disabled:false
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
          this.$toast("密码格式不正确！6位以上字母和数组组合");
        }
      }
    },
    // 获取验证码方法
    getVC(){
      if(this.valiphone){
        // 发送网络请求
        this.valiBtn();
      }
    },
    valiphone(){
      // 验证手机号码
      if(!this.phone){
        this.$toast("手机号格式不能为空！");
        return false;
      }else if(!/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(this.phone)){
        this.$toast("请填写正确的手机号码");
        return false;
      }else{
        return true;
      }
    },
    valiBtn(){
      let time=59;
      let timer=setInterval(() => {
        if(time == 0){
          clearInterval(timer);
          this.btnTitle = "获取验证码";
          this.disabled = false;
        }else{
          // 倒计时
          this.btnTitle = time + "秒后重试";
          this.disabled = true;
          time--;
        }
      },1000);
    }
  }
};
</script>
<style scoped>
.regist{
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
.regbox{
    width: 85%;
    margin: 0 auto;
    padding-top: 5%;
    text-align: left;
    overflow: hidden;
}
.regh1{
    font-size: 50px;
    color: #333;
}
.regli{
    margin: 10% 0;
    position: relative;
}
.regimg{
    width: 10%;
}
.regtitle{
    display: flex;
    align-items: center;
    color:#333333;
}
.van-cell{
    padding: 30px 36px;
    border-bottom: 1px solid #ddd;
    font-size: 30px;
}
.van-cell__value--alone{
    font-size: 15px;
}
.regbtn{
    display: block;
    margin: 0 auto;
    width: 228px;
    height: 84px;
    padding: 10px 0;
    border-radius: 50px;
    font-size: 32px;
    background-color: #ff7212;
    color: #fff; 
    border:1px solid #ff7212;
}
.regf{
  position: absolute;
  right: 0;
  bottom: 18px;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 26px;
  color: #ff7212;
  border: 1px solid #eee;
  background: #fff;
}
.regs{
  font-size: 30px;
}
</style>