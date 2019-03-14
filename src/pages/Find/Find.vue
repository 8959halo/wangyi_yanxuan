<template>
  <div class="findContainer">
    <!-- 识物界面头部 -->
    <div class="headerContainer">
      <div class="header">
        <div class="header-left">
          <div class="goHome">
            <i class="iconfont icon-shouye" @click="goTo('/')"></i>
          </div>
        </div>

        <div class="title">
          <span class="main-title">发现</span>
          <span class="subTitle">甄选家</span>
        </div>
        <div class="header-right">
          <div class="goCart" >
            <i class="iconfont icon-qicheqianlian-" @click="goTo('/cart')"></i>
          </div>
          <div class="goSearch" >
            <i class="iconfont icon-icon-test" @click="goTo('/search')"></i>
          </div>
        </div>
      </div>
      <div class="headerNavContainer">
        <ul class="headerNav">

          <li class="headerNavItem" v-for="(item,index) in tabs " :key="index" >
            <router-link :to="`/find/tab/${index}`">
              <span>{{item.tabName}}</span>
            </router-link>

          </li>
        </ul>
      </div>
    </div>
    <!--识物界面主体内容-->
    <div class="topic-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    },
    computed:{
      ...mapState({
        tabs: state => state.find.tabs,
        recommendData: state => state.find.recommendData,
        autoData : state => state.find.autoData
      })
    },
    mounted(){
      this.$store.dispatch('getTabs')
      this.$store.dispatch('getRecommendData')
      this.$store.dispatch('getAutoData')
    },


  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .headerContainer
    position fixed
    left 0
    top 0
    z-index 200
    width: 100%
    background-color #fafafa

    // 头部
    .header
      width: 100%;
      height: 75px
      position: fixed !important;
      left: 0;
      top: 0;
      z-index: 100;
      background-color: #fafafa;
      border-bottom: .075px solid #d9d9d9;
      -webkit-box-sizing: border-box;
      margin: auto;
      overflow: hidden;
      padding: 0 .26rem 0 .24rem;

      .header-left
        float: left;
        height: 75px;
        line-height 75px
        padding-right: .02rem;
        .goHome
          float: left;

          .iconfont
            display: block;
            font-size .56rem

      .title
        position: absolute;
        width: 3.2rem;
        height: 100%;
        line-height: 75px;
        text-align: center;
        left: 50%;
        top: 0;
        margin-left: -1.6rem;
        font-size: .28rem;
        color: #7F7F7F;
        z-index: 1;

        .main-title
          font-size: .48rem;
          color: #b4282d;
          font-weight: bold;
          padding: 0 .16rem;
          vertical-align: middle;

        .subTitle
          font-size: .38rem;
          padding: 0 .16rem;
          vertical-align: middle;

      .header-right
        float: right;
        height: 75px;
        line-height 75px
        padding-right: .02rem;

        .goCart
          float: right;

          .iconfont
            display: block;
            font-size .56rem

        .goSearch
          float: right;
          margin-right: .3rem;

          .iconfont
            display: block;
            font-size .56rem


    // 头部导航
    .headerNavContainer
      width 100%
      height: 75px;
      line-height 75px
      margin-top 75px
      background: #fafafa;
      border-bottom: .075px solid #d9d9d9;
      .headerNav
        display flex
        height: 75px;
        .headerNavItem
          flex 1
          font-size: .36rem;
          text-align center
          &.active
            color: #B4282D;
            border-bottom: .04rem solid #B4282D;
            span
              color: #B4282D;
</style>
