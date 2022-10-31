import { createStore } from "vuex";

export default createStore({
  state: {
    PageWidth: 0,
  },
  getters: {},
  mutations: {
    // 定义修改state数据的值
    getPageWidth(state, width) {
      state.PageWidth = width;
    },
  },
  actions: {
    // 定义异步数据请求方法
    setPageWidth(store, width) {
      store.commit("getPageWidth", width);
    },
  },
  modules: {},
});
