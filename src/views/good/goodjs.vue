<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-24 17:26:13
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-24 18:50:34
 -->
       <template>
  <div class="box">
    <div class="head">
      <!-- 左边箭头 -->
      <div class="jiantou">
        <i class="iconfont icon-jiantou2"></i>
      </div>
      <!-- 中间列表 -->
      <div class="sp">
        <ul>
          <li @click="tui">商品</li>
          <li>评价</li>
          <li>详情</li>
        </ul>
        <div class="dian">
          <span class="radio"></span>
          <span class="radio"></span>
          <span class="radio"></span>
          <span class="hong"></span>
        </div>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="lunbo">
      <van-swipe @change="onChange">
        <van-swipe-item>
          <img src="../../assets/index/ysl.png" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/index/ysl.png" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/index/ysl.png" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/index/ysl.png" />
        </van-swipe-item>

        <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div>
      </van-swipe>
    </div>
    <!-- 价钱 -->
    <div class="jiage">
      <div class="price">
        <div class="jg">
          <span>￥</span>
          <span>269</span>
          <span>.00</span>
          <s class="yj">￥335.00</s>
        </div>
        <!-- 收藏 -->
        <div class="shou">
          <div class="ysc">
            <i class="iconfont icon-like-line"></i>
            <p>已收藏</p>
          </div>
          <div class="sc">
            <i class="iconfont icon-like-line"></i>
            <p>收藏</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 一件装 -->
    <div class="danjia">
      <ul>
        <li>1件装 | 179元</li>
        <li>2件装 | 280元</li>
        <li>2件装 | 280元</li>
        <li>2件装 | 280元</li>
      </ul>
    </div>
    <!-- 自营 店铺信息 -->
    <div class="zy">
      <div class="xinxi">
        <p>
          <span>自营</span>
          <span>&nbsp;&nbsp;CHANE香奈儿炫亮魅力唇膏3.5克魅力双唇精致演绎丝绒系列丝绒系列</span>
        </p>
      </div>
      <!-- 促销 消费满减 -->
      <div class="chuxiao">
        <div class="cx">
          <span>促销</span>
          <span>消费满减</span>
          <span class="sheng">全场商品满100减50元卷全场1商品满100</span>
        </div>
        <div class="radio_11">
          <span class="radio1"></span>
          <span class="radio2"></span>
          <span class="radio3"></span>
        </div>
      </div>
    </div>
    <!-- 已选 -->
    <div class="yixuan">
      <span>已选</span>
      <span>一件装 | 269元</span>
      <span>
        <i class="iconfont icon-dibudaohanglan-"></i>
      </span>
    </div>
    <!-- 准时达 -->
    <div class="zhunshida">
      <div>
        <p>
          <i class="iconfont icon-naozhong"></i>准时达
        </p>
      </div>
      <div>
        <p>
          <i class="iconfont icon-gouwu"></i>品质无忧
        </p>
      </div>
      <div>
        <p>
          <i class="iconfont icon-7tianwuliyoutuihuo"></i>7天无理由退货(拆封后不支持)
        </p>
      </div>
      <div>
        <p>
          <i class="iconfont icon-daituikuan"></i>闪电退款
        </p>
      </div>
    </div>
    <!-- 评价 -->
    <div class="pingjia">
      <div class="pj">
        <p>评价(2.4万+)</p>
        <p>
          好评度
          <span>99%</span>
          <i class="iconfont icon-dibudaohanglan-"></i>
        </p>
      </div>
      <div class="color">
        <div>
          <p>颜色漂亮156</p>
        </div>
        <div>
          <p>颜色漂亮156</p>
        </div>
        <div>
          <p>颜色漂亮156</p>
        </div>
        <div>
          <p>颜色漂亮156</p>
        </div>
      </div>
      <div class="color">
        <div>
          <p>颜色漂亮156</p>
        </div>
        <div>
          <p>颜色漂亮156</p>
        </div>
        <div>
          <p>颜色漂亮156</p>
        </div>
        <div>
          <p>颜色漂亮156</p>
        </div>
      </div>
      <van-divider />
      <!-- 用户评价 -->
      <div class="yonghu">
        <div class="touxiang">
          <span>
            <img src="../../assets/tu11.png" />QWERTRY
          </span>
          <span>2018-07-16</span>
        </div>
        <!-- 描述 -->
        <div class="ping">
          <div class="wenzi">
            <p>买来送给姐姐的，颜色超级赞呀，之前生日弟弟送我一支，很喜欢，颜色美美哒，好几个同事和朋友问我什么色号啦。</p>
          </div>
          <div class="tupian">
            <div>
              <p>
                <img src="../../assets/tu.png" />
              </p>
            </div>
            <div>
              <p>
                <img src="../../assets/tu.png" />
              </p>
            </div>
            <div>
              <p>
                <img src="../../assets/tu.png" />
              </p>
            </div>
            <div>
              <p>
                <img src="../../assets/tu.png" />
              </p>
            </div>
          </div>
          <div>
            <van-divider />
          </div>
        </div>
      </div>
      <!-- 用户评价 -->
      <div class="yonghu">
        <div class="touxiang">
          <span>
            <img src="../../assets/tu12.png" />QWERTRY
          </span>
          <span>2018-07-16</span>
        </div>
        <!-- 描述 -->
        <div class="ping">
          <div class="wenzi">
            <p>买来送给姐姐的，颜色超级赞呀，之前生日弟弟送我一支，很喜欢，颜色美美哒，好几个同事和朋友问我什么色号啦。</p>
          </div>
          <div class="tupian">
            <div>
              <p>
                <img src="../../assets/tu.png" />
              </p>
            </div>
            <div>
              <p>
                <img src="../../assets/tu.png" />
              </p>
            </div>
            <div>
              <p>
                <img src="../../assets/tu.png" />
              </p>
            </div>
            <div>
              <p>
                <img src="../../assets/tu.png" />
              </p>
            </div>
          </div>
          <div>
            <van-divider />
          </div>
        </div>
      </div>
      <!-- 查看全部评价 -->
      <div class="allpingjia" @click="add">
        <span>查看全部评价</span>
        <span>
          <i class="iconfont icon-shuangjiantouyou"></i>
        </span>
      </div>
    </div>
    <!-- 官方旗舰店 -->
    <div class="qijiandian">
      <div class="zhuan">
        <div class="zhuanmai">
          <div class="imgz">
            <img class="zhuanimg" src="../../assets/ding.png" alt />
          </div>
          <div>
            <p class="xiang">
              chanel香奈儿官方旗舰店 &nbsp;
              <span class="ziying">自营</span>
            </p>
            <p class="xiangzhu">15414关注</p>
          </div>
        </div>
        <div class="jinjian">
          <p class="jinru">进入店铺</p>&nbsp;&nbsp;
          <van-icon name="arrow" />
        </div>
      </div>
      <!-- 广告店铺简介 -->
      <div class="jianjie">
        <span>这里写一句广告语或者店铺简介</span>
      </div>
      <div class="zhuanqu">
        <div>
          <p>
            <img src="../../assets/tu.png" />
          </p>
          <p class="zhuanqu_1">口红专区</p>
        </div>
        <div>
          <p>
            <img src="../../assets/tu.png" />
          </p>
          <p class="zhuanqu_1">面膜专区</p>
        </div>
        <div>
          <p>
            <img src="../../assets/tu.png" />
          </p>
          <p class="zhuanqu_1">唇彩专区</p>
        </div>
        <div>
          <p>
            <img src="../../assets/tu.png" />
          </p>
          <p class="zhuanqu_1">粉底专区</p>
        </div>
      </div>
    </div>
    <!-- 相关推荐 -->
    <div class="xiangguan">
      <div class="xgtj">
        <span>相关推荐</span>
      </div>
      <van-swipe :autoplay="3000" indicator-color="rgb(255,101,25)">
        <van-swipe-item>
          <ul>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </van-swipe-item>
        <van-swipe-item>
          <ul>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </van-swipe-item>
        <van-swipe-item>
          <ul>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </van-swipe-item>
        <van-swipe-item>
          <ul>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="tuijian">
                <div>
                  <p>
                    <img src="../../assets/index/ysl.png" />
                  </p>
                </div>
                <div class="xq">
                  <p>香奈儿Chanel 口红/唇膏可可小姐水亮/丝绒系列润唇保湿口红配玫瑰花礼盒 丝绒系列58#豆沙色</p>
                </div>
                <div class="jia">
                  <p>
                    <span>￥</span>
                    <span>150</span>
                    <span>.00</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 详情介绍 -->
    <div class="xqjs">
      <span class="img1">
        <img src="../../assets/xq1.png" />
      </span>
      <span class="xiangqing">详情介绍</span>
      <span class="img2">
        <img src="../../assets/xq2.png" />
      </span>
    </div>
    <!-- 商品介绍 -->
    <div class="spjs">
      <div class="spjs_1">
        <span>商品介绍</span>
      </div>
      <div class="spxx">
        <span class="img1">
          <img src="../../assets/xq3.png" />
        </span>
        <span class="shangpin">商品信息</span>
        <span class="img2">
          <img src="../../assets/xq3.png" />
        </span>
      </div>
      <div class="spjs_img">
        <span>
          <img src="../../assets/index/ban_bg.png" />
        </span>
      </div>
      <div class="ggcs">
        <span>规格参数</span>
      </div>
      <div class="ggcs_1">
        <span class="img1">
          <img src="../../assets/xq3.png" />
        </span>
        <span class="guige">规格参数</span>
        <span class="img2">
          <img src="../../assets/xq3.png" />
        </span>
      </div>
      <!-- table -->
      <div class="table-a">
        <table align="center">
          <tr align="center">
            <td colspan="2">主体</td>
          </tr>
          <tr align="center">
            <td>保质期(年)</td>
            <td>3年</td>
          </tr>
          <tr align="center">
            <td>产品产地</td>
            <td>中国大陆</td>
          </tr>
          <tr align="center">
            <td>妆效</td>
            <td>润泽/镜面</td>
          </tr>
          <tr align="center">
            <td colspan="2">其他</td>
          </tr>
          <tr align="center">
            <td>商品编号</td>
            <td>30940472913</td>
          </tr>
        </table>
      </div>
    </div>
    <!-- 没有更多了 -->
    <div class="meiyou">
      <span>没有更多了~</span>
    </div>
    <!-- 底部商品导航 -->
    <div class="foot">
      <van-goods-action>
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-icon icon="chat-o" text="联系客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" info="15" @click="enter" />
        <van-goods-action-button color="rgb(255,108,0)" type text="加入购物车" />
        <van-goods-action-button color="rgb(249,44,78)" type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      pagination: ".swiper-pagination",
      paginationClickable: true,
      loop: true
    });
  },
  data() {
    return {
      current: 0
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    add() {
      this.$router.push("/goodxqpj");
    },
    tui() {
      this.$router.push("/index");
    },
    enter() {
      this.$router.push("/shopche");
    }
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #f5f5f5;
  /* overflow: hidden; */
}
.jiantou {
  width: 49px;
  height: 49px;
  background: rgb(51, 51, 51);
  opacity: 0.5;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  float: left;
  margin-left: 15px;
}
.icon-jiantou2 {
  color: rgb(255, 255, 255);
  font-size: 50px;
}
.radio {
  display: inline-block;
  width: 7px;
  height: 8px;
  background: rgb(255, 255, 255);
  border-radius: 50%;
  margin: 0px 4px;
}
.dian {
  position: absolute;
  display: inline-flex;
  background: rgb(51, 51, 51);
  width: 49px;
  height: 49px;
  /* padding: 10px; */
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  opacity: 0.5;
  float: right;
  margin-left: 500px;
}
.hong {
  display: inline-block;
  width: 17px;
  height: 17px;
  background: rgb(255, 101, 25);
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: -2px;
}
.sp {
  display: inline-flex;
}
.sp ul li {
  float: left;
  font-size: 28px;
  color: rgb(40, 40, 40);
  margin: 8px 46px;
}
.dian ::before {
  content: "";
  display: block;
  clear: both;
}
.lunbo img {
  /* width: 657px; */
  height: 657px;
}
.custom-indicator {
  width: 82px;
  height: 30px;
  color: rgb(255, 255, 255);
  background-color: rgb(51, 51, 51);
  border-radius: 15px 0px 0px 15px;
  position: absolute;
  right: 0;
  bottom: 0;
}
.van-swipe__indicators {
  margin-top: 100px;
}
.jiage {
  width: 100%;
  height: 95px;
  margin-top: 10px;
  background-color: rgb(249, 249, 249);
}
.price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 95px;
}
.price span {
  color: rgb(255, 28, 28);
}
.price span:first-of-type,
.price span:nth-of-type(3) {
  font-size: 26px;
}
.price span:nth-of-type(2) {
  font-size: 40px;
  font-weight: 0;
}
.yj {
  text-decoration: line-through;
  color: rgb(153, 153, 153);
  font-size: 26px;
  margin-left: 26px;
}
.jg {
  margin-left: 26px;
}
.shou {
  display: inline-flex;
}
.icon-like-line {
  font-size: 40px;
  color: rgb(153, 153, 153);
}
.ysc,
.sc {
  font-size: 20px;
  color: rgb(153, 153, 153);
}
.sc {
  margin: 0px 26px;
}
.ysc p,
.ysc i {
  color: rgb(255, 100, 25);
}
.ysc p,
.sc p {
  margin: 0px;
}
.danjia {
  width: 100%;
  height: 99px;
  background-color: rgb(244, 244, 244);
  display: flex;
  align-items: center;
  overflow: auto;
}
.danjia ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
}
.danjia li:first-of-type {
  color: rgb(255, 93, 29);
}
.danjia ul li {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 37px;
  font-size: 24px;
  color: rgb(153, 153, 153);
  border: solid 2px rgb(153, 153, 153);
  border-radius: 30px;
  margin: 0px 10px;
}
.danjia:after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}
.xinxi {
  display: block;
  text-align: justify;
  margin: 0px 30px;
}
.xinxi p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.xinxi span:first-of-type {
  font-size: 20px;
  color: rgb(255, 255, 255);
  padding: 4px 10px 0 10px;
  border: 2px solid rgb(255, 89, 31);
  background-color: rgb(255, 108, 0);
  border-radius: 25px;
}
.xinxi :nth-child(2) {
  color: rgb(51, 51, 51);
  font-size: 28px;
  font-family: "PingFang-SC-Medium";
  vertical-align: middle;
}
.zy {
  width: 100%;
  height: 153px;
  background-color: white;
}
/* 促销满减 */
.chuxiao .cx span:first-of-type {
  font-size: 24px;
  color: rgb(153, 153, 153);
  font-family: "PingFang-SC-Regular";
  margin-left: -60px;
}
.chuxiao .cx span:nth-child(2) {
  font-size: 20px;
  color: rgb(255, 101, 25);
  font-family: "PingFang-SC-Regular";
  border: 2px solid rgb(255, 108, 0);
  padding-top: 4px;
  border-radius: 5px;
  margin-left: 30px;
}
.chuxiao .cx span:nth-child(3) {
  font-size: 24px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Regular";
  margin-left: 10px;
}
.sheng {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 5px;
}
.radio_11 .radio1,
.radio_11 .radio3 {
  width: 6px;
  height: 6px;
  background: rgb(153, 153, 153);
  border-radius: 50%;
  margin: 12px 1px;
}
.radio_11 {
  position: absolute;
  margin: -30px 695px;
  display: flex;
}
.radio_11 .radio2 {
  width: 8px;
  height: 9px;
  background: rgb(153, 153, 153);
  border-radius: 50%;
  margin: 10px 1px;
}
/* 已选 */
.yixuan {
  width: 100%;
  height: 100px;
  background-color: rgb(255, 255, 255);
  margin-top: 20px;
}
.yixuan span:first-of-type,
.yixuan span:nth-child(2) {
  float: left;
  /* display:inline-block; */
  line-height: 100px;
}
.yixuan span:first-of-type {
  color: rgb(153, 153, 153);
  font-size: 24px;
  font-family: "PingFang-SC-Regular";
  margin-left: 30px;
}
.yixuan span:nth-child(2) {
  color: rgb(51, 51, 51);
  font-size: 26px;
  font-family: "PingFang-SC-Medium";
  margin-left: 48px;
}
.yixuan span:nth-child(3) {
  float: right;
  line-height: 100px;
  margin-right: 30px;
  color: rgb(51, 51, 51);
}
.icon-dibudaohanglan- {
  font-size: 40px;
}
.yixuan:after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}
.zhunshida {
  width: 100%;
  height: 59px;
  display: flex;
  justify-content: space-around;
}
.icon-naozhong,
.icon-gouwu,
.icon-7tianwuliyoutuihuo,
.icon-daituikuan {
  font-size: 20px;
}
.pingjia {
  width: 100%;
  height: 1030px;
  margin: 20px auto;
  background-color: rgb(255, 255, 255);
}
.pj p:first-child {
  float: left;
  font-size: 26px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Bold";
  margin-left: 30px;
}
.pj p:nth-child(2) {
  float: right;
  font-size: 24px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Medium";
  margin: 10px 30px;
}
.pj span {
  font-size: 24px;
  color: rgb(255, 97, 26);
  font-family: "PingFang-SC-Medium";
}
.icon-dibudaohanglan- {
  vertical-align: middle;
  /* margin-right:19px; */
}
.color:after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}
.pj:after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}
.color {
  display: flex;
  justify-content: space-around;
}
.color p {
  font-size: 24px;
  color: rgb(51, 51, 51);
  border: 2px solid pink;
  background-color: pink;
  border-radius: 20px;
  padding: 6px 10px;
  margin-top: 6px;
}
.touxiang {
  margin-top: 30px;
}
.touxiang span:first-of-type {
  float: left;
  font-size: 24px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Medium";
  margin-left: 30px;
}
.touxiang span:nth-child(2) {
  float: right;
  font-size: 22px;
  color: rgb(153, 153, 153);
  font-family: "PingFang-SC-Regular";
  margin-right: 29px;
}
.touxiang img {
  width: 50px;
  height: 50px;
  vertical-align: middle;
  margin-right: 20px;
}
.touxiang:after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}
.wenzi {
  width: 688px;
  height: 58px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
}
.wenzi p {
  font-size: 24px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Regular";
  display: block;
  text-align: justify;
}
.tupian {
  display: flex;
  justify-content: space-around;
  margin: 0px 30px;
}
.tupian img {
  width: 165px;
  height: 165px;
  margin-top: 20px;
}
.van-divider--hairline {
  margin-top: -10px;
}
.allpingjia {
  margin-top: -35px;
}
.allpingjia span:first-of-type {
  color: rgb(51, 51, 51);
  font-size: 24px;
  font-family: "PingFang-SC-Regular";
  vertical-align: middle;
}
.icon-shuangjiantouyou {
  position: absolute;
  vertical-align: middle;
  color: rgb(51, 51, 51);
  font-size: 36px;
  vertical-align: middle;
}
.qijiandian {
  width: 100%;
  background-color: rgb(255, 255, 255);
  margin-top: 20px;
}
.dianpu {
  display: flex;
  justify-content: space-around;
}
.tubiao img {
  width: 60px;
  height: 60px;
  margin-top: 12px;
}
/* .dianname{
  margin-right:90px;
} */
.dianname span:first-of-type {
  color: 24px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Bold";
}
.dianname span:nth-child(2) {
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-family: "PingFang-SC-Regular";
  border: 2px solid rgb(255, 89, 31);
  background-color: rgb(255, 89, 31);
  border-radius: 13px;
}
.guanzhu span {
  font-size: 22px;
  color: rgb(153, 153, 153);
  font-family: "PingFang-SC-Regular";
  position: absolute;
  margin: 40px -395px;
}
.jinrudianpu {
  font-size: 24px;
  color: rgb(255, 103, 24);
  font-family: "PingFang-SC-Regular";
}
.icon-dibudaohanglan- {
  color: rgb(51, 51, 51);
}
.jianjie span {
  float: left;
  margin-left: 20px;
  color: rgb(51, 51, 51);
  font-size: 24px;
  font-family: "PingFang-SC-Regular";
  margin-top: 30px;
}
.zhuanqu img {
  width: 150px;
  height: 159px;
}
.jianjie:after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}
.zhuanqu {
  display: flex;
  justify-content: space-around;
}
.zhuanqu .zhuanqu_1 {
  font-size: 24px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Regular";
}

