<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-14 14:46:09
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-24 16:37:09
 -->
<template>
  <div class="zhifu">
    <!-- 导航栏 -->
    <van-nav-bar title="确认支付" left-text left-arrow @click-left="onClickLft" />
    <div class="zhi">
      <!-- 剩下时间 -->
      <p class="sheng">剩余支付时间</p>
      <!-- 时间 -->
      <h1 class="h1">14:59</h1>
      <div class="titpic">
        <!-- 标题 -->
        <span class="title">120粒VE+120粒vc康恩贝天然维软天然120</span>
        <!-- 价格 -->
        <span class="pic">￥113.8</span>
      </div>
    </div>
    <p class="xuan">选择支付方式</p>
    <div class="zf">
      <ul>
        <li>
          <p class="fangshi">
            <span class="yu">
              <i class="iconfont icon-yue"></i>&nbsp;&nbsp; 余额
            </span>
            <input type="radio" name="rad" id="rad1" />
            <label for="rad1"></label>
          </p>
        </li>
        <li>
          <p class="fangshi">
            <span class="yu">
              <i class="iconfont icon-weixinzhifu"></i>&nbsp;&nbsp; 微信支付
            </span>
            <input type="radio" name="rad" id="rad2" />
            <label for="rad2"></label>
          </p>
        </li>
        <li>
          <p class="fangshi">
            <span class="yu">
              <i class="iconfont icon-zhifubao"></i>&nbsp;&nbsp; 支付宝
            </span>
            <input type="radio" name="rad" id="rad3" />
            <label for="rad3"></label>
          </p>
        </li>
        <li>
          <p class="fangshi">
            <span class="yu">
              <i class="iconfont icon-tuijianhaoyou"></i>&nbsp;&nbsp; 找好友代付
            </span>
            <input type="radio" name="rad" id="rad4" />
            <label for="rad4"></label>
          </p>
        </li>
      </ul>
    </div>
    <div class="button">
      <router-link to="/paysuccess">
        <button class="qbtn">确认支付</button>
      </router-link>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  methods: {
    onClickLft() {
      Dialog.confirm({
        title: "你确定要放弃支付吗？",
        message: "未支付订单将在不久后自动关闭，请尽快付款哦！",
        confirmButtonText: "继续支付",
        cancelButtonText: "暂时放弃",
        confirmButtonColor: "rgb(255, 109, 21)"
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
          this.$router.push("/dingdan");
        });
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
.zhifu {
  background: #f5f5f5;
  height: 100vh;
}
.zhi {
  width: 710px;
  height: 337px;
  background: #ffffff;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 20px;
}
.zhi .sheng {
  font-size: 24px;
  color: rgb(153, 153, 153);
  padding-top: 80px;
  margin: 0;
}
.zhi .h1 {
  font-size: 45px;
  margin: 0;
  padding: 20px 0 80px 0;
  color: rgb(255, 109, 21);
  border-bottom: 2px solid #f5f5f5;
}
.zhi .titpic {
  height: 80px;
  box-sizing: border-box;
  padding: 0 30px;
}
.zhi .titpic .title {
  display: block;
  width: 490px;
  font-size: 26px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  float: left;
  line-height: 80px;
}
.zhi .titpic .pic {
  float: right;
  font-size: 30px;
  line-height: 80px;
  color: rgb(255, 28, 28);
}
.xuan {
  margin: 20px 30px;
  text-align: left;
  font-size: 26px;
  color: rgb(153, 153, 153);
}
.zf .fangshi {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 25px 30px;
  border-bottom: 2px solid rgb(245, 245, 245);
}
.zf {
  width: 710px;
  background: #ffffff;
  margin: 0 auto;
  box-sizing: border-box;
}
.zf .yu {
  display: inline-flex;
  align-items: center;
  font-size: 28px;
}
.icon-yue {
  font-size: 40px;
  color: rgb(244, 78, 78);
}
.icon-weixinzhifu {
  font-size: 40px;
  color: rgb(0, 172, 28);
}
.icon-zhifubao {
  font-size: 40px;
  color: #1296db;
}
.icon-tuijianhaoyou {
  font-size: 40px;
  color: #ff9f25;
}
input[type="radio"] {
  position: absolute;
  /* 描边 */
  clip: rect(0, 0, 0, 0);
}
label::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  padding: 4px;
  border-radius: 50%;
  background: inherit;
  border: 4px solid #666666;
  background-clip: content-box;
  vertical-align: middle;
}
input[type="radio"]:checked + label::before {
  background-color: #ff6d15;
  border-color: #ff6d15;
}
.qbtn {
  width: 690px;
  height: 100px;
  margin: 0 auto;
  border: 0;
  border-radius: 50px;
  font-size: 30px;
  color: white;
  background: linear-gradient(to right, rgb(255, 114, 18), rgb(255, 161, 40));
}
.button {
  margin-top: 270px;
}
</style>