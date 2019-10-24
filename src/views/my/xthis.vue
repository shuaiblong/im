<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-13 15:54:46
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-24 17:17:21
 -->
<template>
  <div class="box">
    <div class="goods">
      <div class="item" v-for="x in 4" :key="x" @click="enter">
        <img src="../../assets/index/g.png" alt />
        <p>连帽卫衣男士19年秋冬卡通印花新款棉质连帽卫衣男士19年秋冬卡通印花新款棉质</p>
        <div class="price">
          <span>￥</span>
          <span>105</span>
          <span>.80</span>
          <span class="yj">￥199</span>
          <span class="by">包邮</span>
          <span class="mj">满减</span>
        </div>
        <div class="gou">1.8万人付款 99%好评</div>
        <div class="dian">
          服饰专营店
          <van-icon name="arrow" class="jt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      option1: [
        { text: "综合", value: 0 },
        { text: "新品优先", value: 1 },
        { text: "评论从高到低", value: 2 }
      ]
    };
  },
  methods: {
    //   返回按钮
    enter() {
      this.$router.push("/goodjs");
    }
  }
};
</script>

<style scoped>
.goods img {
  display: block;
  width: 349px;
  height: 340px;
}
.goods {
  width: 96%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  flex-wrap: wrap;
}
.item {
  flex-shrink: 0;
  margin: 20px 2px;
  width: 350px;
  margin-top: 10px;
}
.goods p {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: rgb(51, 51, 51);
}
.price {
  margin: 5px 5px;
  text-align: left;
  /* color: rgb(255,28,28); */
  font-style: normal;
}
span:first-of-type,
span:nth-of-type(3) {
  font-size: 20px;
  color: rgb(255, 28, 28);
}
span:nth-of-type(2) {
  font-size: 30px;
  font-weight: 0;
  color: rgb(255, 28, 28);
}
/* span:nth-of-type(3) {
  font-size: 20px;
  color:rgb(255,28,28);
} */
span:nth-of-type(4) {
  font-size: 24px;
  color: rgb(153, 153, 153);
  text-decoration: line-through;
}
span:nth-of-type(5),
span:nth-of-type(6) {
  width: 38px;
  height: 20px;
  font-size: 20px;
  color: rgb(255, 101, 25);
  margin-left: 10px;
  border: 2px solid rgb(255, 101, 25);
  border-radius: 5px;
}
/* .yj {
  margin: 5px 5px;
  text-align: left;
  text-decoration: line-through;
  color: #999999;
} */
.gou,
.dian {
  color: rgb(153, 153, 153);
  font-size: 22px;
  text-align: left;
}
.jt {
  color: rgb(153, 153, 153);
  font-size: 10px;
  /* display: block; */
  /* margin-top: -26px; */
  /* margin-left: 120px; */
  vertical-align: middle;
  margin-top: -6px;
}
</style>