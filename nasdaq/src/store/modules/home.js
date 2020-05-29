// 引入api接口
import { cateLists } from "@/api";
const state = {
  cateLists: [], // 所有三级分类信息数据数组
};
const mutations = {
  // 直接修改大轮播图的数据
  cateLists(state, cateLists) {
    state.cateLists = cateLists;
  },
};
const actions = {
  // 发送请求获取大轮播图的数据
  async cateLists({ commit }) {
    const result = await cateLists();
    if (result.code === 200) {
      commit("cateLists", result.data);
    }
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
