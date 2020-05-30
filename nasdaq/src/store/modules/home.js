// 引入api接口
import { cateLists, reqindex, reqcateNavDatas } from "@/api";
const state = {
  cateLists: [],
  reqindex: [],
  reqcateNavDatas: [],
};
const mutations = {
  cateLists(state, cateLists) {
    state.cateLists = cateLists;
  },
  reqindex(state, reqindex) {
    state.reqindex = reqindex;
  },
  reqcateNavDatas(state, reqcateNavDatas) {
    state.reqcateNavDatas = reqcateNavDatas;
  },
};
const actions = {
  async cateLists({ commit }) {
    const result = await cateLists();
    if (result.code === 200) {
      JSON.stringify(result.data);
      commit("cateLists", result.data);
    }
  },
  async reqindex({ commit }) {
    const result = await reqindex();
    if (result.code === 200) {
      commit("reqindex", result.data);
    }
  },
  async reqcateNavDatas({ commit }) {
    const result = await reqcateNavDatas();
    if (result.code === 200) {
      commit("reqcateNavDatas", result.data);
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
