<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @cancel="onCancel"
        @keyup="searchup"
      />
    </form>
    <div class="searchres">
      <ul>
        <li v-for="(item,index) in  keywsli" :key="index" v-show="searchlist">{{item|tes}}</li>
      </ul>
    </div>
    <div class="tansuo" v-show="hrst">
      <div class="top">
        <span>搜索历史</span>
        <span id="ljt"></span>
      </div>
      <ul>
        <li v-for="(item,index) in  keywslist" :key="index">{{item}}</li>
      </ul>

      <div class="top">
        <span>搜索发现</span>
        <span @click="celts" :class="tsfx"></span>
      </div>

      <ul v-show="fs">
        <li v-for="(item,index) in  keywslist" :key="index">{{item}}</li>
      </ul>
      <p v-show="!fs">当前搜索发现已经隐藏</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "fx",
  name: "searchres",
  props: {
    keyw: ""
  },
  data() {
    return {
      value: "",
      keywsli: [
        "运动鞋",
        "运动帽",
        "运动裤",
        "儿童牙膏",
        "1岁儿童玩具",
        "女士运动内衣",
        "棒球帽",
        "针织帽"
      ],
      keywslist: ["运动帽", "运动裤", "儿童牙膏", "1岁儿童玩具","运动帽", "运动裤", "儿童牙膏", "1岁儿童玩具"],
      fs: true,
      tsfx: "",
      searchlist: false,
      hrst: true
    };
  },
  filters: {
    tes(value) {
      return value;
    }
  },
  methods: {
    celts() {
      this.fs = !this.fs;
      if (this.fs) {
        this.tsfx = "";
      } else {
        this.tsfx = "hidden";
      }
    },
    onCancel() {
      this.$router.go(-1);
    },
    searchup() {
      this.searchlist = true;
      this.hrst = false;
    }
  }
};
</script>
<style scoped>
.tansuo {
  background: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.top {
  height: 30px;
  display: flex;
  justify-content: space-between;
  margin: 0 15px;
}
span {
  display: block;
}
span:first-of-type {
  height: 25px;
  line-height: 30px;
  color: #333333;
  font-size: 26px;
  font-family: "PingFang-SC-Bold";
  /* font-weight: lighter; */
}
span:last-of-type {
  width: 23px;
  height: 30px;
  background: url("../../assets/search/tsuo.png") no-repeat center;
  background-size: 100%;
  line-height: 30px;
}
span.hidden {
  width: 16px;
  height: 30px;
  background: url("../../assets/search/tsuo_1.png") no-repeat center;
  background-size: 100%;
  line-height: 30px;
}
#ljt {
  width: 20px;
  height: 28px;
  background: url("../../assets/search/lajit.png") no-repeat center;
  background-size: 100%;
  line-height: 30px;
}
.tansuo ul {
  display: flex;
  flex-wrap: wrap;
  margin: 0 15px;
}
.tansuo li {
  margin: 10px;
  background: #f5f5f5;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 24px;
  line-height: 40px;
}
.tansuo p {
  text-align: center;
  height: 30px;
  font-size: 16px;
}
.van-search__action {
  color: #999;
  font-size: 26px;
  text-align: center;
  font-family: "PingFang-SC-Regular";
}
.searchres {
  background: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.searchres li {
  margin-left: 30px;
  border-bottom: 1px solid #f5f5f5;
  text-align: left;
  height: 80px;
  line-height: 80px;
  font-size: 28px;
  font-family: "PingFang-SC-Regular";
  color:#999;
}
.van-cell__value--alone{
  border-radius: 30px !important;
}
</style>