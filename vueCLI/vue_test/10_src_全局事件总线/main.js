import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// 在一个重要的内置关系一节中。06_组件 ->> 4一个重要的内置关系:
// VueComponent原型对象的原型对象就等于（指向）Vue的原型对象
// Vue.prototype.x = {a: 1, b: 2}

new Vue({
  el: "#app",
  render: (h) => h(App),
  beforeCreate() {
    // 在vue创建之前，在方法beforeCreate中，安装全局事件总线，$bus就是当前应用的vm
    Vue.prototype.$bus = this
  },
});
