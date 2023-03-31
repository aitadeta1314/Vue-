// 引入vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false

// 创建vue实例对象 -- vm
new Vue({
  el: '#app',
  // 将APP组件放入容器中
  render: h => h(App),
})
