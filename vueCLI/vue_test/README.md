## mixin 混入
    功能： 可以把多个组件共有的配置提取出一个mixin对象。
    使用方式：
        第一步定义混合，例如：
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
        第二部使用混入，例如：
            (1)全局混入：Vue.mixins(xxx)，表示全局的vue组件，vc\vm都会混入
            (2)局部混入：mixins: [xxx]