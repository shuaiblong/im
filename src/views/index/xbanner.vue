<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-09-29 17:06:00
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-15 14:14:27
 -->
<template>
  <!-- 横向滚动后期v-for更改删除多余 -->
  <div class="xyuan">
    <div class="xnei">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <ul class="xbanul">
              <li class="xbanli" v-for="(item,i) in xbanner" :key="i">
                <div class="lid">
                  <img class="liimg" :src="item.image" />
                  <p class="lip" v-text="item.name"></p>
                </div>
              </li>
            </ul>
          </div>
          <div class="swiper-slide">
            <ul class="xbanul">
              <li class="xbanli" v-for="(item,i) in xbanner1" :key="i">
                <div class="lid">
                  <img class="liimg" :src="item.image" />
                  <p class="lip" v-text="item.name"></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      xbanner: [
        { code: '00001', image: require('@/assets/index/g.png'), name: '名称'},
        { code: '00002', image: require('@/assets/index/g.png'), name: '名称'},
        { code: '00003', image: require('@/assets/index/g.png'), name: '名称' },
        { code: '00004', image: require('@/assets/index/g.png'), name: '名称' },
        { code: '00005', image: require('@/assets/index/g.png'), name: '名称' },
        { code: '00006', image: require('@/assets/index/g.png'), name: '名称'},
        { code: '00007', image: require('@/assets/index/g.png'), name: '名称' },
        { code: '00008', image: require('@/assets/index/g.png'), name: '名称'},
        { code: '00009', image: require('@/assets/index/g.png'), name: '名称'},
        { code: '00010', image: require('@/assets/index/g.png'), name: '名称' },
      ],
      xbanner1: [
        { code: '00001', image: require('@/assets/index/g.png'), name: '名称'},
        { code: '00002', image: require('@/assets/index/g.png'), name: '名称'},
        { code: '00003', image: require('@/assets/index/g.png'), name: '名称' },
        { code: '00004', image: require('@/assets/index/g.png'), name: '名称' },
        { code: '00005', image: require('@/assets/index/g.png'), name: '名称' },
        { code: '00006', image: require('@/assets/index/g.png'), name: '名称'},
        { code: '00007', image: require('@/assets/index/g.png'), name: '名称' },
        { code: '00008', image: require('@/assets/index/g.png'), name: '名称'},
        { code: '00009', image: require('@/assets/index/g.png'), name: '名称'},
        { code: '00010', image: require('@/assets/index/g.png'), name: '名称' },
      ],
    };
  },
  created() {
    // this.axios
    //   .get("../../../public/data/index.json")
    //   .then(res => {
    //     this.xbanner = res.data.xbanner;
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  },
  mounted() {
    
    var swiper = new Swiper(".swiper-container", {
      pagination: ".swiper-pagination",
      paginationClickable: true
    });
  },
  methods: {
    // getSweipr() {
    //   this.axios.get("../../../public/data/index.json").then(res => {
    //     this.xbanner = res.data.xbanner;
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // }
   
  }
};
</script>
<style scoped>
.xyuan {
  width: 710px;
  margin: 0 auto;
}
.swiper-container {
  width: 100%;
  height: 368px;
  margin: 5px auto;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.xbanul {
  width: 100%;
}
.xbanul .xbanli {
  width: 20%;
  float: left;
  margin-bottom: 20px
}
.liimg {
  height: 100px;
  border-radius: 50%;
}
.lip {
  margin: 0;
  font-size: 24px;
}
.swiper-container-horizontal > .swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: -4px;
}
.swiper-container {
  border-radius: 10px;
  overflow: hidden;
}
.xnei {
  width: 100%;
  padding: 0 0 10px 0;
  background: #fafafa;
  border-radius: 10px;
}

/deep/.swiper-pagination span{
  padding: 0px 10px;
  border-radius: 4px
}
</style>