.tuijian {
  width: 216px;
  height: 342px;
  margin-top: 40px;
}
.xgtj span {
  float: left;
  margin-left: 30px;
  color: rgb(0, 0, 0);
  font-size: 26px;
  margin-top: 30px;
  font-family: "PingFang-SC-Medium";
}
.xgtj:after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}
.tuijian img {
  height: 216px;
}
.tuijian .xq {
  width: 190px;
  height: 85px;
  margin-top: -48px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.xq p {
  font-size: 24px;
  color: rgb(51, 51, 51);
  font-family: "PingFang-SC-Regular";
}
.jia {
  float: left;
  margin-top: -15px;
}
.jia:after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}
.jia span:first-of-type,
.jia span:nth-child(3) {
  color: rgb(255, 28, 28);
  font-size: 22px;
  font-family: "PingFang-SC-Regular";
}
.jia span:nth-child(2) {
  font-size: 30px;
  color: rgb(255, 28, 28);
  font-family: "PingFang-SC-Bold";
}
.xiangguan {
  width: 100%;
  height: 799px;
  background-color: rgb(255, 255, 255);
  margin-top: 20px;
}
.xiangguan ul li {
  float: left;
  margin-left: 26px;
  margin-top: -30px;
}
.xqjs {
  width: 100%;
  height: 72px;
}
.xqjs img {
  width: 74px;
  height: 3px;
  color: rgb(170, 170, 170);
}
.xqjs .xiangqing {
  color: 24px;
  color: rgb(0, 0, 0);
  margin-top: 25px;
  line-height: 72px;
  font-family: "PingFang-SC-Regular";
  vertical-align: middle;
}
.xqjs .img1 {
  margin-right: 20px;
}
.xqjs .img2 {
  margin-left: 20px;
}
.xqjs img {
  color: rgb(170, 170, 170);
}
.xajs span
/* 商品介绍 */
.spjs {
  width: 100%;
  height: 1090px;
  background: #ffffff;
}
.spjs_1 {
  background: #ffffff;
}
.spjs .spjs_1 span,
.ggcs span {
  float: left;
  color: rgb(0, 0, 0);
  font-size: 26px;
  margin-left: 30px;
  font-family: "PingFang-SC-Medium";
}
.spjs_1:after,
.ggcs:after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}
/* 商品信息 */
.spxx,
.ggcs {
  padding: 23px 0px;
  background: #ffffff;
}
.spxx .shangpin,
.ggcs_1 .guige {
  font-size: 28px;
  color: rgb(153, 153, 153);
  font-family: "PingFang-SC-Regular";
  vertical-align: middle;
  font-style: italic;
}
.spxx img,
.ggcs_1 img {
  width: 220px;
  height: 10px;
  /* vertical-align: middle; */
}
.spxx .img1,
.ggcs_1 .img1 {
  margin-right: 20px;
}
.ggcs_1 {
  padding-bottom: 20px;
  background: #ffffff;
}
.spxx .img2,
.ggcs_1 .img2 {
  margin-left: 20px;
}
.spjs_img img {
  width: 100%;
}
/* 没有更多了 */
.meiyou {
  width: 750px;
  height: 141px;
}
.meiyou span {
  font-size: 26px;
  color: rgb(170, 170, 170);
  line-height: 141px;
  font-family: "PingFang-SC-Regular";
}
/* table */
.table-a {
  width: 100%;
  height: 500px;
  background: #ffffff;
}
table {
  border-collapse: collapse;
  width: 95%;
  height: 395px;
}
.table-a table td {
  border: 1px solid #ddd;
}
.foot {
  width: 750px;
  height: 107px;
}
.van-goods-action-button {
  border-radius: 0px;
  width: 207px;
  height: 105px;
  margin-right: 0px;
}
.zhuan {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  text-align: left;
}
.zhuanmai {
  display: flex;
}
.zhuanimg {
  width: 60px;
  height: 60px;
  margin-right: 20px;
}
.imgz {
  display: flex;
  align-items: center;
}
.xiang {
  margin: 0 0 20px 0;
  font-size: 24px;
}
.xiangzhu {
  font-size: 22px;
  color: rgb(153, 153, 153);
  margin: 0;
}
.ziying {
  background: rgb(255, 89, 31);
  color: white;
  padding: 4px 10px;
  border-radius: 25px;
}
.jinru {
  color: rgb(255, 103, 24);
}
.jinjian {
  display: flex;
  align-items: center;
}
</style>