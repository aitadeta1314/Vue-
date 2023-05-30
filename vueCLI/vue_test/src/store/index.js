// 该文件用于创建Vue中最为核心的store

import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)

// 准备actions，用于响应组件中的动作；类似`服务员`
const actions = {
    // "jia": function(context, value) {
    //     console.log('jia函数被调用了', context, value)
    //     context.commit('JIA', value)
    // },
    // "jian": function(context, value) {
    //     console.log('jian函数被调用了', context, value)
    //     context.commit('JIAN', value)
    // },
    "jiaOdd": function(context, value) {
        console.log('actions中的jiaOdd函数被调用了', context, value)
        if (context.state.sum % 2) {
            
            context.commit('JIA', value)
        }
    },
    "jiaWait": function(context, value) {
        console.log('actions中的jiaWait函数被调用了', context, value)
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500);
    },
};

// 准备mutations，用于操作数据；真正处理数据的地方，类似`后厨`
const mutations = {
    "JIA": function(state, value) {
        console.log('mutations中JIA函数被调用了')
        state.sum += value;
    },
    "JIAN": function(state, value) {
        console.log('mutations中JIAN函数被调用了')
        state.sum += value;
    },
};

// 准备state，用于存储数据；类似`菜`；类似Vue中的data属性
const state = {
    sum: 1,
};

// 准备getters，用于将state中的数据进行加工；类似Vue中的computed属性
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
};

export default new Vuex.Store({
    // ...
    actions,
    mutations,
    state,
    getters,
})