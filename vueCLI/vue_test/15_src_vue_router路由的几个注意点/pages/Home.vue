<template>
    <div>
        <h2>我是Home的内容</h2>
    </div>
</template>

<script>
export default {
    name: 'Home',
    // beforeDestroy() {
    //     console.log('Home组件被销毁了')
    // },
    mounted() {
        // 每个组件中的this.$route不一样。而this.$router则都是一样的
        console.log('Home组件挂载了', this)
    },
}
</script>