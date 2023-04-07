// 引入vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false

/**
 * 关于不同版本的Vue:
 *  1. vue.js与vue.runtime.xxx.js的区别：
 *    1.1 vue.js是完整版的Vue. 包含：核心功能和模版解析器。
 *    1.2 vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模版解析器。
 *  2. 因为vue.runtime.xxx.js没有模版解析器，所以不能在new Vue时使用template配置项，需要使用render函数。
 */

// 创建vue实例对象 -- vm
new Vue({
  el: '#app',
  // 将APP组件放入容器中
  // render: h => h(App),

  // 精简0
  // render(createElement) {
  //   // 因为没有使用this，可以写为箭头函数
  //   return createElement('h1', '你好啊')
  // },
  // 精简1
  // render: createElement => createElement('h1', '你好啊'),
  // 精简2
  render: q => q('h1', '你好啊'), // 创建HTML中的h1元素，内容是：你好啊。
})
