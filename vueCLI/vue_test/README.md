## mixin 混入
1. 功能： 可以把多个组件共有的配置提取出一个mixin对象。
2. 使用方式：
    - 第一步定义混合，例如：
      ```
         export const a = {
             data() {
                 return {
                     ...,
                 }
             },
             methods: {
                 ...,
             }
         }
      ```
    - 第二部使用混入，例如：
        - 全局混入：Vue.mixins(xxx)，表示全局的vue组件，vc\vm都会混入
        - 局部混入：mixins: [xxx]

## webStorage
>存储内容大小一般为5MB左右。
localStorage 本地存储，一直存储。
sessionStorage 存储的内容会随着浏览器窗口关闭而消失。

## 全局事件总线
1. 一种组件中通信的方式，适用于任意组件间通信。
2. 安装全局事件总线：
    ```
        new Vue({
            ...
            beforeCreate() {
                // 安装全局事件总线，$bus就是当前的vm
                Vue.prototype.$bus = this
            }
            ...
        })
    ```
3. 使用事件总线：
   
    - 接收数据：A组件想要接收数据，则在A中给$bus绑定自定义事件，事件的回调留在A组件自身。
        ```
            methods(){
                demo(data) {...}
            },
            mounted() {
                <!-- 自定义事件xxxx -->
                this.$bus.$on('xxxx', this.demo)
            }
        ```
    - 发送数据：B组件中
        ```
            this.$bus.$emit('xxxx', data)    
        ```
4. 最好在组件销毁方法之前beforeDestroy钩子中，用$off去解绑当前组件所用到的事件。
   ```
        beforeDestroy() {
            this.$bus.$off('xxxx')
        }
   ```