
<template>
    <div>
        <h2>我是About的内容</h2>
    </div>
</template>
<script>
export default {
    name: 'About',
    // beforeDestroy() {
    //     console.log('About组件被销毁了')
    // },
    mounted() {
        console.log('About组件挂载了', this)
    },
    // !!!通过路由规则，进入该组件时被调用
    beforeRouteEnter(to, from, next) {
        console.log('App -- beforeRouteEnter', to, from)
        /// 需要调用next()放行。
        next()

        // if (localStorage.getItem('school') === 'atguigu') {
        //     next()
        // } else {
        //     // 拦截
        //     alert('学校名称不对（来自`<组件内>的路由守卫`）')
        // }
    },

    // !!!通过路由规则，离开该组件时被调用
    beforeRouteLeave(to, from, next) {
        console.log('App -- beforeRouteLeave', to, from)
        // 需要写上，否则会进行拦截。
        next()
    }
}
</script>