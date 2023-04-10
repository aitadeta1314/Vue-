<template>
    <div class="student">
        <h1>学生姓名: {{ name }}</h1>
        <h1 class="atlijun">学生年龄: {{ age }}</h1>
        <button @click="sendStudentName">发送学生的名字给School</button>
    </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return {
            msg: "我是一个提示msg",
            name: "FLJ",
            age: 29,
        };
    },
    mounted() {

        console.log('Student: ',this.x)

    },
    methods: {
        sendStudentName() {
            this.$bus.$emit('hello', this.name)
        }
    },
};
</script>


<style lang="less" scoped>
.student {
    background-color: yellow;
    padding: 5px;
    margin-top: 30px;
}
</style>