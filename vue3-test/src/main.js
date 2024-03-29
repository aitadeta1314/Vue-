
// 引入的不在是Vue构造函数了，vue3引入的是一个名为createApp的工厂函数。
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')


// 可拆解为如下：
// 创建应用实例对象 ->app（类似于之前Vue2中的vm，但app比vm更‘轻’）
const app = createApp(App)
// 挂载
app.mount('#app')

// ！！Vue 2写法
// const vm = new Vue({
//     render: h => h(App),
// })
// vm.mount('#app')