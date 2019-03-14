import {RECEIVE_AUTODATA, RECEIVE_RECOMMENDDATA, RECEIVE_TABS} from '../mutation-types'
import {reqAutoData, reqRecommendData, reqTabs} from '../../api'

const state = {
  tabs:[],
  recommendData:[],
  autoData:[]

}
const mutations ={
  //tab的数据
  [RECEIVE_TABS] (state,{tabs}){
    state.tabs=tabs
  },
  //推荐数据
  [RECEIVE_RECOMMENDDATA] (state,{recommendData}) {
    state.recommendData=recommendData
  },
  //自动推荐数据
  [RECEIVE_AUTODATA] (state,{autoData}){
    state.autoData = autoData
  }

}
const actions={
  //获取tabs的数据
  async getTabs({commit}){
    //发ajax请求
    const result = await reqTabs()
    if (result.code=== '200'){
      const tabs = result.data
      commit(RECEIVE_TABS,{tabs})
    }
  },
  //获取recommend的数据
  async getRecommendData({commit}){
    //发送ajax请求
    const result = await reqRecommendData()
    console.log(result);
    if (result.code==='200'){
      const recommendData = result.data
      commit(RECEIVE_RECOMMENDDATA,{recommendData})
    }
  },
  //获取自动推荐的数据
  async getAutoData({commit}){
  //  发送ajax请求
    const result = await reqAutoData()
    if (result.code==='200'){
      const autoData = result.data
      commit(RECEIVE_AUTODATA,{autoData})
    }
  }

}
const getters={

}

export default {
  state,
  mutations,
  actions,
  getters
}
