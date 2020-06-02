// 引入api接口
import { cateLists, reqindex, reqcateNavDatas, reqworthbuying } from "@/api";
const state = {
  cateLists: [],
  reqindex: { categoryHotSellModule: {} },
  reqcateNavDatas: [],
  reqworthbuying: {
    navList: [],
  },
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
  reqworthbuying(state, reqworthbuying) {
    state.reqworthbuying = reqworthbuying;
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
  async reqworthbuying({ commit }) {
    const result = await reqworthbuying();
    console.log(result);
    if (result.code == 200) {
      commit("reqworthbuying", result.data);
    }
  },
};
const getters = {
  worthbuying(state) {
    const worthbuying = state.reqworthbuying.navList;
    return worthbuying;
  },
  categoryList(state) {
    const categoryList = state.reqindex.categoryHotSellModule.categoryList;
    return categoryList ? categoryList : {};
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
