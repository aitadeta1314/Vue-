// 该文件用于创建Vue中最为核心的store

import Vue from "vue"
// 引入vuex
import Vuex from "vuex"
// 应用Vuex插件
Vue.use(Vuex);

import countOptions from "./count"
import personOptions from "./person"

export default new Vuex.Store({
  modules: {
    countOptions,
    personOptions,
  },
});
