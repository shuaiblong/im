/*
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-08 16:34:07
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-14 18:45:05
 */
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
      .loader('px2rem-loader')
      .options({
        remUnit: 75
      })
  }
}