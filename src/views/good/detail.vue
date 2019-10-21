<!--
 * @Descripttion: 
 * @version: 
 * @Author: chenjia
 * @Date: 2019-09-18 19:26:42
 * @LastEditors: chenjia
 * @LastEditTime: 2019-09-21 18:43:45
 -->
<template>
  <div id="detailbox">
    <div class="topnav">
      <span @click="onleftclick"></span>
      <span></span>
    </div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item in detail.imglist" :key="item.id">
        <img :src="item" alt class="topbanimg" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="desc">
      <div class="title">{{detail.title}}</div>
      <p class="detaildes" ref="test">
        {{detail.des}}
        <van-icon :name="arrowname" class="zhedie" @click="zd" />
      </p>
    </div>
    <div class="xiangsi">
      <div>更多相似宝贝</div>
      <ul>
        <li v-for="(item,index) in detail.xiangshi" :key="index">
          <img :src="item.img" alt />
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
    <div class="bayfooter">
      <p>
        <span>{{detail.count}}人喜欢</span>
        <span></span>
      </p>
      <button>￥{{detail.price}}去购买</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      detail: {},
      xs: [],
      arrowname: "arrow-down",
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  methods: {
    onleftclick() {
      this.$router.go(-1);
    },
    zd() {
      if (this.arrowname == "arrow-up") {
        this.$refs.test.className = "detaildes";
        this.arrowname = "arrow-down";
      } else {
        this.$refs.test.className = "";
        this.arrowname = "arrow-up";
      }
    }
  },
  created() {
    axios({
      url: "http://www.productdetial/api" //模拟数据
    }).then(data => {
      console.log(data.data);
      this.detail = data.data.detial;
      this.images = data.data.detial.imglist;
    });
  }
};
</script>
<style lang="scss" scoped>
#detailbox {
  background: #f5f5f5;
  p {
    font-size: 13px;
    font-weight: normal;
    margin: 0;
  }
  .topbanimg {
    display: block;
    width: 100%;
    height: 375px;
  }
  .van-swipe__indicator {
    width: 8px;
    height: 8px;
  }
  .swiper-container {
    width: 100%;
    height: 375px;
  }
  .topnav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 92%;
    height: 50px;
    margin: 0 10px;
    position: fixed;
    z-index: 3;
    span {
      width: 18px;
      height: 18px;
      display: block;
    }
    span:first-of-type {
      background: url("../../assets/leftjt.png") no-repeat center;
      background-size: 90%;
    }
    span:last-of-type {
      background:  url("../../assets/heart_plus.png") no-repeat center;
      background-size: 100%;
    }
  }
  .desc {
    margin: 15px;

    .title {
      height: 15px;
      font-family: PingFang-SC-Bold;
      font-size: 15px;
      font-weight: bolder;
      font-stretch: normal;
      line-height: 15px;
      color: #333333;
      margin-bottom: 10px;
    }
    p {
      font-family: PingFang-SC-Regular;
      font-size: 13px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 20px;
      margin: 0;
      position: relative;
      color: #999999;
    }
    .detaildes {
      // height: 188px;

      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;

      .zhedie {
        position: absolute;
        right: -1px;
        bottom: 3px;
      }
    }
  }
  .xiangsi {
    background: #fff;
    padding-top: 5px;
    border-radius: 8px;
    div {
      height: 20px;
      font-family: PingFang-SC-Regular;
      font-size: 15px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 20px;
      letter-spacing: 0px;
      color: #333333;
      margin: 15px;
    }
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 10px;
      li {
        img {
          width: 160px;
          border-radius: 8px;
        }
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 5px 2px;
          text-align: center;
        }
      }
    }
  }
  .bayfooter {
    border-top: 1px solid #f5f5f5;
    background:#fff;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    align-items: center;
    height: 50px;
    p {
      font-family: PingFang-SC-Regular;
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #333333;
      height: 30px;
      line-height: 30px;
      span:last-of-type {
        display: inline-block;
        width: 15px;
        height: 15px;
        background: url("../../assets/heart_0.png") no-repeat center;
        background-size: 100%;
        margin-left: 2px;

      }
    }
    button {
      background-color: #5fd8cb;
      border-radius: 15px;
      height: 30px;

      font-family: PingFang-SC-Medium;
      font-size: 15px;
      font-weight: normal;
      font-stretch: normal;

      color: #ffffff;
      border:0;
    }
  }
}
</style>
<style lang="scss">
span.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background-color: #fff;
  border-radius: 50%;
}
span.swiper-pagination-bullet-active {
  background-color: #5fd8cb;
}
</style>
