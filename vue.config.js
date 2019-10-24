/*
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-23 16:24:04
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-23 17:15:45
 */

module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({ // 把px单位换算成rem单位
                        rootValue: 75, // 换算的基数(设计图750的根字体为75)
                        // selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
                        propList: ['*']
                    })
                ]
            }
        }
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
    }
}