<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-03 11:03:11
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-16 18:20:22
 -->

<template>
  <!-- 分类页面待完成 -->
  <div class="fl">
    <div class="nav-head">
      <div class="scan">
        <!-- 扫一扫 -->
        <i class="iconfont icon-saoyisao1"></i>
      </div>
      <div class="search">
        <!-- 搜索框 -->
        <div class="bg">
          <img
            class="searchimg"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAECUlEQVRYCe3W10ssWRDA4TXnnHMERVAEffN/91nQBwURc84553C/3QYZes7M9F7u7n3Y7Yeh53RV/arqVNU5eV9fX3/8jif/d0D/ZP73wIUJU60ULi4ujo6Ozs/P7+7unp+f8/PzS0pKysvLa2tr29raGhsbi4uLE1ojlpezuD4+PvBWVlbOzs5eX1/99Xx+fub99cAXFBQUFRXV1dX19/d3d3eXlZUlwWcD8+n+/n5xcXF3d/fx8RGos7OzqampurparL7y4+Hh4fLykmcELLa3tw8PD7e0tBDOjs8IFhOL8/Pzh4eHGIODg729vZWVlawXFhaKkt0o+ghPbHNzkx88GxoaIhzJZMKH9xjp+voadX9/v6KiYmxsTCiosTh44OGKT9JQX19vR46PjzlEsq+vLyaf6kQYrHyWl5cFoXDGx8dRsxcOgCqzEaWlpST39vZWV1dttqJLhaW+B8AvLy8HBwdbW1s0xdrV1ZU9ad/mRN/c3Ozv+/u7XV9bW6upqeHQt0DqS2CA3NzcoNrjnp6e5NTIqCLXVwMDAzZIzgWQCkt9j4Pf3t70q2aVZPr6JFU6ybu4VTWP1bmcK72gVhxMGtieUdaaQZ2ci9Ir5/ZbhV5dXQXl4+CoL2m2trbKW1An5yK/q6qq5NyAM3aC8nHTT09Pt7e3OuSnw40wwrVZNk7FJAIT5aatzVSNQSvpi5pKU2hokaR/tRKP2OiI5nDCFgoatSjbLDCFHZSJgynY2ggfVEi4CKmbI2tBlTg4GoF0MqUoaCV9kQWDSNA2O/2rlThYWel9zacTggoJF1EVqVoxw4MqcTCqatTNp6enEh7UyblI0XlqHgijoaEhKB8H6z+9r7BNOz0d1Mm5KFyzTyM5taLpna4SB0sOHz3UTPmfCJqKobG9va0hDc5Mx1oczDVUx77iWl9fPzk5SXc2+4ri2NjYkGeTy2Uok3AAzMeOjg4nhKBnZmYyDdugRQf50tISMO/dgbLcvwJgFtXXyMiI7bFV09PTDpkgJrYow7Ozsy4hasoVIPvQzXjnMnFQ5+bm3EM4brdGR0fZMhNiPH91joJwikuSrVUo+sK1a2JiQpuky1vJCPYNmyF3IA+eUSCB0iAf3hWR6tU2/PNoAdPKJclNT1MsLCz4xZ6cnAyys4Gx2VJl7Co0l1ww0ZhuUdy+epwr/kYXD2AYHqtqbLquMdj6KhZ3DnAkbf5JXRScO6/gjLbICYmVAFQTyrvCjHwS7s7OThZ2InCEj3ILKUSBWsQQPZhqSj/NsCUJm9Ppcf8NcCxXSf4qgihubNfsqampb/8C19skFhPKyIRYJUaPueqm3qX+2Ygj/+yO8gROLe9/AxxMT3hyBUV/7eL/4F+bzyzWfgAC8HW8uyItggAAAABJRU5ErkJggg=="
            alt
          />
          <input type="text" class="serchput" placeholder="中秋礼物" />
        </div>
      </div>
      <div class="scan">
        <!-- 聊天 -->
        <i class="iconfont icon-liaotian"></i>
      </div>
    </div>
    <div>
      <van-tree-select
        height="100vh"
        :items="items"
        :main-active-index.sync="activeIndex"
        class="fenlei"
      >
        <template slot="content">
          <!-- 轮播图 -->
          <div class="banner">
            <!-- Swiper -->
            <div class="swiper-container2">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(item,index) in lunimg"
                  :key="index"
                  :style="h_bg(item.img)"
                ></div>

                <!-- <div class="swiper-slide" v-for="(item,index) in lunimg" :key="index" >
                  <img :src="item.img" alt="" srcset="">
                
                </div>-->
              </div>
            </div>
          </div>
          <!-- 分类商品li里面 -->
          <ul>
            <li v-if="activeIndex === 0">
              <div class="fen">
                <p class="fenp">美妆彩容</p>
                <ul class="fenul">
                  <li class="fenli" v-for="(item,i) in tuijian" :key="i">
                    <img class="fenimg" :src="item.img" alt />
                    <p class="tj">{{item.title}}</p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </template>
      </van-tree-select>
      <navfoot></navfoot>
    </div>
  </div>
