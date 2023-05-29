import Vue from "vue";
import App from "./App.vue";
// 引入store, vuex
import store from "./store";
/// 引入插件
import VueResource from "vue-resource";

Vue.config.productionTip = false;
/// 使用插件
Vue.use(VueResource)

// 在一个重要的内置关系一节中。06_组件 ->> 4一个重要的内置关系:
// VueComponent原型对象的原型对象就等于（指向）Vue的原型对象
// Vue.prototype.x = {a: 1, b: 2}

new Vue({
  el: "#app",
  render: (h) => h(App),
  store, // 
});
