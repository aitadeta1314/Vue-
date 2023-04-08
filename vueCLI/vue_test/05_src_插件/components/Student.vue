<template>
  <div class="student">
    <h1>学生姓名: {{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "我是一个提示msg",
      name: "FLJ",
    };
  },
};
</script>

<style>
.student {
  background-color: yellow;
}
</style>