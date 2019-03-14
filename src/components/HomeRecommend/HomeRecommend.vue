<!--推荐
    style 0
-->

<template>
  <div class="homeWrap">
    <div class="title">{{topic.title}}</div>
    <div class="banner">
      <img class="bannerImg" v-lazy="topic.picUrl" alt="">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'HomeRecommend',
    props: {
      topic: Object
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
