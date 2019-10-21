<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-08 14:27:15
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-15 09:57:00
 -->
<template>
  <!-- 头部导航栏 -->
  <div class="shopbox">
    <van-nav-bar
      title="购物车"
      left-text
      right-text="管理"
      left-arrow
      @click-left="onClickLft"
      @click-right="onClickRight"
    />
    <div>
      <!-- 购物车图 -->
      <img src="../../assets/shopcar.png" />
      <!-- 下面字体 -->
      <p class="kong">购物车暂无商品哦</p>
      <p class="lao">再忙,也要记得买点什么东西犒劳下自己</p>
      <!-- 首页跳转按钮 -->
      <p class="btnshou" @click="shou">去首页逛逛把</p>
    </div>
    <div class="shoplist">
      <!-- 猜你喜欢 -->
      <div class="xihuan">
        <img src="../../assets/xihuan.png" class="caiimg" />
        <span class="cai">猜你喜欢</span>
      </div>
      <!-- 商品模块 -->
      <div class="shop" v-for="(item,i) in shopcar" :key="i">
        <!-- 商品图 -->
        <img :src="item.img" class="shopimg" />
        <!-- 商品标题 -->
        <p class="shoptitle" v-text="item.title"></p>
        <!-- 商品价格 -->
        <p class="shoppic">
          <!-- 正常价格 -->
          <span class="span1" v-text="item.pic"></span>
          <!-- 正常价格后两位 -->
          <span class="span2">.80</span>
          <!-- 删除价格 -->
          <s class="span3" v-text="item.spic"></s>
        </p>
      </div>
    </div>
    <navfoot></navfoot>
  </div>
</template>
<script>
// 引入底部导航栏
import navfoot from "../../components/foot";
export default {
  data() {
    return {
      shopcar: []
    };
  },
  created() {
    this.axios
      .get("http://127.0.0.1:5500/" + "../../../public/data/shopcar.json")
      .then(res => {
        this.shopcar = res.data.shopcar;
        console.log(res.data.shopcar);
      })
      .catch(err => {
        console.log(err);
      });
  },
  components: {
    navfoot
  },
  methods: {
    shou() {
      this.$router.push("/");
    },
    onClickLft() {
      this.$toast("返回");
    },
    onClickRight() {
      this.$toast("管理");
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
.shoplist::after {
  content: "";
  display: block;
  clear: both;
}
.shoplist {
  background: #f5f5f5;
  margin-bottom: 100px;
}
.shopimg {
  width: 100%;
  height: 340px;
}
.shoppic {
  color: rgb(255, 28, 28);
  text-align: left;
  margin: 0 0 0 40px;
}
.shop {
  width: 47%;
  float: left;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  background: #ffffff;
}
.shoptitle {
  font-size: 28px;
  margin: 5px 30px;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.span1 {
  font-size: 30px;
}
.span2 {
  font-size: 20px;
}
.span3 {
  margin-left: 10px;
  font-size: 24px;
  color: rgb(153, 153, 153);
}
.cai {
  margin-left: 10px;
  font-size: 24px;
}
.caiimg {
  width: 32px;
  height: 32px;
}
.xihuan {
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.kong {
  margin: 16px 0;
  font-size: 24px;
  color: rgb(51, 51, 51);
}
.lao {
  margin: 16px 0;
  font-size: 24px;
  color: rgb(153, 153, 153);
}
.btnshou {
  margin: 20px 0 40px 0;
  color: rgb(255, 98, 26);
  font-size: 28px;
  border: 1px solid rgb(255, 98, 26);
  display: inline-block;
  padding: 12px 24px;
  border-radius: 50px;
}
</style>