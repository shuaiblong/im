<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-22 15:47:22
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-22 18:52:17
 -->
<template>
  <div>
    <van-nav-bar title="收货地址" left-text left-arrow @click-left="onClickLft" />
    <div class="box">
      <div class="naphone">
        <p>大师傅</p>
        <p>13137151599</p>
      </div>
      <p class="dizhi">
        <span v-if="0" class="mo">默认</span> 河南省 郑州市 二七区 二七滨湖国际一区
      </p>
      <div class="moren">
        <p class="dui">
          <input type="radio" name="d1" id="d1" />
          设为默认
        </p>
        <p>
          <i class="iconfont icon-icon-test"></i>删除
        </p>
      </div>
    </div>
    <div class="box">
      <div class="naphone">
        <p>大师傅</p>
        <p>13253558359</p>
      </div>
      <p class="dizhi">
        <span v-if="0" class="mo">默认</span> 河南省 郑州市 二七区 二七滨湖国际一区
      </p>
      <div class="moren">
        <p class="dui">
          <input type="radio" name="d1" id="d2" />
          设为默认
        </p>
        <p>
          <i class="iconfont icon-icon-test"></i>删除
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLft() {
      this.$router.go(-1);
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
.box {
  text-align: left;
  box-sizing: border-box;
  background: #ffffff;
  padding: 30px 30px 25px;
  width: 710px;
  margin: 20px auto 0;
}
.naphone {
  display: flex;
  font-size: 28px;
  justify-content: space-between;
}
.naphone p {
  margin: 0;
}
.dizhi {
  font-size: 24px;
  color: rgb(102, 102, 102);
  margin: 40px 0 20px 0;
  padding-bottom: 20px;
  border-bottom: 2px solid rgb(245, 245, 245);
}
.mo {
  background: rgb(255, 109, 21);
  padding: 4px 10px;
  color: white;
  border-radius: 50px;
}
.moren {
  display: flex;
  justify-content: space-between;
}
.moren p {
  margin: 0;
}
.moren input {
  background: url(../../assets/ky.png) no-repeat center left;
  background-size: 40px 40px;
  width: 40px;
  height: 40px;
  border: 0;
  -webkit-appearance: none;
  outline: none;
}
.moren input:checked {
  background: url(../../assets/sy.png) no-repeat center left;
  background-size: 40px 40px;
  width: 40px;
  height: 40px;
  border: 0;
  -webkit-appearance: none;
  outline: none;
}
.dui {
  display: flex;
  align-items: center;
}
</style>