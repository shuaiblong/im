<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-09-30 10:23:30
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-15 18:00:48
 -->
<template>
  <!-- 活动标题 -->
  <div class="huodong">
    <div class="htitle">
      <b class="titleb">活动专区</b>
      <span class="titles">好货特卖 全名疯抢</span>
    </div>
    <div class="bg">
      <!-- 横向滚动数据 -->
      <div class="xbanner">
        <ul class="xbannerul">
          <li class="xbannerli" v-for="(item,i) in kouhong" :key="i">
            <img class="liimg" :src="item.img" />
            <p class="lip" v-text="item.title"></p>
            <p class="lisp" v-text="item.price"></p>
          </li>
        </ul>
        <div></div>
      </div>
    </div>
    <div class="ju"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kouhong: []
    };
  },
  created() {
    this.axios.get("../../../public/data/lianxi.json").then(res => {
      console.log(res.data.lunbo[0].img);
      this.kouhong = res.data.lunbo[0].img;
    });
  }
};
</script>
<style scoped>
.htitle {
  text-align: left;
  margin-left: 3%;
  margin-bottom: 5px;
}
.htitle .titleb {
  font-size: 30px;
}
.htitle .titles {
  font-size: 20px;
  color: #999999;
}
.bg {
  width: 750px;
  height: 300px;
  background: url(../../assets/index/ban_bg.png) no-repeat;
  background-size: contain;
  position: relative;
}
.bg::after {
  content: "";
  display: block;
  clear: both;
}
.xbanner {
  position: relative;
  top: 240px;
  margin-left: 4%;
  overflow: auto;
}
.xbanner::after {
  content: "";
  display: block;
  clear: both;
}
.xbanner .xbannerul {
  background: #f5f5f5;
  width: 200%;
}
.xbanner .xbannerul::after {
  content: "";
  display: block;
  clear: both;
}
.xbanner .xbannerul .xbannerli {
  width: 216px;
  float: left;
  border: 1px solid #e5e5e5;
}
.xbanner .xbannerul .xbannerli .liimg {
  height: 180px;
  margin-top: 10%;
}
.xbanner .xbannerul .xbannerli .lip {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #333333;
  margin: 0;
  font-size: 20px;
  margin-left: 20px;
  text-align: left;
}
.xbanner .xbannerul .xbannerli .lisp {
  color: #fe3f3f;
  text-align: left;
  margin: 10px 0 10px 20px;
  font-size: 20px;
}
</style>