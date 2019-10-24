<template>
  <div class="box">
    <!-- 头部 -->
    <div class="head">
      <!-- 商品详情 -->
      <div class="tou">
        <div>
        <van-nav-bar title="商品详情" left-arrow  @click-left="onClickLeft">
          <van-icon name="ellipsis" slot="right" />
        </van-nav-bar>
        </div>
        <div class="dian">
          <!-- <span class="radio"></span> -->
          <span class="hong"></span>
        </div>
      </div>
      <!-- 颜色漂亮 -->
      <div class="color">
        <div>
          <p>颜色漂亮156</p>
        </div>
        <div>
          <p>颜色漂亮156</p>
        </div>
        <div>
          <p>颜色漂亮156</p>
        </div>
        <div>
          <p>颜色漂亮156</p>
        </div>
      </div>
      <!-- 颜色漂亮 -->
      <div class="color">
        <div>
          <p>颜色漂亮156</p>
        </div>
        <div>
          <p>颜色漂亮156</p>
        </div>
        <div>
          <p>颜色漂亮156</p>
        </div>
        <div>
          <p>颜色漂亮156</p>
        </div>
      </div>
      <!-- 折叠面板 -->
      <div class="zhedie">
        <van-collapse v-model="activeName" accordion>
  <van-collapse-item title="" name="1">
          <div class="color">
        <div>
          <p>颜色漂亮156</p>
        </div>
        <div>
          <p>颜色漂亮156</p>
        </div>
        <div>
          <p>颜色漂亮156</p>
        </div>
        <div>
          <p>颜色漂亮156</p>
        </div>
      </div>
    </van-collapse-item>
</van-collapse>
      </div>
    </div>
    <!-- 评价 -->
    <div class="allpj">
    <div class="yonghu">
      <div class="touxiang">
        <span>
          <img src="../../assets/xihuan.png" />咖师瓜
        </span>
        <span>2018-07-16</span>
      </div>
      <!-- 描述 -->
      <div class="ping">
        <div class="wenzi">
          <p>
            买来送给姐姐的，颜色超级赞呀，之前生日弟弟送我一支，很喜欢，颜色美美哒，好几个同事和朋友问我什么色号啦。
            买来送给姐姐的，颜色超级赞呀，之前生日弟弟送我一支，很喜欢，颜色美美哒，好几个同事和朋友问我什么色号啦。
          </p>
        </div>
        <div class="tupian">
          <div>
            <p>
              <img src="../../assets/swj.png" />
            </p>
          </div>
          <div>
            <p>
              <img src="../../assets/swj.png" />
            </p>
          </div>
          <div>
            <p>
              <img src="../../assets/swj.png" />
            </p>
          </div>
          <div>
            <p>
              <img src="../../assets/swj.png" />
            </p>
          </div>
        </div>
        <!-- 商品规格 -->
        <div class="guige">
          <span>1件装</span>
          <span>玫瑰酒红色</span>
        </div>
      </div>
    </div>
        <!-- 评价 -->
    <div class="yonghu">
      <div class="touxiang">
        <span>
          <img src="../../assets/xihuan.png" />咖师瓜
        </span>
        <span>2018-07-16</span>
      </div>
      <!-- 描述 -->
      <div class="ping">
        <div class="wenzi">
          <p>
            买来送给姐姐的，颜色超级赞呀，之前生日弟弟送我一支，很喜欢，颜色美美哒，好几个同事和朋友问我什么色号啦。
            买来送给姐姐的，颜色超级赞呀，之前生日弟弟送我一支，很喜欢，颜色美美哒，好几个同事和朋友问我什么色号啦。
          </p>
        </div>
        <div class="tupian">
          <div>
            <p>
              <img src="../../assets/swj.png" />
            </p>
          </div>
          <div>
            <p>
              <img src="../../assets/swj.png" />
            </p>
          </div>
          <div>
            <p>
              <img src="../../assets/swj.png" />
            </p>
          </div>
          <div>
            <p>
              <img src="../../assets/swj.png" />
            </p>
          </div>
        </div>
        <!-- 商品规格 -->
        <div class="guige">
          <span>1件装</span>
          <span>玫瑰酒红色</span>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: '0'
    };
  },
  methods: {
    onClickLeft(){
      this.$router.push('/goodjs')
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #f5f5f5;
  overflow: hidden;
}
.head {
  width: 750px;
  height: 360px;
  background-color: white;
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
.van-icon-ellipsis {
  color: rgb(51, 51, 51);
  font-size: 60px;
}
.color {
  display: flex;
  justify-content: space-around;
  margin-top: 6px;
}
.color p {
  font-size: 24px;
  color: rgb(51, 51, 51);
  border: 2px solid pink;
  background-color: pink;
  border-radius: 10px;
  margin-left: 18px;
  margin-top: 6px;
}
.allpj{
  width: 100%;
  height: 1600px;
}
.yonghu {
  width: 100%;
  height: 500px;
  background-color: rgb(255, 255, 255);
  margin-top:20px;
}
.touxiang {
  /* margin-top: 30px; */
  padding-top:30px;
}
.touxiang span:first-of-type {
  float: left;
  font-size: 24px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Medium";
  margin-left: 30px;
}
.touxiang span:nth-child(2) {
  float: right;
  font-size: 22px;
  color: rgb(153, 153, 153);
  font-family: "PingFang-SC-Regular";
  margin-right: 29px;
}
.touxiang img {
  width: 50px;
  height: 50px;
  vertical-align: middle;
  margin-right: 20px;
}
.touxiang:after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}
.wenzi {
  width: 670px;
  height: 159px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
}
.wenzi p {
  font-size: 24px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Regular";
  display: block;
  text-align: justify;
}
.tupian {
  display: flex;
  justify-content: space-around;
  margin:0px 30px;
}
.tupian img {
  width: 165px;
  height: 165px;
}
.guige {
  text-align: left;
}
.guige span:first-of-type,
.guige span:nth-child(2) {
  margin-left: 31px;
  color: rgb(153, 153, 153);
  font-size: 22px;
  font-family: "PingFang-SC-Regular";
}
.hong{
  display: inline-block;
  width: 17px;
  height: 17px;
  background: rgb(255,101,25);
  border-radius: 50%;
  position: absolute;
  top:25px;
  right: 30px;
  z-index: 2;
}
</style>