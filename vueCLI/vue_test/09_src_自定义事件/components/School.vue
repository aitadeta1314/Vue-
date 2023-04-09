<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">点我传递学校名称</button>
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
    };
  },
  methods: {
    sendSchoolName() {
      // 触发事件
      this.getSchoolName(this.name);
    },
  },
};
</script>

<style>
.school {
  background-color: darksalmon;
}
</style>