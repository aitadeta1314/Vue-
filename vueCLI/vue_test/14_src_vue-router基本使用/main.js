import Vue from "vue";
import App from "./App.vue";
// 引入vue-router
import VueRouter from "vue-router";
// 引入路由器
// import router from "./router/index.js"; // 写法1
import router from "./router"; // 写法2

Vue.config.productionTip = false;

// 在一个重要的内置关系一节中。06_组件 ->> 4一个重要的内置关系:
// VueComponent原型对象的原型对象就等于（指向）Vue的原型对象
// Vue.prototype.x = {a: 1, b: 2}

// 应用插件 
Vue.use(VueRouter);

new Vue({
  el: "#app",
  render: (h) => h(App),
  router: router,
});
