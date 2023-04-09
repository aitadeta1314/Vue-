<template>
  <div class="app">
    <!-- 给谁绑的事件，就去找谁触发事件 -->
    <!-- getSchoolNameMethod作为一个表达式去执行 -->
    <!-- getSchoolName传递给子组件的方法函数，子组件使用props接收 -->
    <!-- ！！通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School v-bind:getSchoolName="getSchoolNameMethod" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据。 -->
    <!-- 写法1 使用@或者是v-on:-->
    <!-- <Student v-on:atguigu="demo"/> -->
    <Student @atguigu="demo" @method2="demo2" />
    <!-- 表示仅执行一次.once。与正常的事件操作一样 -->
    <!-- <Student @atguigu.once="demo"/> -->
    <!-- 写法2 使用ref属性, 灵活性强，比如场景：等待ajax请求完再执行，或者等待10s之后再执行。-->
    <!-- <Student ref="student"/> -->
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: {
    Student,
    School,
  },
  methods: {
    getSchoolNameMethod(name) {
      console.log("接收到子组件School回传回来的值：", name);
    },
    demo(name, secondValue) {
      console.log("demo方法触发啦");
      console.log(name);
      console.log(secondValue);
    },
    demo2() {
      console.log("demo2被触发了！！！");
    },
  },
  // mounted() {
  //   // this.$refs.student.$on('atguigu', this.demo)
  //   // <!-- 表示仅执行一次.once。与正常的事件操作一样 -->
  //   this.$refs.student.$once('atguigu', this.demo)
  // },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>