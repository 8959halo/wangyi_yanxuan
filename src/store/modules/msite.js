// 首页状态管理模块
import {reqHomePageData} from '../../api'
import {RECEIVE_CATEGORIES} from '../mutation-types'

const state = {
  categories: []
};

const mutations = {
  [RECEIVE_CATEGORIES] (state,{categories}) {
    // mutation直接操作状态
    state.categories = categories
  }
};

const actions = {
  // 获取首页导航数据
  async getCategory ({commit}) {
    // 发送ajax
    const result = await reqHomePageData();
    const categories = result.data
    // 根据返回的数据调用mutations更改数据
    if (result.code === 0) {
      commit(RECEIVE_CATEGORIES, {categories})
    }
    // typeof cb === 'function' && cb()
  }
};

const getters = {

};

export default {
  state,
  mutations,
  actions,
  getters
}


