<template>
  <div class="xuanmeiContainer">
    <div class="header">
      <div class="logo">
        <img class="logoImg" :src="topic.avatar">
      </div>
      <div class="author">{{topic.nickname}}</div>
    </div>
    <div class="title">{{topic.title}}</div>
    <div class="banner">
      <img class="bannerImg" :src="topic.picUrl" >
    </div>
    <div class="info">
      <div class="seeCount">
        <i class="iconfont icon-kanguo"></i>
        <span>{{topic.readCount}}人看过</span>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    props:{
      topic:Object
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .xuanmeiContainer
    width: 100%
    padding: .36rem .34rem;
    box-sizing border-box
    .header
      margin-bottom: .54rem;
      font-size: .38rem;
      color: #333;
      height: .38rem;
      line-height: .38rem;
      .logo
        width: .56rem;
        height: .56rem;
        overflow: hidden;
        display inline-block
        border-radius: 50%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border: .01rem solid #d9d9d9;
        margin-right: .12rem;
        .logoImg
          width: 100%;
          height: 100%;
      .author
        display: inline-block;
        vertical-align super
    .title
      font-size: .48rem;
      color: #333;
      line-height: .62rem;
      margin: -.08rem 0 .16rem 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    .banner
      width 100%
      position: relative;
      margin-bottom: .2rem;
      overflow: hidden;
      border-radius: .08rem;
      .bannerImg
        display block
        width: 100%
        height: 100%
    .info
      font-size: .22rem;
      color: #999;
      line-height: .32rem;
      margin-top: .18rem;
      .seeCount
        .iconfont
          font-size .38rem
          margin-right .1rem
          vertical-align middle
        span
          display: inline-block;
          vertical-align: middle;
          font-size: .36rem

</style>
