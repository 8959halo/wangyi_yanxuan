<template>
  <div class="homePageContainer">
    <!--头部-->
    <div class="header">
      <h1 class="logo"></h1>
      <div class="topSearch">
        <i class="iconfont icon-icon-test"></i>
        <span class="content">搜索商品, 共19966款好物</span>
      </div>
      <div class="searchButton">登录</div>
      <div class="tabs">
        <div class="tab active">
          <span class="item">推荐</span>
        </div>
        <div class="tab" @click="getActive()">
          <span class="item">居家生活</span>
        </div>
        <div class="tab">
          <span class="item">服饰鞋包</span>
        </div>
        <div class="tab">
          <span class="item">美食酒水</span>
        </div>
        <!--全部频道-->
        <div class="allNav" v-show="isShowAllNav">
          <span>全部频道</span>
          <i class="iconfont icon-shouqishangjiantou-"></i>
          <a href="javascript:;">
            <span>1231</span>
          </a>
          <a href="javascript:;">
            <span>1231</span>
          </a>
          <a href="javascript:;">
            <span>1231</span>
          </a>
          <a href="javascript:;">
            <span>1231</span>
          </a>
          <a href="javascript:;">
            <span>1231</span>
          </a>
          <a href="javascript:;">
            <span>1231</span>
          </a>
          <a href="javascript:;">
            <span>1231</span>
          </a>
          <a href="javascript:;">
            <span>1231</span>
          </a>
        </div>
      </div>
    </div>
    <!--轮播图-->
    <div class="content">
      <div class="icon">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg?imageView&quality=75&thumbnail=750x0">
            </div>

          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <!--服务-->
    <div class="server">
      <div class="server_left">
        <i class="iconfont icon-duihaocheckmark17"></i>
        <span>网易自营品牌</span>
      </div>
      <div class="server_midlle">
        <i class="iconfont icon-duihaocheckmark17"></i>
        <span>30天无忧退货</span>
      </div>
      <div class="server_right">
        <i class="iconfont icon-duihaocheckmark17"></i>
        <span>48小时快速退款</span>
      </div>
    </div>
    <!--商品导航-->
    <div class="categorysNav">
      <ul class="Categorys">
        <li>
          <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png">
          <span>123</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png">
          <span>123</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png">
          <span>123</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png">
          <span>123</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png">
          <span>123</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png">
          <span>123</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png">
          <span>123</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png">
          <span>123</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png">
          <span>123</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png">
          <span>123</span>
        </li>
      </ul>
    </div>
    <!--老板推荐-->
    <div class="bossRecommen">
      <img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png">
    </div>
    <!--购物榜单-->
    <div class="shopList">
      <ul class="lists">
        <li class="list">
          <div class="title">实时好评榜</div>
          <div class="desc">精选优质好物</div>
          <img src="http://yanxuan.nosdn.127.net/e4092e675f895740f8e079980e8ebe63.png">
          <img src="http://yanxuan.nosdn.127.net/6725890e905c4d51e333485f3a934192.png">
        </li>
        <li class="list">
          <div class="title">新品销售榜</div>
          <div class="desc">好物抢先体验</div>
          <img src="http://yanxuan.nosdn.127.net/780b2fc0c98fac7b2862a8a111ee615f.png">
          <img src="http://yanxuan.nosdn.127.net/77bf1ff658f8557391f1b3204cb8ab3b.png" alt="">
        </li>
        <li class="list">
          <div class="title">严选线下点首家</div>
          <div class="desc">体验选式美学</div>
          <img src="http://yanxuan.nosdn.127.net/a07c82f8b26a4ed42b1d697eb9ea418f.png">
          <img src="http://yanxuan.nosdn.127.net/d1d2488296c5e75967ebfbdf8a36d6cc.png">
        </li>
        <li class="list">
          <div class="title">12月必买好物</div>
          <div class="desc">冬日小确幸指南</div>
          <img src="http://yanxuan.nosdn.127.net/362a8249b48d91d99604680b5471b507.png">
          <img src="http://yanxuan.nosdn.127.net/e1d2f0b529eddc9b645997d0f16e9aca.png">
        </li>
      </ul>
    </div>
    <!--限时购-->
    <div class="timeToBuy">
      <div class="timeToBuyHeader">
        <span class="title">限时购</span>
        <div class="countTime">
          <span class="hour">02</span>
          <span class="colon">:</span>
          <span class="minute">12</span>
          <span class="colon">:</span>
          <span class="second">58</span>
        </div>
        <span class="more">更多></span>
      </div>
      <ul class="lists">
        <li class="item">
          <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png">
          <span class="price">$111</span>
          <span class="oldPrice">$222</span>
        </li>
        <li class="item">
          <img src="http://yanxuan.nosdn.127.net/fe06530dd35ec5062c1ecaf82d4812d6.png">
          <span class="price">$111</span>
          <span class="oldPrice">$222</span>
        </li>
        <li class="item">
          <img src="http://yanxuan.nosdn.127.net/de34d4d8407709f2edd88597d66fcfcb.png">
          <span class="price">$111</span>
          <span class="oldPrice">$222</span>
        </li>
        <li class="item">
          <img src="http://yanxuan.nosdn.127.net/da9c2255909d0d1fe5cabff6d93c03db.png">
          <span class="price">$111</span>
          <span class="oldPrice">$222</span>
        </li>
        <li class="item">
          <img src="http://yanxuan.nosdn.127.net/8b7bde0b395e2bda54505cf4c3b7880b.png">
          <span class="price">$111</span>
          <span class="oldPrice">$222</span>
        </li>
        <li class="item">
          <img src="http://yanxuan.nosdn.127.net/2adbaae8403ac4dcac56ebf2ff1a5116.png">
          <span class="price">$111</span>
          <span class="oldPrice">$222</span>
        </li>
      </ul>
    </div>
    <!--新品首发-->
    <div class="newGoods">
      <div class="newGoodsHeader">
        <span class="title">新品首发</span>
        <span class="more">更多></span>
      </div>
      <ul class="lists">
        <li class="item">
          <img src="http://yanxuan.nosdn.127.net/eb28be79a5b5e4f8ee7b6a3a9641dae5.png">
          <div class="text">
            <span class="desc">xxxxx</span>
            <span class="price">$1231</span>
          </div>
        </li>
        <li class="item">
          <img src="http://yanxuan.nosdn.127.net/6ca5da68fa4e87086126f9a124442da9.jpg">
          <div class="text">
            <span class="desc">xxxxx</span>
            <span class="price">$1231</span>
          </div>
        </li>
        <li class="item">
          <img src="http://yanxuan.nosdn.127.net/bf216b5af1dc8cdb5a70e87b8271028c.png">
          <div class="text">
            <span class="desc">xxxxx</span>
            <span class="price">$1231</span>
          </div>
        </li>
        <li class="item">
          <img src="http://yanxuan.nosdn.127.net/5351c9bffc8d8c17d7079428c5dd8a9e.jpg">
          <div class="text">
            <span class="desc">xxxxx</span>
            <span class="price">$1231</span>
          </div>
        </li>
        <li class="item">
          <img src="http://yanxuan.nosdn.127.net/85b1d637ae9be7518d4616ec40ae5741.png">
          <div class="text">
            <span class="desc">xxxxx</span>
            <span class="price">$1231</span>
          </div>
        </li>
        <li class="item">
          <img src="http://yanxuan.nosdn.127.net/5b874370ef8f63ee41865bbee4de2890.jpg">
          <div class="text">
            <span class="desc">xxxxx</span>
            <span class="price">$1231</span>
          </div>
        </li>
      </ul>
    </div>
    <!--私人订制-->
    <!--<div class="intimate">-->
      <!--<span class="title">私人订制</span>-->
      <!--<div class="intimate_swiper">-->
        <!--<div class="swiper-container">-->
          <!--<div class="swiper-wrapper">-->
            <!--<div class="swiper-slide">-->
              <!--<div class="intimate_item">-->
                <!--<img src="">-->
                <!--<div class="text">-->
                  <!--<span class="desc">男士优质小牛皮手工正装鞋</span>-->
                  <!--<span class="price">￥659</span>-->
                  <!--<div class="text">-->
                    <!--<span class="desc">男士优质小牛皮手工正装鞋</span>-->
                    <!--<span class="price">￥659</span>-->
                    <!--<div class="text">-->
                      <!--<span class="desc">男士优质小牛皮手工正装鞋</span>-->
                      <!--<span class="price">￥659</span>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class="swiper-slide">Slide 2</div>-->
                <!--<div class="swiper-slide">Slide 3</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="swiper-slide">-->
              <!--<div class="intimate_item">-->
                <!--<img src="">-->
                <!--<div class="text">-->
                  <!--<span class="desc">男士优质小牛皮手工正装鞋</span>-->
                  <!--<span class="price">￥659</span>-->
                  <!--<div class="text">-->
                    <!--<span class="desc">男士优质小牛皮手工正装鞋</span>-->
                    <!--<span class="price">￥659</span>-->
                    <!--<div class="text">-->
                      <!--<span class="desc">男士优质小牛皮手工正装鞋</span>-->
                      <!--<span class="price">￥659</span>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class="swiper-slide">Slide 2</div>-->
                <!--<div class="swiper-slide">Slide 3</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="swiper-slide">-->
              <!--<div class="intimate_item">-->
                <!--<img src="">-->
                <!--<div class="text">-->
                  <!--<span class="desc">男士优质小牛皮手工正装鞋</span>-->
                  <!--<span class="price">￥659</span>-->
                  <!--<div class="text">-->
                    <!--<span class="desc">男士优质小牛皮手工正装鞋</span>-->
                    <!--<span class="price">￥659</span>-->
                    <!--<div class="text">-->
                      <!--<span class="desc">男士优质小牛皮手工正装鞋</span>-->
                      <!--<span class="price">￥659</span>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class="swiper-slide">Slide 2</div>-->
                <!--<div class="swiper-slide">Slide 3</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="swiper-slide">-->
              <!--<div class="intimate_item">-->
                <!--<img src="">-->
                <!--<div class="text">-->
                  <!--<span class="desc">男士优质小牛皮手工正装鞋</span>-->
                  <!--<span class="price">￥659</span>-->
                  <!--<div class="text">-->
                    <!--<span class="desc">男士优质小牛皮手工正装鞋</span>-->
                    <!--<span class="price">￥659</span>-->
                    <!--<div class="text">-->
                      <!--<span class="desc">男士优质小牛皮手工正装鞋</span>-->
                      <!--<span class="price">￥659</span>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class="swiper-slide">Slide 2</div>-->
                <!--<div class="swiper-slide">Slide 3</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--&lt;!&ndash; 如果需要分页器 &ndash;&gt;-->
        <!--<div class="swiper-pagination"></div>-->
      <!--</div>-->
    <!--</div>-->
  </div>


