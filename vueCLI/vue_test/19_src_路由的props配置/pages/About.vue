
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
}
</script>