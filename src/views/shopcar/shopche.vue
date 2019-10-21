<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-11 11:38:44
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-21 09:01:55
 -->
<template>
  <div class="shopche">
    <van-nav-bar
      title="购物车"
      left-text
      right-text="管理"
      left-arrow
      @click-left="onClickLft"
      @click-right="onClickRight"
    />
    <div class="box">
      <div class="shopbg" v-for="(item,i) in shop" :key="i">
        <div class="navcar">
          <div v-show="item.dian" class="head">
            <p class="ji">
              <!-- 商铺全选按钮 -->
              <input type="checkbox" name class="tui-checkbox" />
              <!-- 商铺名称 -->
              <span class="di">
                {{item.dian}}
                <van-icon name="arrow" />
              </span>
            </p>
            <!-- 领取优惠券 -->
            <span class="ling">
              领劵
              <van-icon name="arrow" />
            </span>
          </div>
          <van-swipe-cell>
            <div class="shopintr">
              <div class="btnimg">
                <!-- 商品选择按钮 -->
                <input type="checkbox" name class="tui-checkbox" />
                <!-- 商品图片 -->
                <img
                  src="//img10.360buyimg.com/n1/jfs/t1/43364/36/13104/227599/5d64d176E92010aef/5a5c3bfe9d6ccc9e.jpg"
                  class="nai"
                />
              </div>
              <div class="naileft">
                <!-- 商品标题 -->
                <p class="naititle">{{item.title}}</p>
                <!-- 商品个数 -->
                <span class="number">
                  <van-stepper v-model="item.num" input-width="35px" button-size="26px" />
                </span>
                <!-- 商品价格 -->
                <p class="naipic">
                  <span>￥</span>
                  <!-- 商品价格 -->
                  <span class="picbig">{{item.pic*item.num}}</span>
                  <!-- <span>.80</span> -->
                  <!-- 消除的价格 -->
                  <s class="xie">￥{{item.spic}}</s>
                </p>
              </div>
            </div>

            <template slot="right">
              <van-button square color="#999999" text="相似" />
              <van-button square color="#ffa128" text="收藏" />
              <van-button square type="danger" text="删除" />
            </template>
          </van-swipe-cell>
        </div>
      </div>
    </div>
    <navfoot></navfoot>
  </div>
</template>
<script>
import navfoot from "../../components/foot";
export default {
  data() {
    return {
      pic: 200,
      shop: []
    };
  },
  methods: {
    shou() {
      this.$router.push("/");
    },
    onClickLft() {
      this.$router.go("-1");
    },
    onClickRight() {
      this.$toast("管理");
    }
  },
  components: {
    navfoot
  },
  created() {
    this.axios
      .get("../../../public/data/shopcar.json")
      .then(res => {
        this.shop = res.data.shopche;
        console.log(res.data);
      })
      .catch(err => {
        consoloe.log(err);
      });
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
.tui-checkbox:checked {
  background: #ff6d15;
  border: solid 1px #ff6d15;
}
.tui-checkbox {
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  /* border: 0; */
  outline: none;
  border: solid 1px rgb(153, 153, 153);
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
.tui-checkbox:checked::after {
  content: "";
  top: 8px;
  left: 8px;
  position: absolute;
  background: transparent;
  border: #fff solid 2px;
  border-top: none;
  border-right: none;
  height: 6px;
  width: 10px;
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.navcar {
  text-align: left;
  width: 90%;
  margin: 0 auto;
  color: #333333;
  padding: 0;
  background: #ffffff;
}
.ji {
  font-size: 26px;
  display: inline-flex;
  align-items: center;
  margin: 0;
}
.ling {
  font-size: 26px;
  float: right;
  display: inline-flex;
  align-items: center;
  color: #ff1c1c;
}
.di {
  display: inline-flex;
  align-items: center;
  margin-left: 20px;
}
.shopintr {
  display: flex;
  margin-top: 40px;
  padding-bottom: 30px;
  border-bottom: 3px solid #f9f9f9;
}
.nai {
  width: 160px;
  height: 160px;
  margin: 0 20px;
}
.btnimg {
  display: inline-flex;
  align-items: center;
}
.naititle {
  font-size: 24px;
  margin: 0;
  color: #6e6e6e;
}
.naileft {
  position: relative;
}
.number {
  position: absolute;
  bottom: 0;
  right: 0;
}
.naipic {
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 24px;
  color: #ff1c1c;
  margin: 0;
}
.picbig {
  font-size: 32px;
}
.xie {
  color: #a2a2a2;
}
.van-button {
  height: 160px;
}
.naititle {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  /*设置省略号在容器第四行文本后*/
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.head {
  margin-top: 40px;
}
.box {
  margin-bottom: 150px;
}
.shopche {
  background: #f5f5f5;
}
.shopbg {
  background: #ffffff;
  padding: 10px 0;
}
</style>