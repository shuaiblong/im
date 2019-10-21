<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-12 15:29:16
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-12 15:38:30
 -->
<template>
  <div class="box">
    <div class="head">
      <van-nav-bar
        title="发表评价"
        right-text="发布"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div class="miaosu">
      <div class="tou"></div>
      <div class="d">
        <span class="miao">描述相符</span>
        <van-rate v-model="value" :size="18" gutter="25px" color="#ff6d15" />
      </div>
    </div>
    <div class="pingjia">
      <textarea class="input">您对宝贝满意吗？和大家说说你的感受吧！</textarea>
      <div class="tianjia">
        <ul>
          <li>
            <van-uploader :after-read="afterRead" />
            <p>添加图片</p>
          </li>
          <li>
            <van-uploader :after-read="afterRead" />
            <p>添加视频</p>
          </li>
          <!-- <li><i class="iconfont icon-z"></i><p>添加图片</p></li> -->
          <!-- <li><i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-1"></i><p>添加视频</p></li> -->
        </ul>
      </div>
    </div>
    <div class="dian">
      <div class="dianpu">
        <p>
          <i class="iconfont icon-dianpu"></i>
          <span>店铺评分</span>
        </p>
        <span>物流服务</span>
      </div>
      <van-rate v-model="value1" :size="18" gutter="25px" color="#ff6d15" class="fw" />
      <div>
        <span class="wu">商品评价</span>
      </div>
      <van-rate v-model="value2" :size="18" gutter="25px" color="#ff6d15" class="fw" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3,
      value1: 0,
      value2:0,
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("发布");
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  }
};
</script>
<style scoped>
.box{
  overflow: hidden;
}
.head {
  width: 100%;
  height: 128px;
}
.van-nav-bar__arrow {
  color: rgb(51, 51, 51);
  font-size: 38px;
}
.van-ellipsis {
  font-size: 32px;
  color: rgb(51, 51, 51);
}
.van-nav-bar__text {
  color: rgb(255, 109, 21);
  font-family: "PingFang-SC-Regular";
  font-stretch: normal;
  line-height: 11px;
  font-size: 32px;
}
.miaosu:after{
  content:"";
  display: block;
  clear: both;
}
.miaosu {
  width: 100%;
  height: 84px;;
  margin-top:-35px;
  background-color: #fff;
  clear: both;
}
.miaosu .tou {
  width: 50px;
  height: 50px;
  background-color: rgb(153, 153, 153);
  /* display:inline-block; */
  /* position:relative; */
  float: left;
  margin: 12px 13px;
}
.miaosu .miao {
  font-family: "PingFang-SC-Regular";
  /* position: absolute; */
  color: rgb(51, 51, 51);
  font-size: 26px;
  margin: 0px 30px;
}
.miaosu .xing {
  margin-left: 10px;
}
.d {
  float: left;
  margin-top: 18px;
}
.van-rate {
  vertical-align: middle;
}
.input {
  width: 100%;
  height: 460px;
  margin-top: 15px;
  border: 0px;
  font-size: 24px;
  color: rgb(153, 153, 153);
}
.pingjia {
  margin-top:-13px;
}
.pingjia ul {
  position: relative;
}
.pingjia li {
  width: 120px;
  height: 120px;
  border: 1px dashed rgb(153, 153, 153);
  margin: 100px 30px;
  float: left;
  position: relative;
  margin-top: -190px;
}
.pingjia li p {
  color: rgb(153, 153, 153);
  font-size: 22px;
  font-weight: lighter;
  margin: -50px 12px;
  position: relative;
  margin-right: -18px;
}
.icon-z,
.icon-changyongtubiao-xianxingdaochu-zhuanqu-1 {
  color: rgb(153, 153, 153);
  font-size: 45px;
}
.icon-dianpu {
  vertical-align: middle;
  font-size: 40px;
}
.dianpu {
  margin-right: 560px;
}
.dianpu span,
.wu {
  font-size: 26px;
  color: rgb(51, 51, 51);
  margin-left: 16px;
}
.fw {
  margin-top: -60px;
}
.wu {
  margin-right: 560px;
}
.dian {
  background-color: #fff;
}
</style>