</template>
<script>
// 引入swiper
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import navfoot from "../../components/foot";
export default {
  data() {
    return {
      tuijian: [],
      lunimg: [],
      activeIndex: "",
      items: []
    };
  },
  created() {
    this.axios
      .get("http://192.168.0.110/" + "type/goodsTypeFirst")
      .then(res => {
        // this.lunimg = res.data.fenlei[0].lunboimg;
        // this.tuijian = res.data.fenlei[0].ximg;
        // this.items = res.data.fenlei[0].nav;
        var arr = res.data.data;
        console.log(arr);
        this.items = JSON.parse(
          JSON.stringify(arr).replace(/classifyName/g, "text")
        );
        console.log(this.items);
        this.activeIndex = this.items[0].id;
        console.log(this.activeIndex);
      });
    // this.axios.get("http://192.168.0.110" + "type/goodsTypeSecond",{
    //   params:{
    //     parentId=this.activeIndex
    //   }
    // })
  },
  components: {
    navfoot
  },
  methods: {
    h_bg(imgs) {
      return "background-image: url(" + imgs + ");";
    }
  },
  mounted() {
    /*
    var swiper = new Swiper(".swiper-container2", {
      pagination: ".swiper-pagination",
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }
    });
    */
    var swiper = new Swiper(".swiper-container2", {
      slidesPerView: "auto",
      paginationClickable: true,
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
  }
};
</script>
<style scoped>
.van-sidebar-item {
  background: #eeeeee;
}
.van-sidebar-item--select {
  background: #ffffff;
}
.van-tree-select__nav {
  background: #eeeeee;
}
.fenlei {
  margin-top: 100px;
}
.van-tree-select__content {
  overflow: hidden;
}
.nav-head {
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center !important;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background: #fafafa;
  /* background: red; */
}
.nav-head .scan {
  width: 10%;
  height: 60px;
  overflow: hidden;
}
.bg {
  position: relative;
  background: #ffffff;
  border-radius: 50px;
  height: 60px;
  line-height: 60px;
}
.nav-head .scan .seanimg {
  width: 35px;
}
.nav-head .search {
  width: 80%;

  border-radius: 18px;
  display: flex;
  line-height: 38px;
}
.nav-head .searchimg {
  width: 40px;
  position: absolute;
  left: 11px;
  top: 11px;
}
.nav-head .search .bg {
  width: 100%;
}
.nav-head .search .serchput {
  float: left;
  margin-left: 60px;
  font-size: 30px;
  width: 71%;
  height: 55px;
  border: none;
  border-radius: 18px;
}
::-webkit-input-placeholder {
  text-align: center;
}
.icon-saoyisao1 {
  font-size: 40px;
  line-height: 60px;
}
.icon-liaotian {
  font-size: 40px;
  line-height: 60px;
}
.banner {
  height: 201px;
}
.fl {
  height: 100vh;
  overflow: hidden;
}
.fenul::after {
  content: "";
  display: block;
  clear: both;
}
.fenul .fenli {
  width: 33%;
  float: left;
  box-sizing: border-box;
  padding: 0 10px;
}
.fenimg {
  width: 120px;
  height: 120px;
}
.fenp {
  text-align: left;
  font-weight: 600;
  font-size: 24px;
}
.fen {
  padding: 10px;
  margin-bottom: 200px;
}
/* .swiper-container2 {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
} */
.swiper-container2 {
  width: 100%;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 201px;
}
.van-tree-select__nav {
  flex: 0 195px;
}
.tj {
  font-size: 24px;
  margin: 5px 0;
}
</style>