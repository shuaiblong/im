<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-09-28 17:54:07
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-12 15:47:36
 -->
<template>
  <!-- 头部导航栏 -->
  <div>
    <div class="nav-head">
      <div class="scan">
        <!-- 扫一扫 -->
        <i class="iconfont icon-saoyisao1"></i>
      </div>
      <div class="search">
        <!-- 搜索框 -->
        <div class="bg" @click="add">
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
  </div>
</template>
<script>
export default {
  methods:{
    add(){
      this.$router.push("/sou")
    }
  }
};
</script>
<style scoped>
.nav-head {
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center !important;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  background: #fe3855;
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
  color: white;
}
.icon-liaotian {
  font-size: 40px;
  line-height: 60px;
  color: white;
}

</style>