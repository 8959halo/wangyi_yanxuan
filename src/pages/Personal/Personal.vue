<template>
  <div class="personalContainer">
    <!--头部-->
    <div class="personalHeader">
      <div class="headerLeft">
        <i class="iconfont icon-shouye" @click="$router.replace('/')"></i>
      </div>
      <div class="logo"></div>
      <div class="headerRight">
        <div class="cart">
          <i class="iconfont icon-qicheqianlian-" @click="$router.replace('/cart')"></i>
        </div>
        <div class="search">
          <i class="iconfont icon-icon-test" @click="$router.replace('/search')"></i>
        </div>
      </div>
    </div>
    <!--Content-->
    <div class="content" v-if="$route.path==='/personal'">
      <div class="content-logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <!--登录方式-->
      <div class="login">
        <!--手机登录-->
        <div class="login_iphone" @click="$router.replace('/personal/iphone')">
          <i class="iconfont icon-shouji"></i>
          <span >手机号码登录</span>
        </div>
        <!--邮箱登录-->
        <div class="login_email">
          <i class="iconfont icon-youxiang"></i>
          <span>邮箱账号登录</span>
        </div>
      </div>
      <!--注册-->
      <div class="register_iphone">手机号快捷注册></div>
      <!--底部-->
      <div class="bottom">
        <div class="weixin">
          <i class="iconfont icon-weixin"></i>
          <span class="name1">微信</span>
        </div>
        <div class="qq">
          <i class="iconfont icon-qq"></i>
          <span class="name2">QQ</span>
        </div>
        <div class="weibo">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>

        <!--<div class="Content" >-->
          <!---->
        <!--</div>-->
      </div>
    </div>


  </div>
</template>

<script>

  export default {
        name: "Personal",
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .personalContainer
    width 100%
    height 1334px
    .personalHeader
      width 100%
      height 82px
      position absolute
      top 8px
      .headerLeft
        float left
        height 75px
        line-height 75px
        margin-left 20px
        .iconfont
          font-size 51px
      .logo
        position absolute
        width 172px
        height 54px
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png")
        background-repeat no-repeat
        margin-left 50%
        left -86px
        margin-top 20px
      .headerRight
        display flex
        height 75px
        float right
        line-height 75px
        margin-left 30px
        padding-right 20px
        .iconfont
          font-size 51px
        .icon-icon-test
          float right
          margin-left 30px
    .content
      position relative;
      top 0px
      background-color #F2F5F4
      height 1334px
      .content-logo
        margin-top 90px
        padding-top: 2.13333rem;
        padding-bottom: 2.13333rem;
        text-align center
        img
          width: 3.57333rem;
          height: 1.2rem;
      .login
        margin 0 auto
        text-align center
        width 90%

        .login_iphone
          height 95px
          line-height 95px
          background-color #b4282d
          border-radius 5px
          margin 32px 0
          color: #fff
          span
            font-size 30px
            display inline-block
            vertical-align top
            line-height 90px
          i
            font-size 48px

        .login_email
          height 95px
          line-height 95px
          border: 1px solid #b4282d
          color: #b4282d
          span
            font-size 30px
            display inline-block
            vertical-align top
            line-height 90px
          i
            font-size 48px
      .register_iphone
        text-align center
        margin-top 30px
      .bottom
        width 80%
        display flex
        justify-content space-around
        font-size 27px
        margin 0 auto
        margin-top 330px
        i
          font-size 40px
        /*.name1*/
          /*border-right 2px solid red*/
        /*.name2*/
          /*border-right 2px solid red*/


</style>
