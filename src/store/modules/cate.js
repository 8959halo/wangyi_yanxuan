// 首页状态管理模块
import {reqCateList} from '../../api'
import {RECEIVE_CATELIST} from '../mutation-types'

const state = {
  cateList: []
};

const mutations = {
  [RECEIVE_CATELIST] (state,{cateList}) {
    // mutation直接操作状态
    state.cateList = cateList
  }
};

const actions = {
  // 获取分类列表数据
  async getCateList ({commit}) {
    // 发送ajax
    const result = await reqCateList();
    console.log(result);
    const cateList = result.data
    // 根据返回的数据调用mutations更改数据
    if (result.code === 0) {
      commit(RECEIVE_CATELIST, {cateList})
    }
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


