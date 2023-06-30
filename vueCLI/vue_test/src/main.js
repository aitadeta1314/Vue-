import Vue from "vue";
import App from "./App.vue";
import { Button, Select } from 'element-ui';

Vue.config.productionTip = false;

// ！！！路由组件放在pages文件夹中，例如About.vue和Home.vue；
// 一般组件放在components文件夹下；
/// 注册全局组件的 Vue.component()
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);

new Vue({
  el: "#app",
  render: (h) => h(App),
  router: router,
});
