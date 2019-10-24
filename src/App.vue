<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-09-28 17:54:07
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-24 15:46:16
 -->
<template>
  <div id="app">
    <!-- <div id="nav">
    </div>-->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 24px;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
