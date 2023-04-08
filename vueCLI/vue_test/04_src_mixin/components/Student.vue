<template>
  <div class="student">
    <h1>学生姓名: {{ name }}</h1>
    <button @click="showName">点我获取名称</button>
  </div>
</template>

<script>
import { hunhe } from "../mixin";
export default {
  name: "Student",
  data() {
    return {
      msg: "我是一个提示msg",
      name: 'FLJ',
    };
  },
  mixins: [hunhe],
};
</script>

<style>
.student {
  background-color: yellow;
}
</style>