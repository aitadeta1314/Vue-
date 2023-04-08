export default {
  install(Vue, x, y, z) {
    // 参数为Vue
    console.log("Installing", Vue, x, y, z);

    // 这里可以做很多事情，
    // 比如之前的全局过滤器、全局指令、定义全局混入、给Vue原型上添加一个方法（vm和vc就都能用了）。

    // 全局过滤器
    Vue.filter("mySlice", function(value){
        return value.slice(0, 4)
    })
    
    /// 定义全局指令fbind
    Vue.directive('fbind', { // ！！！对象式写法（细分的写法）
        // 1. 指令与元素成功绑定bind时（一上来）
        bind(element, binding) {
            console.log('bind methods');
            element.value = binding.value
        },
        // 指令所在元素被插入页面时。
        inserted(element, binding) {
            console.log('inserted methods');
            element.focus()
        },
        // 2. 指令所在的模版被重新解析时update。
        update(element, binding) {
            console.log('update methods');
            element.value = binding.value
        },
    })

    // 全局混入，所有vm\vc都会有这两个data值
    Vue.mixin({
        data() {
            return {
                x: 100,
                y: 100,
            }
        },
    })

    // 给Vue原型上添加一个方法（vm和vc就都能用了）。
    Vue.prototype.hello = ()=> {alert("Hello方法弹框啦");}
  },
}

// const obj = {
//     install() {
//         console.log('Installing');
//     }
// }

// export default obj
