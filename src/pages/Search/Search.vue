<template>
  <div class="searchContainer">
    <!--头部-->
    <div class="header">
      <div class="search">
        <i class="iconfont icon-icon-test"></i>
        <span class="text">好评999，乌檀木圆形砧木</span>
      </div>
      <!--<input type="text" placeholder="999好评 乌檀木圆形砧板">-->
      <div class="cancle" @click="goTo('/')">取消</div>
    </div>
    <div class="searchContent">
      <div class="title">
        <span>热门搜索</span>
      </div>
    </div>
    <div class="lable">
      <ul class="list">
        <li class="item">早春穿搭 低至55折</li>
        <li class="item">按摩电器</li>
        <li class="item">美食 3件75折</li>
        <li class="item">换季收纳</li>
        <li class="item">珐琅锅 限时8折</li>
        <li class="item">四件套 269元起</li>
        <li class="item">热销 耙耙柑</li>
        <li class="item">蓝牙耳机</li>
        <li class="item">牛仔每满199减50</li>
        <li class="item">破壁机直降100元</li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'search',
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .searchContainer
    width 90%
    text-align center
    .header
      .search
        width 80%
        float left
        font-size 30px
        background-color #f4f4f4
        margin 25.5px 30px
        padding 15px 10px
        border-radius 5px
        .iconfont
          font-size 30px
        .text
          font-size 25px
          color black
          opacity .6
      .cancle
        position: absolute;
        right: 45px;
        top: 37.5px;
        font-size: 0.37333rem;
    .searchContent
      position absolute
      top 125px
      left 30px
      .title
        font-size 30px
        color black
        opacity .4
    .lable
      position absolute
      top 175px
      left: 10px;
      .list
        display flex
        flex-wrap wrap
        justify-content center
        font-size 30px
        .item
          border 1px solid #7e8c8d
          padding 10px
          margin 30px 25px 0 0
        &:nth-children(5)
          border 1px solid red
</style>
