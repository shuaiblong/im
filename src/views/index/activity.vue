<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-09-29 18:00:23
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-15 14:56:14
 -->
<template>
  <div class="actvity" @click="nai">
    <!-- 活动版图 -->
    <div class="actdiv">
      <img class="actimg" :src="dimg" alt />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dimg: ""
    };
  },
  created() {
    this.axios
      .get("../../../public/data/index.json")
      .then(res => {
        this.dimg = res.data.active;
        console.log(this.dimg);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    nai() {
      this.$router.push("/naifen");
    }
  }
};
</script>
<style scoped>
.actvity {
  width: 100%;
  overflow: hidden;
  margin: 20px 0;
}
.actvity .actdiv {
  width: 94%;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
}
.actvity .actdiv .actimg {
  width: 710px;
  height: 160px;
  pointer-events: none;
}
</style>