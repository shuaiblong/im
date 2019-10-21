<template>
  <div>
    <div class="head">
      <div class="deng">
        <img src="../../assets/qq.png" />
        <span>点击登陆</span>
      </div>
      <div class="shezhi">
        <span>
          <van-icon name="setting-o" />
          <van-icon name="comment-o" />
        </span>
      </div>
      <div class="shoucang">
        <ul>
          <li>
            <p>- -</p>
            <span>收藏</span>
          </li>
          <li>
            <p>- -</p>
            <span>足记</span>
          </li>
          <li>
            <p>- -</p>
            <span>优惠券</span>
          </li>
          <li>
            <p>- -</p>
            <span>积分</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="kong">

    </div>
  <div class="choose">
      <ul>
        <li class="choli">
          <!-- <span @click="likebtn" :class="'change' ?'change':'unchange'">综合</span>
          <i class="iconfont icon-jiantou32"></i> -->
          <van-dropdown-menu active-color="rgb(255,114,18)">
                <van-dropdown-item v-model="value1" :options="option1" />
                </van-dropdown-menu>
      <van-dropdown-item />
        </li>
      </ul>
      <ul class="jg">
        <li class="choli">
          <span @click="likebtn" :class="'unchange' ?'unchange':'change'">价格</span>
          <i class="iconfont icon-jiantou31"></i>
          <i class="iconfont icon-jiantou32"></i>
        </li>
        <li class="sx">
          <span @click="likebtn" :class="'unchange' ?'unchange':'change'">筛选</span>
          <i class="iconfont icon-shaixuan"></i>
        </li>
      </ul>
    </div>
    <!-- <van-dropdown-menu active-color="rgb(255,114,18)">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
    </van-dropdown-menu> -->
  </div>
</template>

<script>
var perDiv = null;
export default {
  data() {
    return {
      categoryIndex: 0,
       value1: 0,
       value2: 'a',
       value3:'one',
      option1: [
        { text: '综合排序', value: 0 },
        { text: '新品优先', value: 1 },
        { text: '评论从高到低', value: 2 }
      ],
      option2: [
        { text: '价格', value: 'a' },
        { text: '从高到低', value: 'b' },
        { text: '从低到高', value: 'c' },
      ],
      option3: [
        { text: '筛选', value: 'one' },
        { text: '好评排序', value: 'two' },
        { text: '销量排序', value: 'three' },
      ]
    }
    
  },
  methods: {
    likebtn(e) {
      e.target.className =
        e.target.className == "change" ? "unchange" : "change";
    }
    //     clickcategory(index){
    // 　　this.categoryIndex = index
    // }
    // change(){
    //   this.$refs.zonghe.style.backgroundColor = "#ff6519";
    // }
  }
};
</script>

<style scoped>
.active {
  background: red;
}
.head {
  width: 100%;
  height: 324px;
  background-color: rgb(255,101,25);
}
.deng {
  float: left;
  margin: 30px 30px;
  position: absolute;
}
img {
  vertical-align: middle;
  width:100px;
  height: 100px;
}
.deng span {
  vertical-align: middle;
  margin-left: 10px;
  font-family: "PingFang-SC-Bold";
  color:#fff;
  font-size: 36px;
  line-height: 11px;
}
.shezhi span {
  float: right;
  margin: 25px 10px;
  font-size: 20px;
  position: relative;
  color: #fff;
}
.van-icon-setting-o {
  margin-right: 18px;
  width:40px;
}
.van-icon, .van-icon::before {
    display: inline-block;
    font-size: 46px !important;
}
.shoucang p {
  color: #f5f5f5;
  font-size: 43px;
}
.shoucang span {
  font-size: 14px;
  font-family: "PingFang-SC-Regular";
}
.shoucang ul {
  /* height: 60px; */
  clear: both;
}
.shoucang li {
  float: left;
  margin-left: 112px;
  margin-top: 100px;
  color: #fff;
  font-size: 25px;
  font-family: "PingFang-SC-Regular";
}
.kong {
  width: 100%;
  height: 194px;
  margin-top: 28px;
  background-color: #fff;
}
.van-dropdown-menu{
  background: transparent;
}
.van-ellipsis {
  /* clear: both; */
  position: absolute;
  float: right;
}
.choose {
  height: 16px;
  width: 100%;
  margin-top: 108px;
}
.choose ul li {
  display: block;
  float: left;
  margin-left: 15px;
  font-size: 26px;
  font-weight: bolder;
}
.icon-jiantou31,
.icon-jiantou32 {
  color: orange;
}
.icon-jiantou31 {
  position: absolute;
  top: -16px;
}
.icon-jiantou32 {
  position: absolute;
  top: -4px;
}
.choli {
  position: relative;
  margin-right: 50px;
}
.icon-shaixuan:before {
  content: "\E667";
  font-size: 48px;
  font-weight: lighter;
  vertical-align: middle;
}
.sx {
  margin-top: -22px;
}
.jg {
  float: right;
  margin-top:30px;
  margin-right:10px;
}
.change {
  color: #ff6519;
}
.unchange {
  color:rgb(51,51,51);
}
.van-dropdown-menu__title::after{
  display: none !important;
}
.van-ellipsis{
  background-color:transparent;
}
</style>