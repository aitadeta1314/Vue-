<template>
    <ul>
        <p :style="{opacity}">欢迎使用vue</p>
        <li>news001 <input type="text" /></li>
        <li>news002 <input type="text" /></li>
        <li>news003 <input type="text" /></li>
    </ul>
</template>
<script>
export default {
    name: 'News_Peiqi',
    data() {
        return {
            opacity: 1,
        }
    },
    // beforeDestroy() {
    //     console.log('News组件即将被销毁了')
    //     clearInterval(this.timerrr)
    // },
    // mounted() {
    //     this.timerrr = setInterval(() => {
    //         console.log('@')
    //         this.opacity -= 0.1
    //         if (this.opacity < 0) this.opacity = 1
    //     }, 16);
    // },

    // /// 激活
    // activated() {
    //     console.log('News组件被激活了')
    //     this.timerrr = setInterval(() => {
    //         console.log('@')
    //         this.opacity -= 0.1
    //         if (this.opacity < 0) this.opacity = 1
    //     }, 16);
    // },
    // /// 失活
    // deactivated() {
    //     console.log('News组件失活了')
    //     clearInterval(this.timerrr)
    // },
}
</script>