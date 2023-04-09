<template>
  <div class="student">
    <h1>学生姓名: {{ name }}</h1>
    <h1 class="atlijun">学生年龄: {{ age }}</h1>
    <button @click="sendStudentName">发送学生姓名给父组件App</button>
    <button @click="unbindMethod">解绑事件</button>
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
  methods: {
    sendStudentName() {
      // 触发atguigu的事件。
      this.$emit('atguigu',this.name, '我是第二个参数')
      this.$emit('method2')
    },
    unbindMethod() {
      // this.$off('atguigu') // 解绑一个自定义事件
      // this.$off(['atguigu', 'method2']) // 解绑多个自定义事件
      this.$off() // 解绑所有自定义事件
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