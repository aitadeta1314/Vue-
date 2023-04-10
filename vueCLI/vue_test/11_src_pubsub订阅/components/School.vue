<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <h2>接收到的学生名字：{{ receiveStudentName }}</h2>
  </div>
</template>

<script>
// 引入订阅消息的第三方库 'pubsub-js'
import pubsub from "pubsub-js";
export default {
  name: "School",

  // 接受父组件传递过来的函数
  props: ["getSchoolName"],
  data() {
    return {
      name: "浙江大学啊",
      address: "浙江杭州",
      receiveStudentName: "",
    };
  },
  methods: {
    demoMethod(funcName, data) {
      console.log(this); // 输出的是 VC
      console.log(funcName, data);
    },
  },
  mounted() {
    console.log("School: ", this.x);
    // 总线监听
    // this.$bus.$on('hello', (data)=> {
    //     console.log('我是School组件，我收到数据了，', data)
    //     this.receiveStudentName = data
    // })

    // 订阅消息, 正确写法1：
    this.pubId = pubsub.subscribe("hello", (funcName, data) => {
      console.log(this); // 输出的VueComponent
      console.log(
        "有人发布了hello消息，hello消息的回调执行了哦, 我收到的数据是: ",
        funcName,
        data
      );
    });

    // 正确写法2：
    // pubsub.subscribe('hello', this.demoMethod)

    // ※※※※※错误写法：箭头函数，直接往外找；普通函数是从里面找，谁调用找谁
    // pubsub.subscribe('hello', function(funcName, data) {
    //     console.log(this) // 输出的是undefined
    //     console.log(funcName, data)
    // })

    // console.log("this.pubId: " + this.pubId)
  },
  beforeDestroy() {
    //   /// 在销毁前注销掉这个总线
    //   this.$bus.$off('hello')

    // 取消订阅
    pubsub.unsubcribe(this.pubId);
  },
};
</script>

<style>
.school {
  background-color: darksalmon;
}
</style>