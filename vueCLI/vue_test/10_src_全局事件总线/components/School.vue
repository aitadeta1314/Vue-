<template>
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <h2>接收到的学生名字：{{ receiveStudentName }}</h2>
    </div>
</template>

<script>
export default {
    name: "School",

    // 接受父组件传递过来的函数
    props: ["getSchoolName"],
    data() {
        return {
            name: "浙江大学啊",
            address: "浙江杭州",
            receiveStudentName: '',
        };
    },
    mounted() {
        console.log('School: ',this.x)
        // 总线监听
        this.$bus.$on('hello', (data)=> {
            console.log('我是School组件，我收到数据了，', data)
            this.receiveStudentName = data
        })
    },
    beforeDestroy() {
        /// 在销毁前注销掉这个总线
        this.$bus.$off('hello')
    },

};
</script>

<style>
.school {
    background-color: darksalmon;
}
</style>