</template>

<script>
  import Swiper from 'swiper'
  import '../../../node_modules/swiper/dist/css/swiper.min.css'

  export default {
    name: "HomePage",
    data() {
      isShowAllNav = false
    },
    methods: {},
    mounted() {
      var swiper = new Swiper('.swiper-container', {
        loop: true,

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  @import "swiper/dist/css/swiper.css"
  .homePageContainer
    width 100%
    .header
      display flex
      flex-wrap wrap
      align-items center
      padding .2rem .4rem
      .logo
        width: 1.8rem
        height: .5rem
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
        display: inline-block
        margin-right: .26667rem
        background-size: cover
        background-position: center
        background-repeat no-repeat
      .topSearch
        display flex
        align-items center
        width 60%
        height 0.7rem
        background-color #ededed
        color: #666
        line-height .7rem
        font-size 0.4rem
        border-radius 0.1rem
      .searchButton
        border 1px solid #b4282d
        font-size 0.32rem
        text-align center
        color #b4282d
        padding .1rem
        margin-left .5rem
        border-radius .1rem
      .tabs
        position relative
        display flex
        font-size .38rem
        margin-top .2rem
        div:nth-child(5)
          color red
          margin-left 25px
        .tab
          padding .25rem
          color: #333

        .active
          color #b4282d
          border-bottom #b4282d solid .1rem

  .server
    display flex
    justify-content space-around
    width 100%
    padding 0.25rem 0
    i
      font-size 12px
      color #b4282d
    span
      color #b4282d

  .categorysNav
    width 100%
    height: 392px;
    clearFix()
    li
      width: 1.46667rem
      height: 2.08rem
      float: left
      margin: .13333rem .26667rem 0
      display flex
      flex-direction column
      img
        width: 110px
        height: 110px
      span
        text-align center
        color: #333333
        margin-top: .13333rem
        font-size: .32rem
        line-height: .48rem
        white-space: nowrap

  .bossRecommen
    width 100%
    height 2rem
    img
      width 100%
      height 100%

  .shopList
    overflow: hidden;
    padding: .13333rem .4rem .4rem .34667rem;
    background: #fff;
    .list
      background-image: url(https://yanxuan.nosdn.127.net/252dbf6cdf6597f5a25940544be765c0.png);
      background-size: 100% 100%;
      float: left;
      display: block;
      width: 4.30333rem;
      height: 3.52rem;
      margin: .05333rem 0 0 .05333rem;
      padding: .26667rem 0 0 .26667rem;
      border-radius: .05333rem;
      .title
        color: #333333
        padding-left: .13333rem;
        font-size: .42667rem;

      .desc
        color: #7f7f7f
        padding-left: .13333rem
        font-size: .32rem
        margin-top .13333rem
        margin-bottom .13333rem

      img
        width: 2rem;
        height: 2rem;
        float: left;
        margin-right: .05333rem
      .text
        margin-top: 0;
        margin-bottom: .13333rem;
        font-size: .32rem;
        overflow: visible;
        white-space: normal;
        line-height: .48rem;
        .desc
          width: 2.88rem;
          color: #333;
          margin-top: 0;
          margin-bottom: .13333rem;
          font-size: .32rem;
          line-height: .48rem;
          white-space: normal;
        .price
          color: #b4282d

  /*
  .intimate
    .title
      width: 100%;
      height: 1.33333rem;
      line-height: 1.33333rem;
      font-size: .42667rem;
      padding: 0 .4rem;
      background: #fff;
      overflow: hidden;
    .intimate_swiper
      width 100%
      .swiper-pagination
      .swiper-slide
        position: relative;
        width: 750px;
        height: auto

   */
  .timeToBuy
    width: 100%;
    line-height: 1.33333rem;
    padding: 0 .4rem;
    background: #fff;
    overflow: hidden;
    font-size: .42667rem;
    /*background yellow*/
    .timeToBuyHeader
      width: 100%
      clearFix()
      .title
        float left
      .countTime
        float left
        display: inline-block
        vertical-align: middle
        margin: -.02rem 0 0 .16rem
        .hour, .minute, .second
          display: inline-block
          font-size: .32rem
          line-height: .48rem
          width: .48rem
          height: .48rem
          text-align: center
          background-color: #333
          border-radius: .05333rem
          color: #fff
          margin: 0 .13333rem
        .colon
          font-size: .37333rem
      .more
        float right
        display: block;
        font-size: .37333rem;
        color: #333;
        line-height: 1.33333rem;
        margin-right .67333rem
    .lists
      clearFix()
      .item
        text-align center
        color: #333;
        float: left;
        margin-right: .26667rem;
        img
          display block
          width: 2.88rem
          height: 2.88rem
          background: #F5F5F5;
          border-radius: 4px;
        .price
          font-size: .37333rem;
          color: #b4282d;
        .oldPrice
          font-size: .37333rem;
          color: #7f7f7f;
          text-decoration: line-through;
  .newGoods
    width: 100%;
    line-height: 1.33333rem;
    padding: 0 .4rem;
    background: #fff;
    overflow: hidden;
    font-size: .42667rem;
    .newGoodsHeader
      width: 100%
      padding: 0 .2rem;
      clearFix()
      .title
        float left
      .more
        float right
        display: block;
        font-size: .37333rem;
        color: #333;
        line-height: 1.33333rem;
        margin-right .67333rem
    .lists
      clearFix()
      .item
        text-align center
        color: #333;
        float: left;
        margin-right: .26667rem;
        img
          display block
          width: 2.88rem
          height: 2.88rem
          background: #F5F5F5;
          border-radius: 4px;



</style>
