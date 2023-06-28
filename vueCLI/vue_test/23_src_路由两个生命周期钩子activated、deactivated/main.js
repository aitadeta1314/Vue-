import Vue from "vue";
import App from "./App.vue";
// 引入vue-router
import VueRouter from "vue-router";
// 引入路由器
// import router from "./router/index.js"; // 写法1
import router from "./router"; // 写法2

Vue.config.productionTip = false;

// ！！！路由组件放在pages文件夹中，例如About.vue和Home.vue；
// 一般组件放在components文件夹下；

// 应用插件 
Vue.use(VueRouter);

new Vue({
  el: "#app",
  render: (h) => h(App),
  router: router,
});

// 几个注意点：
/**
 * 1.路由组件通常存放在pages文件夹，一般组件通常存放在components文件夹。
 * 2.通过切换，“隐藏”了的路由组件，默认是被销毁掉的（可以操作不被销毁），需要的时候再去挂载。
 * 3.每个组件都有自己的 $route 属性，里面存储着自己的路由信息。
 * 4.整个应用只有一个router，可以通过组件的 $router 属性获取到。
 */