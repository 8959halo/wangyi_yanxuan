<template>
  <div class="tabContainer">
    <!--推荐-->
    <div class="tabWrap">
      <div class="content">
        <ul class="list" v-for="(item,index) in recommendData" :key="index">
          <li v-for="(topic,index) in item.topics" :key="index">
            <XuanMei v-if="topic.style === 1" :topic="topic"/>
            <GroupItem v-if="topic.style === 2" :topic="topic"/>
          </li>
        </ul>
        <ul v-for="(item, index) in autoData.result" :key="index + '-label'">
          <li v-for="(topic, index) in item.topics" :key="index">
            <XuanMei v-if="topic.style === 1" :topic="topic"/>
            <GroupItem v-if="topic.style === 2" :topic="topic"/>
          </li>
        </ul>
      </div>
    </div>
    <!--收纳-->
    <div class="admissionWrap" v-if="tabId===1">
      <div class="content">
        <ul class="list" v-for="(item,index) in recommendData" :key="index">
          <li v-for="(topic,index) in item.topics" :key="index">
            <XuanMei v-if="topic.style === 1" :topic="topic"/>
            <GroupItem v-if="topic.style === 2" :topic="topic"/>
          </li>
        </ul>
        <ul v-for="(item, index) in autoData.result" :key="index + '-label'">
          <li v-for="(topic, index) in item.topics" :key="index">
            <XuanMei v-if="topic.style === 1" :topic="topic"/>
            <GroupItem v-if="topic.style === 2" :topic="topic"/>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'

  import XuanMei from '../../components/XuanMei/XuanMei'
  import GroupItem from '../../components/GroupItem/GroupItem'
  import HomeRecommend from '../../components/HomeRecommend/HomeRecommend'

  export default {
    name: 'Tab',
    components: {
      GroupItem,
      XuanMei,
      HomeRecommend
    },
    computed: {
      ...mapState({
        recommendData: state => state.find.recommendData,
        autoData: state => state.find.autoData

      }),
      // tabId(){
      //   if (this.$route.param.id==='0'){}
      //
      // }
    },
    mounted () {
      this.$store.dispatch('getRecommendData')
      this.$store.dispatch('getAutoData')
      this.$store.dispatch('getTabs')
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tabWrap
    margin-top 2rem
    height 16rem
    margin-bottom 1.30667rem
    .tabContent
      width 100%

</style>
