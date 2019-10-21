<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-09-29 13:07:02
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-14 17:54:20
 -->
<template>
  <!-- 轮播图 -->
  <div class="bgbanner">
    <van-swipe
      :autoplay="3000"
      :loop="true"
      indicator-color="#fff"
      style="eheight: 260px;width: 90%"
      class="banner"
    >
      <van-swipe-item v-for="(image, index) in SwiperImg" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      SwiperImg: [
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34869/14/3703/113972/5cb953c1E4294d8ea/b73c538710f5c462.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34729/14/3948/120618/5cbeee07Efbe17ec5/d57ddd4fbbbc09e0.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34423/17/5378/97852/5cbecd7bE73730c2f/76e5359d8fb3a1e1.jpg!cr_1125x549_0_72!q70.jpg.dpg"
      ]
    };
  }
};
</script>
<style scoped>
.banner {
  /* width: 98%;
     height: 145px; */
  border-radius: 15px;
  margin: 0 auto;
}
.bgbanner {
  background: #f5f5f5 url(../../assets/index/top_bg.png);
  background-position: 0 -140px;
  background-repeat: no-repeat;
  background-size: 100%;
  margin-top: 100px;
}
.banner img {
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>